---
title: "How to import a chord chart with AI (without trusting it blindly)"
meta_title: "AI chord chart import tutorial — Hosanna"
description: "A step-by-step walkthrough of Hosanna's AI import: photo or file in, ChordPro out, human review before it hits the library."
date: 2026-10-01T11:00:00.000Z
image: "/images/ai-import-charts.jpg"
categories:
  - tutorial
authors:
  - Tiago Inês
tags:
  - ai
  - chordpro
  - tutorial
draft: false
---

# How to import a chord chart with AI (without trusting it blindly)

Most churches have a graveyard of PDFs, photos of handwritten charts, and Ultimate Guitar paste jobs. Typing them into ChordPro by hand is honest work. It is also how libraries stay empty.

Hosanna's AI import turns a photo or document into a ChordPro draft. The important word is **draft**.

## Before you start

- You need permission to use AI import in your organization (roles control this).
- Prefer a flat, well-lit photo. Crooked pages and heavy shadows waste everyone's time.
- Know the song title and key you expect. You will check them in review.

## The flow

1. From the song library, open **Import with AI**.
2. Choose a source: camera roll, file, or the options your build exposes.
3. Wait for processing. You can cancel if you picked the wrong image.
4. Land on the **review** screen: title, artist, ChordPro body, confidence warnings.
5. Fix anything wrong. Especially chord placement and section labels.
6. Save into the library (and folder, if you picked one).

Low-confidence warnings are not decoration. If the model is unsure about a bridge, read that section like you are proofreading a contract.

## What to fix by hand every time

- **Chord alignment** — AI loves putting `[G]` one syllable early.
- **Section names** — "V1" in a PDF should become `{start_of_verse}` / `{end_of_verse}`.
- **Key vs capo notes** — people annotate capo in the margins; decide what belongs in `{key}` vs performance settings.
- **Copyright / CCLI** — fill `{ccli}` yourself when you know it.

## What we refuse to do

We do not silently publish AI output into the live library without review. We also do not train models on your church's private repertoire. Import is a convenience feature sitting on top of **your** ChordPro, not a way to farm worship lyrics for someone else's dataset.

## When not to use AI

- Charts that are already clean ChordPro — just paste or sync them.
- Dense jazz lead sheets where the model will invent slash chords.
- Anything you cannot legally reproduce for your team.

AI import exists to remove the first hour of typing—not the last ten minutes of musicianship.
