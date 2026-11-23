---
sidebar_position: 8
---

# Host Migration

Add host migration to your SteamCore PRO listen-server game with [HostMigrationCore](https://hostmigrationcore.eeldev.com/), a separate eelDev plugin. If the host leaves or crashes, another player can take over as host, the remaining players can reconnect, and the match can resume with the game state you configured to carry over.

## Using HostMigrationCore with SteamCore PRO

1. Enable HostMigrationCore and select **Steam Adapter** in **Project Settings → Plugins → Host Migration**.
2. Use the **SteamCoreSockets** net driver and keep all players in the Steam match lobby throughout the match. HostMigrationCore uses that lobby to help players find the new host.
3. Choose which actors and variables to restore after migration. The HostMigrationCore Quick Start shows how to set this up in Blueprints.

- [HostMigrationCore Quick Start](https://hostmigrationcore.eeldev.com/docfiles/getting_started/quick-start)
- [SteamCore PRO setup in HostMigrationCore](https://hostmigrationcore.eeldev.com/docfiles/features/steam#with-steamcore-pro)
