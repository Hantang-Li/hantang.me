---
title: "Rebuilding this site with an AI agent"
description: "How I replaced an old academic template in one afternoon, what I decided myself, and what I left to the agent."
date: 2026-11-13
tags: ["meta", "design", "agents"]
draft: true
---

My old homepage was a fork of an academic template from my master's days. It listed papers and talks I did not
have, and it described a student. I am now an engineer who is moving toward AI research, so the site had to change.

I rebuilt it in one afternoon with Claude Code. This post is about how that went: what the agent did well, where I
had to push back, and what I learned about my own taste along the way.

## The setup

I gave the agent three things: my resume, the old repository, and a short description of how I work. I think in
diagrams, I lose track of long threads, and I tend to research too long before starting. So the rules were simple:

- One step at a time, each with a clear "done" condition.
- State lives in files: a task queue, a parking lot for ideas, and a log.
- Before anything irreversible, such as a deploy, list the target and the effect, then wait for me.

The agent chose Astro on GitHub Pages and had a working site within the first hour. That first version was a fair
guess, and it was wrong in ways only I could know.

## What only I could decide

**Positioning.** The first headline led with distributed systems, because that was my most recent job. But what I
care about most is AI, and I had just left that job. The agent could not have known either fact. Once I said so,
the whole page was reordered around it.

**How much to say about work.** The first draft copied every metric from my resume. I asked for one line per role
instead. A personal site is not a resume, and the details that impress a recruiter are not the ones I want to be
known for.

**Accuracy.** One sentence said my master's research "turned into a startup job and a patent". The real order was
different: I joined the startup through my program's internship, built the system there, and it later became part
of a patent. The agent wrote a plausible story. I had to supply the true one.

## Finding the colours

This took the longest, and I enjoyed it the most.

The first palette was warm paper with a seal-red accent. It was handsome and not me. I asked for something fresh
and blue-green, "like Monet". The second attempt was teal on teal, and in dark mode it looked muddy: the page, the
cards and the glow behind them all sat in the same grey-green.

What fixed it was naming two paintings instead of one mood:

- **Light mode is Monet's Water Lilies.** A mist-white page, pure white cards, a viridian green, and a single
  touch of rose, the way one flower sits among the leaves.
- **Dark mode is Van Gogh's Starry Night.** Prussian blue instead of black, a periwinkle accent, and gold used
  only where it counts.

Even then the first dark accent was a bright turquoise, and it felt alien, like a sci-fi interface. Moving it
toward periwinkle, a blue with a little twilight violet in it, made the page calm. The small network diagram on
the home page got gold nodes joined by blue lines, so it reads as both a circuit and a constellation. The stars
behind it fade out where they meet the text.

The lesson for me: "make it nicer" gets you nowhere. "It looks muddy", "this green feels alien", and "the stars
disturb the text" each led to a specific fix.

## Using a second model as a critic

I pasted screenshots into another model and asked for a design critique, then brought the critique back to the
agent and asked it to decide what to adopt. This worked better than I expected, with one caveat.

One critique confidently described a warm charcoal and sage-green palette. My site has never used those colours.
The agent pointed this out, kept the principles that still made sense (one hue family for the neutrals, at most two
accents) and discarded the specific values. Another suggestion, that the section labels on inner pages looked grey,
turned out to be a real bug: one CSS rule was silently overriding another.

So a critic model is useful as a source of things to check. It is not a source of truth, and it tends to agree
with whatever you already seem to like.

## What I would tell someone doing the same

1. Bring your own facts and your own taste. The agent fills every gap with something plausible.
2. Describe what feels wrong in plain words. You do not need design vocabulary.
3. Keep the agent on one step at a time, and make it verify in the browser, in both themes.
4. Keep the irreversible steps in your own hands.

The site you are reading is the result. The structure is conventional on purpose. The colours, the constellation,
and the photo of me at a computer at age three are the parts that are mine.
