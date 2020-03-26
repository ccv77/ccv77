---
layout: layouts/base.njk
---

{{ content | safe }}

{% for image in projects[project].images %}
![{{ image.url | url }}]({{ image.url | url }})
{% endfor %}
