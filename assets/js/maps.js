var hubMap = {
  version: ".1"
};

function HubMap(options) {
  this.options = options;
  this.data = "";
  this.map = false;
  this.legend = "";
  this.options.legendCategories = options.legendCategories || [];
  this.baseLayer = "";
  this.loadData();
}

HubMap.prototype.loadData = function() {
  var $$ = this, options = $$.options;
  var data = (/^https?:\/\//.test(options.data)) ? options.data : '/data-browser/data/' + options.data;
  $$.options.dataType = (data.indexOf("geojson") > -1 ? "geojson" : data.indexOf("json") > -1 ? "json" : data.indexOf("csv") > -1 ? "csv" : false);
  if(!options.dataType) {
    throw new Error('Data is not one of either json, geojson or csv');
  }
  if(options.dataType == 'geojson') {
    $.getJSON(data, function(geojson) {
      $$.data = geojson;
      $$.render();
    });
  } else if(options.dataType == 'csv') {
    $$.data = data;
    $$.render();
  }
};

HubMap.prototype.render = function() {
  var $$ = this, options = $$.options;
  var popup = options.popup,
  column = options.x,
  colors = options.colors;

  L.mapbox.accessToken = 'pk.eyJ1IjoiZGF0YXNmIiwiYSI6Ilo3bVlHRDQifQ.7gkiPnZtioL8CnCvJ5z9Bg';
  /* initialize map */
  $$.map = L.mapbox.map($$.options.container, 'datasf.j9b9ihf0').setView([37.767806, -122.438153], 12);
  /* add base layer */
  if(options.dataType == 'geojson') $$.baseLayer = customLayer($$.data).addTo($$.map);
  if(options.dataType == 'csv') $$.baseLayer = omnivore.csv($$.data, null, customLayer()).addTo($$.map);

  if(options.dataType == 'csv') {
    $$.baseLayer.on('ready', function(){
      $$.data = $$.baseLayer.toGeoJSON();
      $$.buildLegend();
      $$.map.legendControl.addLegend($$.legend);
      $$.bindInteractive();
    });
  } else {
    $$.buildLegend();
    $$.map.legendControl.addLegend($$.legend);
    $$.bindInteractive();
  }

  function customLayer(data) {
    if(!data) {
      data = null;
    }
    return L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
        if ($$.options.legendCategories.indexOf(feature.properties[column]) == -1) {
          $$.options.legendCategories.push(feature.properties[column]);
        }
        return new L.CircleMarker(latlng, {
          radius: 4,
          color: '#000',
          fillColor: $$.getColor($$.options.legendCategories.indexOf(feature.properties[column]) + 1, $$.options.legendCategories.length < 3 ? 3 : $$.options.legendCategories.length),
          fillOpacity: 1,
          stroke: true,
          weight: 1,
          opacity: .8
        });
      },
      onEachFeature: bindPointPopup
    });
  }

  function bindPointPopup(feature, layer) {
    var popupContent = "<h1 class='popup-title'>" + feature.properties[popup.title] + "</h1>";
    popupContent += "<p>" + feature.properties[popup.subtitle] + "</p>";
    if (Array.isArray(popup.info)) {
      popupContent += "<p>";
      var info = popup.info;
      for (var i = 0; i < info.length; i++) {
        if (feature.properties[info[i]]) {
          popupContent += "<b>" + info[i].replace(/_/g," ").toTitleCase() + "</b>: " + feature.properties[info[i]] + "</br>";
        }
      }
      popupContent += "</p>";
    }
    layer.bindPopup(popupContent);
  }
};

HubMap.prototype.getColor = function(num,s) {
  if (num === -1) {
    return "transparent";
  }
  return colorbrewer[this.options.colors][s][num - 1];
};

HubMap.prototype.buildLegend = function() {
  var $$ = this, options = $$.options,
  categories = $$.options.legendCategories;
  if(options.type == 'map-point') {
    var labels = [];
    var container = $('<div>');
    var title = $('<span>');
    title.html('Legend (click to filter)');
    container.append(title);

    for (var i = 0; i < categories.length; i++) {
      var item = $('<div class="legend-item">');
      var symbol = item.append($('<i>').css("background", $$.getColor(i + 1, categories.length)));
      var checkbox = item.append($('<input class="legend-filter" type="checkbox" id="' + i + '" checked="true" style="display:none;" value="' + categories[i] + '" />'));
      var label = $('<span>').html(categories[i]);
      item.append(label);

      container.append(item);
      labels.push(label);
    }
    $$.legend = $('<div>').append(container).html();
    return this;
  }
}

HubMap.prototype.bindInteractive = function() {
  var $$ = this, options = $$.options;

  $('#' + options.container).on('click', '.legend-item', function(e) {
    $(this).children('.legend-filter').prop('checked') ? $(this).children('.legend-filter').prop('checked', false) : $(this).children('.legend-filter').prop('checked', true);
    $(this).children('i').toggleClass('off');
    var enabled = {};
    $('.legend-filter').each(function(i, el) {
      if ($(el).prop('checked')) enabled[$(el).val()] = true;
    });
    $$.baseLayer.clearLayers();
    $$.baseLayer.options.filter = function(feature, layer) {
      return (feature.properties[options.x] in enabled);
    }
    $$.baseLayer.addData($$.data);
  });
}


