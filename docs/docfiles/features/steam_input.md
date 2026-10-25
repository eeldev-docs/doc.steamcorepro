---
sidebar_position: 7
---

# Steam Input

Steam Input lets players use any controller Steam supports, such as Xbox, PlayStation, Switch Pro and Steam Deck controllers, and rebind them in Steam. Your game reads **actions**, such as "Jump" or "Move", instead of specific buttons.

The Steam Input nodes are called on **Get Steam Input**.

## Prerequisites
- Your own Steam App ID, see [Using Your Own App ID](../getting_started/using-own-app-id.md).
- Steam is running and the game is launched as a **Standalone Game** or a packaged build.

## Step 1: Create an Action Manifest
The action manifest is a VDF file that lists your **action sets** (for example `InGameControls` and `MenuControls`) and the actions in each set. Valve describes the format in the [Steam Input documentation](https://partner.steamgames.com/doc/features/steam_controller/getting_started_for_devs).

During development, call **Set Input Action Manifest File Path** with the **absolute** path to the file after **Init**. For release, configure Steam Input on the [Steamworks partner site](https://partner.steamgames.com/apps/) under **Application → Steam Input** and publish default configurations for the controllers you support.

## Step 2: Initialize Steam Input
1. Call **Init** once, for example in your Game Instance.
2. Call **Get Connected Controllers** to get an **Input Handle** for each controller.
3. Bind **On Steam Input Device Connected Callback** and **On Steam Input Device Disconnected Callback** to update your list when controllers are added or removed.

## Step 3: Activate an Action Set
1. Call **Get Action Set Handle** with the action set name, for example `InGameControls`.
2. Call **Activate Action Set** with the controller's **Input Handle** and the action set handle.

Switch to another action set when the context changes, for example from gameplay to a menu.

## Step 4: Read Actions
Get the action handles once and store them:
- **Get Digital Action Handle** for buttons, for example `Jump`.
- **Get Analog Action Handle** for sticks and triggers, for example `Move`.

Then read the actions every frame, for example on **Event Tick**:
- **Get Digital Action Data** returns **bState** (pressed or not) and **bActive**.
- **Get Analog Action Data** returns **X** and **Y**.

Instead of polling digital actions, you can call **Enable Action Event Callbacks** and bind **On Steam Input Action Event Callback**.

## Showing Button Glyphs
To show the correct button icon for an action:

1. Call **Get Digital Action Origins** with the controller, action set and action handle.
2. Pass an origin to **Get Glyph Texture for Action Origin**. It returns a texture you can use directly in an **Image** widget. Textures are cached, so you can call it whenever the UI needs the glyph. Requires SteamCore PRO 1.1.12 or newer.

**Get Glyph PNG for Action Origin** returns the path to the image file instead, if you want to load it yourself. **Get String for Action Origin** returns a readable name, such as "A Button".

If your game uses Enhanced Input instead of action sets, see [Steam Deck and Steam Hardware](./steam_hardware.md) for glyphs based on Unreal's gamepad keys.

## Other Useful Nodes
| Node | Description |
| --- | --- |
| **Show Binding Panel** | Opens the Steam overlay where the player can change the controller bindings. |
| **Trigger Vibration** | Rumble on the controller. |
| **Set LED Color** | Changes the light bar color on supported controllers. |
| **Get Motion Data** | Gyro and accelerometer data. |
| **Activate Action Set Layer** | Adds a layer on top of the active action set, for example while aiming. |
