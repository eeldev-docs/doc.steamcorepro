---
sidebar_position: 2
---

# DefaultEngine.ini

## Configuring DefaultEngine.ini
- *This is available in SteamCorePRO version **1.0.1.3** and onwwards*
- For the plugin to send the correct information to Steam you have to set **GameServerProductName **and **GameServerGameDescription** in the DefaultEngine.ini configuration file. (Otherwise your *SteamAppId* will be used instead)
- Replace the exaple below with your own game name and description (keep it short)
```cpp
[OnlineSubsystemSteamCore]
GameServerQueryPort=27015
GameServerProductName=JustUs
GameServerGameDescription=Simple Game
```

## DefaultEngine.ini Example
- Below is a full DefaultEngine.ini configuration example (note that this is an **example** and you will have to customize it to fit your own settings)
```cpp
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

[/Script/Engine.Engine]
!NetDriverDefinitions=ClearArray
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="/Script/SteamCoreSockets.SteamCoreSocketsNetDriver",DriverClassNameFallback="/Script/OnlineSubsystemUtils.IpNetDriver")

[OnlineSubsystem]
DefaultPlatformService=SteamCore
```

## Player Authentication

- If you are using SteamCore PRO **1.0.3.1** and newer you can automatically authenticate players on your dedicated server by using the new SteamCore Auth Module.
- Add this to your **DefaultEngine.ini**
```cpp
[PacketHandlerComponents]
+Components=OnlineSubsystemSteamCore.SteamCoreAuthComponentModuleInterface
```

## Use IP Connection on Dedicated Server
- Requires SteamCore PRO **1.0.3.2** and newer
- By default the traffic between client and server will use the P2P relay network and route the traffic through steam, if you want to use the old traditional way of connecting via IP you can disable the bAllowP2PPacketRelay setting in your DefaultEngine.ini
```cpp
[OnlineSubsystemSteamCore]
bAllowP2PPacketRelay=False
```