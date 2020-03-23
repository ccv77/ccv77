
# My Photos

* eu in clasa a-4-a ![not-found](./img/01.jpg)

{% for image in projects[project].images %}
![Image]({{ image.url | url }})
{% endfor %}