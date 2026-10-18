---
sidebar_position: 1
---

# Achievements and Stats

:::info Video Tutorial is available
[Video Tutorial](../videos/achievements.mdx)
:::

This guide explains how to unlock achievements and update stats with the **SteamCore|UserStats** nodes. All nodes in this guide are static, so you can call them from any Blueprint without a target.

## Prerequisites
- Your own Steam App ID. Achievements and stats are configured per app, so the public App ID **480** is only useful for quick tests.
- Steam is running and the game is launched as a **Standalone Game** or a packaged build. Steam is not available in Play In Editor, see [Testing Steam Functionality](../getting_started/testing_steam_functionality.md).

## Step 1: Configure Steamworks
1. Open your app on the [Steamworks partner site](https://partner.steamgames.com/apps/) and go to **Stats & Achievements**.
2. Add your stats and achievements. The **API Name** is the name you pass to the nodes below.
3. **Publish** the changes. Unpublished changes are not visible to the game.

## Step 2: Stats Are Loaded Automatically
With Steamworks SDK 1.61 and later, Steam loads the current user's stats and achievements when the game starts. You do **not** need to call **Request Current Stats**, which is deprecated.

## Unlocking an Achievement
1. Call **Set Achievement** with the achievement's API name.
2. Call **Store Stats** to send the change to Steam.

Steam shows the unlock notification when **Store Stats** succeeds. Both nodes return `false` if the name is wrong or Steam is not available.

## Updating a Stat
1. Call **Set Stat Int** or **Set Stat Float** with the stat's API name and the new value.
2. Call **Store Stats**.

Use **Get Stat Int** or **Get Stat Float** to read the current value, for example to increment it.

:::tip Batch your updates
**Store Stats** sends everything that changed since the last call. Set several stats and achievements first, then call **Store Stats** once, for example at the end of a match.
:::

## Progress Achievements
There are two ways to show progress:

- **Stat-based achievements.** In Steamworks, link the achievement to a stat and set a progress range. When you update the stat with **Set Stat Int** and **Store Stats**, Steam unlocks the achievement automatically once the stat reaches the target.
- **Progress notifications.** **Indicate Achievement Progress** shows a progress popup, such as "3/10". It does **not** unlock the achievement; call **Set Achievement** when the player reaches the goal.

## Reading Achievements
| Node | Description |
| --- | --- |
| **Get Achievement** | Returns whether the current user has unlocked the achievement. |
| **Get Achievement Icon** | Returns the achievement icon as a texture. If the icon is not loaded yet, bind **User Achievement Icon Fetched** and call the node again. |
| **Get Num Achievements** | Returns the number of achievements defined for the app. |
| **Get Achievement Name** | Returns the API name for an index, useful together with **Get Num Achievements** to list all achievements. |
| **Get Achievement Display Attribute** | Returns the display name or description, use the keys `name`, `desc` or `hidden`. |

## Reacting to Results
Use **Get Steam User Stats** and bind the events you need:

| Event | Fired when |
| --- | --- |
| **User Stats Stored** | **Store Stats** has finished. |
| **User Achievement Stored** | An achievement was unlocked or its progress was shown. |
| **User Stats Received** | Stats were received for the local user or another user. |

## Other Players and Global Stats
- **Request User Stats** (async) loads another player's stats. When it completes, read them with **Get User Achievement** or **Get User Stat Integer**.
- **Request Global Achievement Percentages** (async) loads unlock percentages. Then use **Get Achievement Achieved Percent**.

## Resetting During Development
- **Clear Achievement** locks a single achievement again.
- **Reset All Stats** resets all stats, and also all achievements if **Achievements Too** is checked.

Call **Store Stats** afterwards. Do not ship these calls in your game.

## Troubleshooting
- **Nothing happens:** check that the API name matches exactly (it is case sensitive), that your changes are published in Steamworks, and that you are not using App ID 480 with your own achievement names.
- **Store Stats returns false:** Steam is not running or the game was not started through Steam. See [Testing Steam Functionality](../getting_started/testing_steam_functionality.md).
- Enable [Additional Logging](../additional/additional_logging.md) to see the plugin's output.
