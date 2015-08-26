function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var hubChart = {
  version: ".1"
};

function HubChart(options) {
  this.options = options;
  this.data = "";
  this.loadData();
}

HubChart.prototype.getOption = function(key) {
  return this.options[key];
}

HubChart.prototype.setOption = function(key, value) {
  return this.options[key] = value;
}

HubChart.prototype.loadData = function() {
  $$ = this;
  if ($$.options.mimeType === "json") {
    $.ajax({
      url: $$.options.data,
      type: 'GET',
      success: function(response) {
        if ($$.options.transform !== "") {
          var transformer = new Transformer();
          var transform = new window[$$.options.transform];
          if (typeof transform === "object") {
            transformer.setTransform(transform);
            response = transformer.run(response, $$);
          }
          else {
            throw new Error('transformer does not exist for ' + this.options.chartTitle);
          }
        }
        $$.data = response
        $$.render();
      }
    });
  } else {
    $$.data = $$.options.data;
    $$.render();
  }
}

HubChart.prototype.render = function() {
  /*
  initiate defaults
  */
  var max = null,
    pleft = null,
    show = true,
    rotated = false,
    names = {},
    legend = 'bottom',
    type = 'area',
    mimeType = 'csv';
  /* detect whether the data is being passed via external url */
  if (typeof this.data === "string") {
    var url = (/^https?:\/\//.test(this.data)) ? this.data : '/data-browser/data/' + this.data;
  }
  /* define derived variables based on input this.options */
  show = this.options.legend == 'none' ? false : true;
  rotated = this.options.type == 'bar-horizontal' ? true : false;
  /* redefine certain parameters */
  this.options.legend = this.options.legend == '' ? legend : this.options.legend;
  this.options.groups = this.options.groups == null ? [] : this.options.groups;
  this.options.type = this.options.type == '' ? type : (this.options.type == 'bar-horizontal' ? 'bar' : this.options.type);
  this.options.mimeType = this.options.mimeType == '' ? mimeType : this.options.mimeType;
  this.options.yFormat = (this.options.yFormat != '' && !isFunction(this.options.yFormat)) ? d3.format(this.options.yFormat) : this.options.yFormat;
  this.options.emphasis = this.options.emphasis == null ? [null, null, null] : this.options.emphasis;
  /* 
  generate names from chart values to make them human friendly
  - remove underscores
  - title case
  */
  if (this.options.value) {
    this.options.value.forEach(function(v) {
      var name = v.replace(/_/g, " ");
      names[v] = name.toTitleCase();
    })
  }

  /* override tooltips to include Margins of Error where applicable*/
  var tooltip_contents = function(d, defaultTitleFormat, defaultValueFormat, color) {
    var $$ = this,
      config = $$.config,
      CLASS = $$.CLASS,
      titleFormat = config.tooltip_format_title || defaultTitleFormat,
      nameFormat = config.tooltip_format_name || function(name) {
        return name;
      },
      valueFormat = config.tooltip_format_value || defaultValueFormat,
      text, i, title, value, name, bgcolor;

    // You can access all of data like this:
    var allData = $$.data.targets;

    for (i = 0; i < d.length; i++) {
      if (!(d[i] && (d[i].value || d[i].value === 0))) {
        continue;
      }

      if (!text) {
        title = titleFormat ? titleFormat(d[i].x) : d[i].x;
        text = "<table class='" + CLASS.tooltip + "'>" + (title || title === 0 ? "<tr><th colspan='2'>" + title + "</th></tr>" : "");
      }

      name = nameFormat(d[i].name);
      value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
      if ((typeof allData[i + i + 1] != "undefined") && allData[i + i + 1].id.indexOf("MOE") > -1) {
        value += " +/-" + valueFormat(allData[i + i + 1].values[d[i].index].value);
      }
      bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);

      text += "<tr class='" + CLASS.tooltipName + "-" + d[i].id + "'>";
      text += "<td class='name'><span style='background-color:" + bgcolor + "'></span>" + name + "</td>";
      text += "<td class='value'>" + value + "</td>";
      text += "</tr>";
    }
    return text + "</table>";
  }

  /* call c3 to render chart set options to local scope */

  var options = this.options;
  var data = this.data;
  var chart = c3.generate({
    bindto: options.container,
    padding: {
      bottom: 30,
      left: pleft
    },
    data: {
      url: url || undefined,
      json: (Object.prototype.toString.call(data[0]) === '[object Object]' ? data : undefined),
      columns: (Object.prototype.toString.call(data[0]) === '[object Array]' ? data : undefined),
      x: (Object.prototype.toString.call(data[0]) === '[object Array]' ? undefined : options.x),
      xFormat: options.xFormat,
      mimeType: options.mimeType,
      keys: {
        x: options.x,
        value: options.value
      },
      names: names,
      groups: [options.groups],
      type: options.type,
      color: function(color, d) {
        return d.id && d.index == options.emphasis[1] && d.id == options.emphasis[0] ? d3.rgb('#' + options.emphasis[2]) : color;
      },
      order: null,
      hide: ["MOE", "MOE_Renter", "MOE_Owner", "MOE_More", "MOE_Less"]
    },
    tooltip: {
      contents: tooltip_contents
    },
    color: {
      pattern: ['#5a9bd4', '#7ac36a', '#faa75b', '#9e67ab', '#ce7058', '#d77fb4', '#f15a60', '#737373']
    },
    legend: {
      position: options.legend,
      show: show,
      hide: ["MOE", "MOE_Renter", "MOE_Owner", "MOE_More", "MOE_Less"]
    },
    axis: {
      rotated: rotated,
      x: {
        type: options.axisType,
        tick: {
          format: options.xTickFormat,
          width: 150
        }
      },
      y: {
        min: 0,
        max: max,
        padding: {
          bottom: 0,
          top: 3
        },
        tick: {
          format: options.yFormat
        }
      }
    }
  });
}

hubChart.generate = function(options, container) {
  if (container) {
    options.container = container;
  }
  return new HubChart(options)
}
