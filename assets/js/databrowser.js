---
---
var browserData =
{
{% for post in site.posts reversed | sort: title %}
{% if post.layout == 'data' %}
  	"{{post.id | replace:'"','\"'}}": {
  		"category" : "{{post.category}}",
  		"data" : "{{post.data}}",
  		"x" : "{{post.column}}",
  		"xFormat" : "{{post.xInputFormat}}",
  		"xTickFormat" : "{{post.xTickFormat}}",
  		"mimeType" : "{{post.dataType}}",
  		"value": {{post.chartvalues | jsonify}},
  		"names": {{post.chartnames | jsonify}},
  		"description" : '{{post.content | strip_newlines | escape_once }}',
  		"source" : "{{post.source}}",
  		"notes" : "{{post.notes | escape }}",
  		"chartTitle" : "{{post.chart-title}}",
  		"scale" : "{{post.scale}}",
  		"colors" : "{{post.colors}}",
  		"type" : "{{post.type}}",
  		"units" : "{{post.units}}",
  		"yFormat" : "{{post.yFormat}}",
  		"axisType" : "{{post.axisType}}",
  		"transform": "{{post.transform}}",
      "groups" : {{post.groups | jsonify}},
      "popup" : {{post.popup | jsonify }},
      "margin": "{{post.margin}}",
      "legendTitle": "{{post.legend-title}}",
      "emphasis": {{post.emphasis | jsonify}},
      "legend": "{{post.legend}}",
      "legendCategories": {{post.legendCategories | jsonify}},
      "max": "{{post.max}}",
      "pleft": "{{post.pleft}}"
  	} {% unless forloop.last %},{% endunless%}
{% endif %}
{% endfor %}
};
