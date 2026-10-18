---
sidebar_position: 5
---

# Changelog

## 1.1.10

### Fixes
- **Dedicated servers.** Game server callbacks for several interfaces were registered before they were marked as game server callbacks, so they never fired on dedicated servers.
- **Steam Input.** Callback data is now copied, so the values in Steam Input events are no longer invalid.
- **SteamCoreSockets.** Receiving data now reports the correct number of bytes and releases the received messages.
- **Memory.** Fixed a crash in **Get UGC Details** and buffer issues in **Get Beta Info** and **Filter Text**.
- **Server port.** The game server port now defaults to `7777` when no port is configured.
- **Linux.** The `steamclient.so` path now matches the server architecture.
- **Async nodes always complete.** Server list, Ping Server and Server Rules nodes now always fire their completion output, also on timeout, cancellation, errors or when the SteamCore online subsystem is not available. Async nodes no longer leak when the online subsystem is missing.
- **Server browser.** Starting a new server list, ping or rules request now cancels the previous one, as intended. Previously a new request could cancel or release another request's results.
- **Server lists finish earlier.** A server list request now completes one second after Steam reports that the refresh is complete, instead of waiting for the timeout.
- **Online subsystem tasks time out.** Leaderboard, stats, lobby, encrypted app ticket and shared cloud tasks now fail after 30 seconds instead of blocking the online subsystem forever.
- **Leaderboards.** Reading or writing a leaderboard that could not be found no longer waits forever.
- **Lobbies.** Creating a lobby with IP connections no longer hangs if the public IP address cannot be found.
- **UTF-8.** Server filters, map names, session settings and leaderboard stat names now support non-ASCII characters.
- **Textures.** Avatar and achievement icon textures are now created on the game thread.
- **Stability.** Async callbacks no longer run on objects that have been destroyed.
- **Unattended builds.** The startup warning about conflicting Steam plugins no longer opens a dialog in commandlets or unattended runs.

### Build
- **Steam DLLs.** When packaging a Windows Server target, missing `steamclient`, `tier0_s` or `vstdlib_s` DLLs are skipped with a warning instead of failing the build. See [Configuring the Plugin](./docfiles/getting_started/configuring-plugin.md).
- Fixed deprecation warnings in Unreal Engine 5.3 and later.

### Removed
- The legacy `SteamCoreNetDriver` has been removed. It could never be activated, so projects that referenced it were already using their `DriverClassNameFallback`. Use the [SteamCoreSockets](./docfiles/multiplayer/configuring_steamsockets.md) net driver instead.

### Documentation
- New guides: [Using Your Own App ID](./docfiles/getting_started/using-own-app-id.md), [Achievements and Stats](./docfiles/features/achievements_and_stats.md), [Leaderboards](./docfiles/features/leaderboards.md), [Cloud Saves](./docfiles/features/cloud_saves.md), [Rich Presence](./docfiles/features/rich_presence.md), [Steam Workshop](./docfiles/features/workshop.md), [Steam Inventory](./docfiles/features/inventory.md), [Steam Input](./docfiles/features/steam_input.md) and [Steam Timeline](./docfiles/features/timeline.md).
- Expanded [Finding the Server](./docfiles/multiplayer/dedicated-servers/finding-server.md) and [Friend Avatars](./docfiles/multiplayer/friends/friends_list_avatars.md).
