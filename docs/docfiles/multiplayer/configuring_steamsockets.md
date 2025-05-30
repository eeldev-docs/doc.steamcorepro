---
sidebar_position: 1
---

# Configuring SteamCoreSockets

:::info Video Tutorial is available
[Video Tutorial](../videos/configuring_multiplayer.mdx)
:::

## DefaultEngine.ini
- The SteamCoreSockets NetDriver is configured in your projects **DefaultEngine.ini**

:::warning NOTE
Double check your configuration and make sure that you do not have any duplicate entires and that you are using the correct settings shown below, if any of them are missing multiplayer **will not work**.
:::

```cpp
[OnlineSubsystemSteamCore]
bUseSteamNetworking=True
bAllowP2PPacketRelay=True

[OnlineSubsystem]
DefaultPlatformService=SteamCore

[/Script/Engine.GameEngine]
!NetDriverDefinitions=ClearArray
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="SteamCoreSockets.SteamCoreSocketsNetDriver",DriverClassNameFallback="/Script/OnlineSubsystemUtils.IpNetDriver")
```

## Optimizing the NetDriver (Optional)
- There are some parameters that you can adjust to optimize the NetDriver for your own project, such as ClientRates and Timeouts. (*DefaultEngine.ini*)

```cpp
[/Script/SteamCoreSockets.SteamCoreSocketsNetDriver]
ConnectionTimeout=80.0
InitialConnectTimeout=120.0
NetServerMaxTickRate=30
MaxNetTickRate=120
KeepAliveTime=0.2
MaxClientRate=10000000
MaxInternetClientRate=10000000
RelevantTimeout=5.0
SpawnPrioritySeconds=1.0
ServerTravelPause=4.0
```