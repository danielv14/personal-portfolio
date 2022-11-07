---
to: src/data/posts/<%= h.changeCase.paramCase(name) %>.mdx
unless_exists: true

---

---
title: <%= name %>
summary: <%= summary %>
description: <%= description %>
date: <%= date %>
---

# <%= name %>


