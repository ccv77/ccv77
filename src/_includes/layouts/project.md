---
layout: layouts/base.njk
---

{{ content | safe }}

{% for image in projects[project].images %}
![Image]({{ image.url | url }})
{% endfor %}
