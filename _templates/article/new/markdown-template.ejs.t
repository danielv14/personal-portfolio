---
to: src/pages/blogg/<%= h.changeCase.paramCase(name) %>.mdx
unless_exists: true

---

---
title: <%= name %>
summary: <%= summary %>
layout: blogPost
date: <%= date %>
---

# <%= name %>


