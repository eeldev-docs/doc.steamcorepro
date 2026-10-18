# Frequently Asked Questions (FAQ)

## Can't join Game Session
- Make sure you are using steam correctly by reading the [Testing Steam Functionality](./docfiles/getting_started/testing_steam_functionality.md) documentation
- [Configure SteamSockets](./docfiles/multiplayer/configuring_steamsockets.md), if you are using a dedicated server see [this document](./docfiles/multiplayer/dedicated-servers/index.md)
- Check your projects .log files (Located in Projects Saved\Logs directory)

## What is the difference between a **Lobby** and a **Game Session**?
- A lobby is a “pre-game” room where you can gather your friends to chat and pick what maps or game modes to play, it can also used as a “group system” between games because you’ll not leave a Lobby unless explicitly doing so, for example you will not automatically leave a lobby just because you left a game session, this way you’ll all be in the same lobby together until you exit the game or leave the lobby.

- A game session is where you play the game, you’re all connected to a server and playing the game.

## Player count is stuck at 0
If you’re using a Dedicated Server setup you have to [authenticate the player](./docfiles/additional/authenticating_steam_users.md) for them to be registered on the server

## Where can I find my game log files?
Log files are generated in X:\Project\Saved\Logs
The newest logfile will be called Project.log
If you are running a Standalone Instance the log file will be named Project_2.log

For more detailed output, see [Additional Logging](./docfiles/additional/additional_logging.md).

## Steam doesn't work when I play in the editor (PIE)
Steam is not initialized in Play In Editor. Launch a **Standalone Game** instead, see [Testing Steam Functionality](./docfiles/getting_started/testing_steam_functionality.md).

## I get an error that OnlineSubsystemSteam / SteamShared is enabled
SteamCore PRO cannot be used together with the engine's built-in **OnlineSubsystemSteam** or **SteamShared** plugins. Disable them in the Plugins window and restart the editor, see [Installing the Plugin](./docfiles/getting_started/installing-plugin.md).

## My game closes immediately on startup
- In **Shipping** builds the game is relaunched through the Steam client if it was not started via Steam. To test Shipping builds locally, set `bDisableSteamRelaunchInShipping=True`.
- If the logged in Steam account does not own the app (is not subscribed), the game exits. Make sure the account owns the game or is part of your Steamworks organization.

See [Configuring the Plugin](./docfiles/getting_started/configuring-plugin.md) for details.

## What is the steam_appid.txt file?
In Development builds the plugin writes a `steam_appid.txt` file containing your `SteamDevAppId` next to the executable so that Steam can initialize outside the Steam client, and deletes it again on shutdown. You should not ship this file with your game. On dedicated servers you may need to create it manually, see [Initializing](./docfiles/multiplayer/dedicated-servers/initializing.md).

## My dedicated server doesn't show up in the server list
- Make sure `SteamAppId` and `GameVersion` are set, and that `GameVersion` matches the version configured in [Steamworks](./docfiles/multiplayer/dedicated-servers/steamworks.md).
- Make sure the game port (default `7777`) and query port (default `27015`) are open (UDP/TCP) in your firewall/router.
- See [DefaultEngine.ini](./docfiles/multiplayer/dedicated-servers/defaultengine.md) for a complete server configuration.