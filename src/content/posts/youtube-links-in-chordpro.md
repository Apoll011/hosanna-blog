---
title: "Putting YouTube links inside ChordPro (and why we bothered)"
meta_title: "YouTube links in ChordPro with Hosanna"
description: "Use {youtube} in your ChordPro so musicians can rehearse from the same chart they play on Sunday—without leaving the song."
date: 2026-09-14T10:30:00.000Z
image: "/images/youtube-rehearsal.jpg"
categories:
  - tutorial
authors:
  - Tiago Inês
tags:
  - chordpro
  - rehearsal
  - tutorial
draft: false
---

# Putting YouTube links inside ChordPro (and why we bothered)

Worship teams share reference tracks in ten different places: WhatsApp, YouTube playlists, a drive folder nobody remembers. The chart and the recording drift apart.

Hosanna treats the reference as part of the song file.

## The directive

In ChordPro metadata:

```chordpro
{title: Way Maker}
{key: E}
{youtube: https://www.youtube.com/watch?v=XXXXXXXX}
```

`{yt: ...}` works as an alias. Paste a normal watch URL or a `youtu.be` short link.

## What happens in the app

On mobile, when a song has a YouTube directive, the reader can open a mini player without dumping you into a browser tab and losing your place. Leave the song, and playback stops—so you are not still hearing last week's bridge during the welcome.

This is for rehearsal and learning, not for streaming a set through the PA. Your church's licensing still applies to what you play in the room.

## When to add it (and when not to)

**Add it when:**

- The band learns from a specific arrangement or tempo
- New musicians join mid-season and need the same reference
- You transpose live but still want the original recording one tap away

**Skip it when:**

- The only available video is a wrong arrangement
- The link is a 2-hour concert upload with no timestamp

If you need a timestamp, put it in a `{comment}` until ChordPro tooling you trust supports start offsets consistently across devices.

## Keep the chart the source of truth

The video does not replace ChordPro. Keys change. Bridges get cut. The text in Hosanna is what projects on stage and what syncs offline.

Treat YouTube as a footnote attached to the song—not the song itself.
