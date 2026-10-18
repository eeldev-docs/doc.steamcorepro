---
sidebar_position: 3
---

# Using Your Own App ID

:::info Video Tutorial is available
[Video Tutorial](../videos/using-own-appid.mdx)
:::

The examples in this documentation use the App ID **480** (Spacewar), a public test app from Valve. It is fine for a first test, but switch to your own App ID as soon as possible.

## Why Not Use 480?
- **Achievements, stats and leaderboards** belong to Spacewar. You cannot add your own.
- **Server lists and lobby searches** return results from every other developer testing with 480.
- **Steam Cloud, Workshop, Inventory and microtransactions** cannot be configured.
- Your friends see you playing **Spacewar** instead of your game.

## Step 1: Get an App ID
Sign up on the [Steamworks partner site](https://partner.steamgames.com/) and pay the Steam Direct fee for your game. Your App ID is shown on the app's page in Steamworks.

## Step 2: Set the App ID in DefaultEngine.ini
Set both values in the `[OnlineSubsystemSteamCore]` section of `Config/DefaultEngine.ini`:

```ini
[OnlineSubsystemSteamCore]
SteamDevAppId=1234560
SteamAppId=1234560
```

| Setting | Used by |
| --- | --- |
| `SteamDevAppId` | Development and Debug builds, including Standalone Game from the editor. |
| `SteamAppId` | Shipping builds and dedicated servers. |

Use the same App ID for both unless you have a separate app for testing. See [Configuring the Plugin](./configuring-plugin.md) for all settings.

## How the App ID Is Used
- **Development builds:** the plugin writes `steam_appid.txt` with `SteamDevAppId` next to the executable when the game starts, and deletes it again on shutdown. Steam reads the App ID from this file.
- **Shipping builds:** the game is relaunched through the Steam client if it was not started from Steam. Set `bDisableSteamRelaunchInShipping=True` to test a Shipping build locally; the plugin then writes `steam_appid.txt` instead.

:::warning
Do not ship `steam_appid.txt` with your game. When the file exists, Steam does not relaunch the game through the Steam client.
:::

## Step 3: Make Sure Your Account Owns the App
The Steam account you test with must have a license for the app. If Steam reports that you do not own the app, request a key on the Steamworks partner site (**Request Steam Product Keys**) and activate it in the Steam client.

## Step 4: Configure Steamworks Features
Configure the features you use for your app on the Steamworks partner site and **publish** the changes:

- [Achievements and Stats](../features/achievements_and_stats.md)
- [Leaderboards](../features/leaderboards.md)
- [Cloud Saves](../features/cloud_saves.md)
- [Dedicated server version](../multiplayer/dedicated-servers/steamworks.md)

## Verifying
Launch the game as a **Standalone Game** or a packaged build with Steam running. The Steam overlay (**Shift+Tab**) and your friends list should show your game's name instead of Spacewar. See [Testing Steam Functionality](./testing_steam_functionality.md) if Steam does not start.
