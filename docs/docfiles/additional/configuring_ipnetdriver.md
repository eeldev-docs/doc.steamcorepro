# Configuring IpNetDriver

## IpNetDriver
- The IpNetDriver can be used instead of the SteamCoreSockets NetDriver if you rather use direct IP connection instead of routing through the Steam Network Interface.

## DefaultEngine.ini
- The IpNetDriver is configured in your projects **DefaultEngine.ini**

```cpp
[OnlineSubsystemSteamCore]
bEnabled=True
GameVersion=1.0.0.5
SteamDevAppId=480
SteamAppId=480

[OnlineSubsystem]
DefaultPlatformService=SteamCore

[/Script/Engine.GameEngine]
!NetDriverDefinitions=ClearArray
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="OnlineSubsystemUtils.IpNetDriver",DriverClassNameFallback="OnlineSubsystemUtils.IpNetDriver")

[/Script/OnlineSubsystemUtils.IpNetDriver]
MaxClientRate=1000000000 
MaxInternetClientRate=1000000000
InitialConnectTimeout=120.0  
```