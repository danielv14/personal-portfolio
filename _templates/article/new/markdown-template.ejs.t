---
to: src/pages/blogg/<%= h.changeCase.paramCase(name) %>.mdx
unless_exists: true

---

---
title: <%= name %>
summary: <%= summary %>
description: <%= description %>
layout: blogPost
date: <%= date %>
---

# <%= name %>


