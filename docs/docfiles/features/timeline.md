---
sidebar_position: 8
---

# Steam Timeline

Steam Timeline adds markers to Steam's game recording, so players can find highlights such as a boss fight or a match win and turn them into clips. Players need game recording enabled in the Steam client.

The timeline nodes are in the **SteamCore|Timeline** category. Game phase nodes are called on **Get Steam Timeline Game Phase**.

## Prerequisites
- Your own Steam App ID, see [Using Your Own App ID](../getting_started/using-own-app-id.md).
- Steam is running and the game is launched as a **Standalone Game** or a packaged build.

## Game Mode
Call **Set Timeline Game Mode** when the game state changes. Steam colors the timeline bar by mode.

| Mode | Use it for |
| --- | --- |
| `k_ETimelineGameMode_Playing` | Gameplay. |
| `k_ETimelineGameMode_Staging` | Waiting before gameplay, for example in a pre-match lobby. |
| `k_ETimelineGameMode_Menus` | Menus. |
| `k_ETimelineGameMode_LoadingScreen` | Loading screens. |

## Events
| Node | Use it for |
| --- | --- |
| **Add Instantaneous Timeline Event** | Something that happens at one point in time, for example a kill or an achievement. |
| **Add Range Timeline Event** | Something with a known duration that has already happened. |
| **Start Range Timeline Event** / **End Range Timeline Event** | Something that starts now and ends later, for example a boss fight. |
| **Update Range Timeline Event** | Changes the title, description or icon of a running range event. |
| **Remove Timeline Event** | Removes an event you added. |

The common inputs are:

| Input | Description |
| --- | --- |
| **Title** / **Description** | Text shown on the timeline. |
| **Icon** | The name of an icon, either a Steam icon such as `steam_achievement` or one you upload in Steamworks. |
| **Icon Priority** | Which icon wins when several events overlap. |
| **Start Offset Seconds** | Moves the event back or forward in time relative to now. |
| **Possible Clip** | How likely the event is to make a good clip. `k_ETimelineEventClipPriority_Featured` events are offered to the player before `k_ETimelineEventClipPriority_Standard` events. |

## Tooltips
**Set Timeline Tooltip** shows a short text for the current state on the timeline, for example "Wave 5". Call **Clear Timeline Tooltip** when it no longer applies.

## Game Phases
Game phases group a stretch of play, such as one match or one level, so the player can find it later.

1. Call **Start Game Phase** when the match starts.
2. Optionally call **Set Game Phase ID**, **Add Game Phase Tag** and **Set Game Phase Attribute** to describe it, for example the map and the result.
3. Call **End Game Phase** when the match ends.

**Open Overlay to Game Phase** and **Open Overlay to Timeline Event** open the Steam overlay at a phase or an event, for example from a match history screen.
