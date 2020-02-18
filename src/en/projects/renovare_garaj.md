---
layout: default
---


# Proiectul Renovarea garajului

Iată ce a ieşit ...

{% assign image_files = site.static_files | where: "project_renovare_garaj_img", true %}
{% for myimage in image_files %}
  {{myimage.path}}
  ![Image]({{ myimage.path }})
{% endfor %}