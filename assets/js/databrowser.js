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
      "groups" : {{post.groups | jsonify}},
      "popup" : {{post.popup | jsonify }},
      "margin": "{{post.margin}}",
      "legendTitle": "{{post.legend-title}}",
      "emphasis": {{post.emphasis | jsonify}},
      "legend": "{{post.legend}}",
      "max": "{{post.max}}",
      "pleft": "{{post.pleft}}"
  	} {% unless forloop.last %},{% endunless%}
{% endif %}
{% endfor %}
};
