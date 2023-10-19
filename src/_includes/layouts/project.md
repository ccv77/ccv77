---
layout: layouts/base.njk
---

{{ content }}

{% for image in projects[project].images %}
![{{ image.url | url }}]({{ image.url | url }})
{% endfor %}
