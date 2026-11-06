---
title: "One musician, two churches: switching organizations without mixing songbooks"
meta_title: "Switch churches in Hosanna without mixed libraries"
description: "How organization switching works, why rapid tapping used to show the wrong songs, and what we changed so each church keeps its own library."
date: 2026-11-06T18:00:00.000Z
image: "/images/multi-org-switch.jpg"
categories:
  - product
authors:
  - Tiago Inês
tags:
  - organizations
  - sync
  - product
draft: false
---

# One musician, two churches: switching organizations without mixing songbooks

Some people play in more than one congregation. Hosanna models that as multiple organizations on the same login—not as duplicate accounts.

Switching should feel boring: pick the church, wait for the library to match, continue.

## What is supposed to happen

1. You choose another organization in Settings → Workspace.
2. The active org on the server updates.
3. The app **wipes local replicated data** for the previous church (songs, folders, services, agenda).
4. It pulls the new church's library.
5. Browse context (open folder, library section) resets so you are not staring at a folder id that does not exist anymore.

Until that pull finishes, you should not trust the song list as "the new church."

## The bug we hit with fast switching

If you hammered org A → B → C while a sync was already running, an older implementation could **drop** the reset because "already syncing." Result: the header showed church C while the database still held church B's songs. Switching back made it look haunted—content from the org you just left.

That is fixed. Org switches are serialized and versioned. A newer switch cancels the meaning of an older pull. The settings UI also waits until wipe+pull is idle before enabling the next tap.

## Habits that still help

- Wait for sync to finish when you change churches on a slow connection.
- Do not edit songs offline in church A and expect them to appear in church B—they belong to different tenants.
- Favorites/recents on a device are convenience lists; treat the org library as the source of truth.

## Why wipe instead of "keep both cached"

Caching every organization on disk forever sounds friendly until disk fills and a push uploads the wrong tenant's dirty rows. Explicit wipe on switch is the safer default for multi-church musicians.

If you only ever belong to one organization, you will never see this screen. If you belong to two, it should now behave like a seatbelt—not like a coin flip.
