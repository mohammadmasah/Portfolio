---
layout: page
title: Project
permalink: /projects/
---

# My Projects 🚀

Welcome to my projects gallery. Here you can find the work I've done at **Epitech Paris**.

{% for project in site.projects %}

### [{{ project.title }}]({{ project.url | relative_url }})

{% if project.thumbnail %}
<img src="{{ project.thumbnail | relative_url }}" style="width: 70%; border-radius: 8px; margin-bottom: 10px;">
{% endif %}
{{ project.description }}
{% endfor %}
