---
title: SteamCore PRO 1.0.1.3
slug: 1-0-1-3
---

## **GENERAL**

- Added Utility function “**IsPlayerInSession**” that allows you to check if the current player is in a multiplayer session.

![](<./01-screenshot-2023-01-06-085234.png>)

## **ONLINE SUBSYSTEM**

- Fixed an issue where SteamCoreSockets was being used even though a different NetDriver was specified in DefaultEngine.ini
- Fixed an issue with “**Get Current Players**” node returning incorrect player count
- [Added DefaultEngine.ini configuration settings for setting ProductName and GameDescription](<https://steamcore-pro.eeldev.com/docfiles/multiplayer/dedicated-servers/defaultengine>)
- Fixed Steam Dedicated server server name and game description in steam server browser
