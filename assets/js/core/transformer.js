/* The Transfomer takes data that cannot be consumed directly from the portal into C3 and gets it ready for charting */

var Transformer = function() {
  this.transform = "";
};

Transformer.prototype = {
  setTransform: function(transform) {
    this.transform = transform;
  },

  run: function(data,chart) {
    return this.transform.run(data,chart);
  }
};

/* turn categories from portal to columns */
var toColumns = function() {
  this.run = function(data,chart) {
    var output = [];
    var total = 0;
    $.each(data, function(idx, rec) {
      output.push([rec[chart.options.x], rec.count]);
      total += +rec.count;
    });
    if (total == 0) {
      return false;
    }
    else {
      return output;
    }
  }
};

var toMatrix = function() {
  this.run = function(data,chart) {
    var output = [[chart.options.x]];
    $.each(data,function(idx,rec) {
      if(output[0].indexOf(rec[chart.options.pivot]) !== -1) {
        output[0].push()
      }
      
    });
  }
}

/* turn booleans from portal to counts where true */
var countBoolean = function() {
  this.run = function(data,chart) {
    var map = {};
    $.each(data,function(idx, rec) {
      if(!map[rec[chart.options.x]]) {
        map[rec[chart.options.x]] = rec;
        for(var prop in rec) {
          map[rec[chart.options.x]][prop] = rec[prop] === true ? 1 : rec[prop] === false ? 0 : rec[prop];
        }
      } else {
        for(var prop in rec) {
          map[rec[chart.options.x]][prop] = rec[prop] === true ? map[rec[chart.options.x]][prop] + 1 : rec[prop] === false ? map[rec[chart.options.x]][prop] : rec[prop];
        }
      }
    });
    var output = [];
    for (var prop in map) {
      output.push(map[prop]);
    }
    return output;
  }
}

/* special transform to categorize fault vs. no fault evictions,
this could be abstracted to pass in the categories as an object, but for now this will do*/
var categorizeFault = function() {
  this.run = function(data,chart) {
    var map = {};
    var noFault = false;
    $.each(data,function(idx, rec) {
      for(var prop in rec) {
          noFault = (typeof rec[prop] === "boolean" ? rec[prop] : false);
          if(noFault) break;
        }
      if(!map[rec[chart.options.x]]) {
        map[rec[chart.options.x]] = {};
        map[rec[chart.options.x]]['fault'] = (!noFault ? 1 : 0);
        map[rec[chart.options.x]]['no_fault'] = (noFault ? 1 : 0);
        map[rec[chart.options.x]][chart.options.x] = rec[chart.options.x]
      } else {
        map[rec[chart.options.x]]['fault'] = (!noFault ? 1 + map[rec[chart.options.x]]['fault'] : map[rec[chart.options.x]]['fault']);
        map[rec[chart.options.x]]['no_fault'] = (noFault ? 1 + map[rec[chart.options.x]]['no_fault'] : map[rec[chart.options.x]]['no_fault']);
      }
    });
    var output = [];
    for (var prop in map) {
      output.push(map[prop]);
    }
    return output;
  }
}