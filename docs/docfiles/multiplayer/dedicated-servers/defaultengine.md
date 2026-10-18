---
sidebar_position: 2
---

# DefaultEngine.ini

## Configuring DefaultEngine.ini
- *This is available in SteamCorePRO version **1.0.1.3** and onwards*
- For the plugin to send the correct information to Steam you have to set **GameServerProductName** and **GameServerGameDescription** in the DefaultEngine.ini configuration file. (Otherwise your *SteamAppId* will be used instead)
- Replace the example below with your own game name and description (keep it short)
```ini
[OnlineSubsystemSteamCore]
GameServerQueryPort=27015
GameServerProductName=JustUs
GameServerGameDescription=Simple Game
```

:::note
`SteamAppId` must be set for dedicated servers, and `GameVersion` must match the version configured on the Steamworks partner site, otherwise the server will not be advertised. See [Configuring the Plugin](../../getting_started/configuring-plugin.md) for all available settings.
:::

## DefaultEngine.ini Example
- Below is a full DefaultEngine.ini configuration example (note that this is an **example** and you will have to customize it to fit your own settings)
```ini
[OnlineSubsystemSteamCore]
bEnabled=True
SteamDevAppId=480
SteamAppId=480
bVACEnabled=True
bUseSteamNetworking=True
bAllowP2PPacketRelay=True
GameServerQueryPort=27015
GameServerProductName=JustUs
GameServerGameDescription=Simple Game
GameVersion=1.0.0.0

[/Script/Engine.GameEngine]
!NetDriverDefinitions=ClearArray
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="/Script/SteamCoreSockets.SteamCoreSocketsNetDriver",DriverClassNameFallback="/Script/OnlineSubsystemUtils.IpNetDriver")

[OnlineSubsystem]
DefaultPlatformService=SteamCore
```

## Player Authentication

- If you are using SteamCore PRO **1.0.3.1** and newer you can automatically authenticate players on your dedicated server by using the new SteamCore Auth Module.
- Add this to your **DefaultEngine.ini**
```ini
[PacketHandlerComponents]
+Components=OnlineSubsystemSteamCore.SteamCoreAuthComponentModuleInterface
```

## Use IP Connection on Dedicated Server
- Requires SteamCore PRO **1.0.3.2** and newer
- With `bAllowP2PPacketRelay=True` (as in the example above) the traffic between client and server uses the Steam relay network. If you want to use the traditional way of connecting via IP, disable the bAllowP2PPacketRelay setting in your DefaultEngine.ini
```ini
[OnlineSubsystemSteamCore]
bAllowP2PPacketRelay=False
```
