# Launch Parameters

These parameters are passed on the command line when starting your game or server (e.g. `MyGameServer.exe -log -Port=7777`).

### -Port=7777
- Custom listen port for Dedicated Servers (overrides `[URL] Port` in DefaultEngine.ini)

### -QueryPort=27015
- Custom query port for Dedicated Servers (overrides `GameServerQueryPort` in DefaultEngine.ini)

### -SteamServerName=CustomServerName
- Custom server name for dedicated servers (truncated to Steam's maximum server name length)

### -MULTIHOME=1.2.3.4
- Binds the dedicated server to a specific local IP address, useful on machines with multiple network interfaces

### -SteamCoreSocketsRelays=true
- Overrides `bAllowP2PPacketRelay` from DefaultEngine.ini (`true` = use the Steam relay network, `false` = connect via IP)

### -force_steamclient_link
- Windows dedicated servers only: forces loading of the Steam client libraries (`steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll`) at startup

### -NoPacketHandler
- Non-Shipping builds only: disables packet handlers on the SteamCoreSockets NetDriver, which also disables the [SteamCore Auth Module](additional/authenticating_steam_users.md). Only use this for debugging.
