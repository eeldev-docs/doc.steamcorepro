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