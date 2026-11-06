---
title: "Who can edit songs? Roles that match how churches actually work"
meta_title: "Worship team roles and permissions in Hosanna"
description: "Owner, admin, musician, guest—what each role can do, and why offline editing still checks your membership."
date: 2026-10-27T10:00:00.000Z
image: "/images/team-roles-access.jpg"
categories:
  - product
authors:
  - Tiago Inês
tags:
  - teams
  - permissions
  - product
draft: false
---

# Who can edit songs? Roles that match how churches actually work

Not everyone on the WhatsApp group should rewrite the church's ChordPro library. Not everyone needs billing either.

Hosanna uses organization membership roles. The labels are boring on purpose: owner, admin, musician, guest (and related Studio roles). Permissions sit underneath—song create/update, AI import, PDF export, and so on.

## A simple mapping that works for most teams

| Role | Typical people | Song library |
| --- | --- | --- |
| Owner / admin | Tech lead, worship pastor | Full edit, invites, org settings |
| Musician | Band, vocalists | Read charts; edit if you grant it |
| Guest | Visiting player for one Sunday | Read what you share; no restructuring the library |

Exact matrices can change as we ship, but the principle does not: **least privilege by default**, widen when trust is earned.

## Offline still respects the role

We recently fixed a sharp edge: if you opened the app offline, the edit button could disappear because the membership role was not restored from cache—even though local song saves already worked.

Roles now persist with the session (scoped to the organization id). If you could edit yesterday on Wi‑Fi, you can still mark charts dirty on the train today. Sync uploads when you reconnect.

## AI and imports are permissions too

AI import is not a global toy switch. Organizations that want it enable it; roles that should not flood the library with drafts do not get the button.

Same idea for destructive Studio actions. The mobile app and Studio share the same membership story so you are not "admin on the phone, locked out on the web" without noticing.

## Advice from watching real teams

Give two people admin, not twelve. Musicians need charts and service order more than they need the settings screen. Guests should leave Sunday with the songs they played—not with the ability to reorganize ten years of folders.
