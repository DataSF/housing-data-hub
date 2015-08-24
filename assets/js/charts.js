function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function generateChart(params, container) {
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
  var url = (/^https?:\/\//.test(params.data)) ? params.data : '/data-browser/data/' + params.data;
  /* define derived variables based on input params */
  show = params.legend == 'none' ? false : true;
  rotated = params.type == 'bar-horizontal' ? true : false;
  /* redefine certain parameters */
  params.legend = params.legend == '' ? legend : params.legend;
  params.groups = params.groups == null ? [] : params.groups;
  params.type = params.type == '' ? type : (params.type == 'bar-horizontal' ? 'bar' : params.type);
  params.mimeType = params.mimeType == '' ? mimeType : params.mimeType;
  params.yFormat = (params.yFormat != '' && !isFunction(params.yFormat)) ? d3.format(params.yFormat) : params.yFormat;
  params.emphasis = params.emphasis == null ? [null, null, null] : params.emphasis;
  /* 
  generate names from chart values to make them human friendly
  - remove underscores
  - title case
  */
  if (params.value) {
    params.value.forEach(function(v) {
      var name = v.replace(/_/g, " ");
      names[v] = name.toTitleCase();
    })
  }
  
  /* override tooltips to include Margins of Error where applicable*/
  var tooltip_contents = function (d, defaultTitleFormat, defaultValueFormat, color) {
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

  var chart = c3.generate({
    bindto: container,
    padding: {
      bottom: 30,
      left: pleft
    },
    data: {
      url: url,
      x: params.x,
      xFormat: params.xFormat,
      mimeType: params.mimeType,
      keys: {
        x: params.x,
        value: params.value
      },
      names: names,
      groups: [params.groups],
      type: params.type,
      color: function(color, d) {
        return d.id && d.index == params.emphasis[1] && d.id == params.emphasis[0] ? d3.rgb('#' + params.emphasis[2]) : color;
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
      position: params.legend,
      show: show,
      hide: ["MOE", "MOE_Renter", "MOE_Owner", "MOE_More", "MOE_Less"]
    },
    axis: {
      rotated: rotated,
      x: {
        type: params.axisType,
        tick: {
          format: params.xTickFormat,
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
          format: params.yFormat
        }
      }
    }
  });
  
  return chart;
}