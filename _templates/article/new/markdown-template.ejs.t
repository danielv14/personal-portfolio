---
to: src/data/posts/<%= h.changeCase.paramCase(name) %>.mdx
unless_exists: true

---

---
title: <%= name %>
summary: <%= summary %>
preamble: <%= preamble %>
date: <%= date %>
---

# <%= name %>


