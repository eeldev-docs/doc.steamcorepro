---
id: creating-multiplayer-games
title: Creating Sessions
description: Learn how to create and set up multiplayer game sessions in Unreal Engine using the SteamCore plugin.
slug: /docfiles/multiplayer/creating-multiplayer-games
sidebar_position: 1
---

# Creating Sessions

This guide explains how to create a multiplayer game session in Unreal Engine using the **SteamCore** plugin. You can establish an online game session with the **Create SteamCore Session** node and configure your map to accept multiplayer connections by using the `listen` parameter.

## Prerequisites
- **SteamCore PRO** plugin installed and enabled in your Unreal Engine project.
- A configured `DefaultEngine.ini` file with SteamCore settings (refer to [SteamCore Setup Documentation](../configuring_steamsockets.md)).

:::info
A **Video Tutorial** is available to guide you through the process: [Setting Up Steam Multiplayer](../../videos/multiplayer/setting-up-steam-multiplayer.mdx).
:::

## Creating the Session
To set up a basic multiplayer session, follow these steps:

1. **Use the Create SteamCore Session Node**:
   - In your game logic (e.g., Game Instance or Game Mode Blueprint), add the **Create SteamCore Session** node.
   - This node initializes a SteamCore session, enabling multiplayer functionality.

2. **Open the Map with Listen Parameter**:
   - After a successful session creation, use the **Open Level** node with the `listen` parameter to open your desired multiplayer level.
   - The `listen` option allows the server to accept incoming multiplayer connections from clients.

### Example Workflow
- Add the **Create SteamCore Session** node to your Blueprint and configure session settings (e.g., session name, visibility).
- Connect the node’s success output to an **Open Level** node.
- Set the level name (e.g., `YourMultiplayerMap`) and the parameter `listen` in options.
- Execute the flow to start the session and listen for connections.

![Create SteamCore Session Example](../../../../static/img/create_session.png)



## Notes
- **Session Success**: Ensure the **Create SteamCore Session** node completes successfully before opening the level with `listen`. Add error handling for failed session creation.