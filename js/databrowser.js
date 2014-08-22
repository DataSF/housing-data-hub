---
---
var browserData = [
{% for post in site.posts reversed | sort: title %}
{% if post.layout == 'data' %}
  {
  	"{{post.id | replace:'"','\"'}}": {
  		"category" : "{{post.category}}",
  		"data" : "{{post.data}}",
  		"column" : "{{post.column}}",
  		"description" : "{{post.content | strip_newlines }}",
  		"source" : "{{post.source}}",
  		"notes" : "{{post.notes}}",
  		"chart-title" : "{{post.chart-title}}",
  		"scale" : "{{post.scale}}",
  		"colors" : "{{post.colors}}",
  		"type" : "{{post.type}}",
  		"units" : "{{post.units}}",
  		"y-format" : "{{post.y-format}}",
  		"axis-type" : "{{post.axis-type}}"
  	}
  } {% unless forloop.last %},{% endunless%}
{% endif %}
{% endfor %}
];