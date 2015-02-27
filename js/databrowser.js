---
---
var browserData =
{
{% for post in site.posts reversed | sort: title %}
{% if post.layout == 'data' %}
  	"{{post.id | replace:'"','\"'}}": {
  		"category" : "{{post.category}}",
  		"data" : "{{post.data}}",
  		"column" : "{{post.column}}",
  		"description" : '{{post.content | strip_newlines | escape_once }}',
  		"source" : "{{post.source}}",
  		"notes" : "{{post.notes | escape_once }}",
  		"chart-title" : "{{post.chart-title}}",
  		"scale" : "{{post.scale}}",
  		"colors" : "{{post.colors}}",
  		"type" : "{{post.type}}",
  		"units" : "{{post.units}}",
  		"y-format" : "{{post.y-format}}",
  		"axis-type" : "{{post.axis-type}}",
      "groups" : "{{post.groups}}",
      "popup" : "{{post.popup}}",
      "margin": "{{post.margin}}",
      "legendTitle": "{{post.legend-title}}",
      "emphasis": "{{post.emphasis}}",
      "legend": "{{post.legend}}",
      "max": "{{post.max}}",
      "pleft": "{{post.pleft}}"
  	} {% unless forloop.last %},{% endunless%}
{% endif %}
{% endfor %}
};
