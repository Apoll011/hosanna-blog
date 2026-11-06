---
title: "A practical ChordPro editing guide in Hosanna"
meta_title: "ChordPro editing guide for Hosanna"
description: "How to structure title, key, tempo, and body in ChordPro so charts stay readable on stage—and what Hosanna's editor highlights for you."
date: 2026-09-05T09:00:00.000Z
image: "/images/chordpro-editor-guide.jpg"
categories:
  - tutorial
authors:
  - Tiago Inês
tags:
  - chordpro
  - songs
  - tutorial
draft: false
---

# A practical ChordPro editing guide in Hosanna

If your team already lives in ChordPro, you do not need another format. You need an editor that keeps the text honest and a reader that does not fight you on Sunday.

Hosanna stores songs as ChordPro. That is deliberate: the file is still a file. You can diff it, export it, or open it in another app. This post is the short version of how we expect charts to be written inside the app.

## Start with metadata, not a wall of lyrics

Put the directives people actually use at the top:

```chordpro
{title: Great Is Thy Faithfulness}
{artist: Thomas Chisholm}
{key: D}
{tempo: 72}
{time: 3/4}
{ccli: 18723}
```

Hosanna's editor surfaces these fields in a metadata tab as well, so you are not hunting through braces during rehearsal. The body tab is for the parts people sing.

Useful extras when they exist:

- `{original_key: C}` when the chart is written in a different key than the recording
- `{capo: 2}` as a hint for guitarists (the live capo control still wins on stage)
- `{youtube: https://...}` so the mobile reader can open a rehearsal clip (more on that in a later post)

## Mark sections so the setlist makes sense

Use environments, not markdown headings:

```chordpro
{start_of_verse}
[D]Great is Thy [G]faithfulness, [D]O God my [A]Father
{end_of_verse}

{start_of_chorus}
[D]Morning by [G]morning new [D]mercies I [A]see
{end_of_chorus}
```

Named sections (`verse`, `chorus`, `bridge`, `prechorus`) keep the service planner readable. When someone builds Sunday's order, they see structure instead of a single scroll of text.

## Chords sit above the syllable they belong to

ChordPro is not "chords in brackets somewhere near the line." Put the chord immediately before the syllable:

```chordpro
[G]Amazing [D]grace, how [Em]sweet the [C]sound
```

If a chord lands on a rest or pickup, keep the bracket in place—do not invent a second lyric word to hold it.

## What the Hosanna editor checks for you

Recent versions of the mobile editor highlight ChordPro syntax and run lightweight diagnostics: empty titles, odd YouTube URLs, tempo that is not a number, and similar mistakes that break a chart before anyone notices.

You still own the content. The linter is there so a missing `{title}` does not become a blank card in the library.

## Preview before you save

Use the preview action. Transpose and capo in the reader are for performance; the saved ChordPro should stay in the written key unless you intentionally rewrite it.

## A minimal template you can paste

```chordpro
{title: Untitled}
{artist: }
{key: G}
{tempo: 80}
{time: 4/4}

{start_of_verse}
[G]Line one of the [C]verse goes [D]here
{end_of_verse}

{start_of_chorus}
[Em]Chorus [C]line [G]here
{end_of_chorus}
```

Fill it in, preview once, save. That is enough for most Sunday charts.

If you are migrating from PDFs or screenshots, the AI import flow can draft ChordPro for review—but the editor above is still where you correct the last 10%. Own the text; let the tools catch the typos.
