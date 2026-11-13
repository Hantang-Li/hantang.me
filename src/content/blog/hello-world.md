---
title: "Rebuilding this site"
description: "Why I replaced my old academic homepage, and what I plan to write about here."
date: 2026-11-13
tags: ["meta"]
draft: true
---

> This is a placeholder draft. Drafts show up in `npm run dev` but are left out of the production build.
> Rewrite it in your own words, then set `draft: false`.

My old homepage was an academic template from my master's days. I have since moved from research
into production engineering, so the site needed to change with me.

## What I plan to write about

- Distributed systems, from the point of view of someone who operates one
- Applying LLMs and RAG to engineering operations
- Notes from the research-to-production transition

## A code block, to check the styling

```python
def append(log: list[bytes], entry: bytes) -> int:
    log.append(entry)
    return len(log) - 1  # the sequence number
```