HubMap.prototype.scratch = function() {


  var markerCats = [];

  if(other) {
    /*
    {% if page["legend-cats"] %}
    legendCats = '{{page.legend-cats}}';
    markerCats = legendCats.split(","); 
    {% endif %}*/

    function bindPointPopup(feature, layer) {
      var popupContent = "<h1 class='popup-title'>" + feature.properties[popup.title] + "</h1>";
      popupContent += "<p>" + feature.properties[popup.subtitle] + "</p>";
      if (Array.isArray(popup.info)) {
        popupContent += "<p>";
        var info = popup.info;
        for (var i = 0; i < info.length; i++) {
          if (feature.properties[info[i]]) {
            popupContent += "<b>" + info[i].replace(/_/g," ").toTitleCase() + "</b>: " + feature.properties[info[i]] + "</br>";
          }
        }
        popupContent += "</p>";
      }
      layer.bindPopup(popupContent);
    }

    var customLayer = function(data) {
      if(!data) {
        data = null;
      }
      return L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
          if (markerCats.indexOf(feature.properties[column]) == -1) {
            markerCats.push(feature.properties[column]);
          }
          return new L.CircleMarker(latlng, {
            radius: 4,
            color: '#000',
            fillColor: getColor(markerCats.indexOf(feature.properties[column]) + 1, markerCats.length < 3 ? 3 : markerCats.length),
            fillOpacity: 1,
            stroke: true,
            weight: 1,
            opacity: .8
          });
        },
        onEachFeature: bindPointPopup
      });
    }

    function setLayers(layers) {
      //Todo: abstract this so that I can pass in names of layers earlier on, for now, these are hard coded
      var baseLayers = {
        "No Overlay": new L.layerGroup(),
        "Supervisor Districts": layers[0],
        "Neighborhoods": layers[1]
      }
      L.control.layers(baseLayers, null).addTo(map);
    }

    //var legend = L.mapbox.legendControl().addLegend(()).addTo(map);

    var layerData;
    
    var csvLocation = (/^https?:\/\//.test(d)) ? d : '{{site.baseurl}}/data/' + d;
    
    var csvLayer;
    
    if(csvLocation.indexOf("json") > -1) {
      $.getJSON(csvLocation, function(json) {
        layerData = toGojson(json,'location');
        csvLayer = customLayer(layerData).addTo(map);
        var legendCont = L.mapbox.legendControl().addLegend(getPointLegendHTML(markerCats)).addTo(map);
        var overlayLayer;
        var overlayLayers = [];
        for (var i = 0; i < overlays.length; i++) {
          (function(i) {
            $.getJSON(overlays[i], function(geodata) {
              geojson = L.geoJson(geodata, {
                style: {
                  weight: 2,
                  opacity: 0.4,
                  color: '#808080',
                  fillOpacity: 0
                },
                onEachFeature: onEachFeature
              });
              overlayLayers[i] = geojson;
            })
            .done(function() {
              if (i = overlays.length - 1) {
                setLayers(overlayLayers);
              }
            });
          })(i);
        };
      });
    } else {
      //todo: refactor map creation, simplify data processing
    // detect data type, pass data to custom layer and add to map, add legends and bind points (change the way legends are defined), add overlays

    var csvLayer = omnivore.csv(csvLocation, null, customLayer())
    .on('ready', function() {
      layerData = csvLayer.toGeoJSON();
      var legendCont = L.mapbox.legendControl().addLegend(getPointLegendHTML(markerCats)).addTo(map);
      var overlayLayers = [];
      for (var i = 0; i < overlays.length; i++) {
        (function(i) {
          $.getJSON(overlays[i], function(geodata) {
            geojson = L.geoJson(geodata, {
              style: {
                weight: 2,
                opacity: 0.4,
                color: '#808080',
                fillOpacity: 0
              },
              onEachFeature: onEachFeature
            });
            overlayLayers[i] = geojson;
          })
          .done(function() {
            if (i = overlays.length - 1) {
              setLayers(overlayLayers);
            }
          });
        })(i);
      };
    })
    .addTo(map);
  }

  $('#' + container).on('click', '.legend-item', function(e) {
    $(this).children('.legend-filter').prop('checked') ? $(this).children('.legend-filter').prop('checked', false) : $(this).children('.legend-filter').prop('checked', true);
    $(this).children('i').toggleClass('off');
    var enabled = {};
    $('.legend-filter').each(function(i, el) {
      if ($(el).prop('checked')) enabled[$(el).val()] = true;
    });
    csvLayer.clearLayers();
    csvLayer.options.filter = function(feature, layer) {
      return (feature.properties[column] in enabled);
    }
    csvLayer.addData(layerData);
  });

} else {
  var autoPopup = new L.Popup({
    autoPan: false
  });
  $.ajax({
    type: "GET",
    url: "{{site.baseurl}}/data/" + d,
    dataType: "text",
    success: function(data) {
      json = scaleData(d3.csv.parse(data));
      $.getJSON(geofile, function(geodata) {
        geodata = addDataToGeoJson(json, geodata)
        geojson = L.geoJson(geodata, {
          style: getStyle,
          onEachFeature: onEachFeature
        }).addTo(map);
        var legendCont = L.mapbox.legendControl().addLegend(getLegendHTML()).addTo(map);
      });
    }
  });
}
}

hubMap.generate = function(options, container) {
  if (container) {
    options.container = container;
  }
  return new HubMap(options);
}