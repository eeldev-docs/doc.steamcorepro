# Duration Control (China)

Games sold in mainland China must limit the playtime of minors. Steam tracks the playtime and tells the game when the player should stop. The nodes are called on **Get Steam User** and are in the **SteamCore|User** category.

Duration control only applies to players and games where Steam has enabled it. For everyone else, **bApplicable** is false and the game doesn't need to do anything.

## Getting the Status
Call **Get Duration Control**. It is async and is also available as an async node in the **SteamCore|User|Async** category. **Data** contains:

| Field | Description |
| --- | --- |
| **bApplicable** | Whether duration control applies to this player and game. |
| **Progress** | **Full** while the player may keep playing. **Exit Soon 3h**, **Exit Soon 5h** and **Exit Soon Night** mean the limit has been reached and Steam will close the game soon. |
| **Seconds Today** | Playtime today. |
| **Seconds Remaining** | Playtime left before a limit is reached. |
| **Seconds Last 5h** | Playtime since the last 5-hour break. |

## Notifications
Steam also sends updates on its own while the game is running. Bind to the **Duration Control Updated** delegate on **Get Steam User**. When **Notification** is set, show it to the player. When **Progress** is one of the **Exit Soon** values, save the game and tell the player that the game will close.

## Offline Play
Offline play does not count against the limits. Call **Set Duration Control Online State** when the player switches between offline and online play:

| State | Use it for |
| --- | --- |
| **Offline** | Single-player or offline co-op. |
| **Online** | Online play. |
| **Online High Pri** | Online play that shouldn't be interrupted, for example a ranked match. |
