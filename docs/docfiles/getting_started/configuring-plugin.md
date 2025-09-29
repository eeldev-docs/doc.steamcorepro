---
sidebar_position: 2
---

# Configuring the Plugin

:::info 📽️ Video Tutorial Available  
Watch the [Getting Started Video Tutorial](../videos/getting_started.mdx) for a walkthrough of the setup process.
:::

---

## Step 1: Configure `DefaultEngine.ini`

Edit your project's `DefaultEngine.ini` located at:
Project/Config/DefaultEngine.ini


> If you're setting up multiplayer features, make sure to also configure [SteamCoreSockets](../multiplayer/configuring_steamsockets.md).

:::note  
🔁 **Avoid Duplicate Entries**  
Before adding new configuration values, remove any old Steam-related settings from the file to prevent conflicts.
:::

---

## Recommended Settings

Use the following configuration for typical multiplayer projects:

```ini
[OnlineSubsystemSteamCore]
SteamDevAppId=480
SteamAppId=480
bVACEnabled=True
bEnabled=True
bUseSteamNetworking=True
bAllowP2PPacketRelay=True
bRelaunchInSteam=False
P2PConnectionTimeout=90
GameServerQueryPort=27015
GameVersion=1.0.0.0
bDisableSteamRelaunchInShipping=False

[OnlineSubsystem]
DefaultPlatformService=SteamCore

[/Script/Engine.GameEngine]
!NetDriverDefinitions=ClearArray
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="/Script/SteamCoreSockets.SteamCoreSocketsNetDriver",DriverClassNameFallback="/Script/OnlineSubsystemUtils.IpNetDriver")
```

## Minimal Required Settings
For basic usage (e.g. testing in development), this is the bare minimum configuration:

```ini
[OnlineSubsystemSteamCore]
bEnabled=True
SteamDevAppId=480
SteamAppId=480

[OnlineSubsystem]
DefaultPlatformService=SteamCore
```

## Available Settings
Below is a reference for all configurable options in DefaultEngine.ini:
```ini
[OnlineSubsystemSteamCore]

// Enable or disable the SteamCore plugin
bEnabled=True

// Your app's Steam ID (Dev ID used during testing)
SteamAppId=480
SteamDevAppId=480

// Server port (default: 7777)
Port=7777

// Copy Steam client DLLs when packaging (Windows only)
bCopySteamDlls=True

// Enable Steam VAC
bVACEnabled=True

// Use Steam's networking layer
bUseSteamNetworking=True

// Allow fallback to Steam relay servers if direct P2P fails
bAllowP2PPacketRelay=True

// Relaunch game in Steam if not already started via Steam
bRelaunchInSteam=False

// Timeout duration for P2P connections
P2PConnectionTimeout=90

// Steam server query port
GameServerQueryPort=27015

// Game version
GameVersion=1.0.0.0

// If true, prevents the game from being relaunched through Steam 
// when running as a Shipping build. (Requires SteamCore PRO version 1.0.6.9 and later)
bDisableSteamRelaunchInShipping=False

// Override net.MinHandshakeVersion
bOverrideMinHandshakeVersion=True
MinHandshakeVersion=0

// Override net.CurrentHandshakeVersion
bOverrideCurrentHandshakeVersion=True
CurrentHandshakeVersion=0
```

:::warning ⚠️ Project Settings Deprecated
Support for editing these settings via Project Settings has been removed in recent plugin versions. You must now configure everything through DefaultEngine.ini.
:::
![Image](../../../static/img/project_settings_2.png)