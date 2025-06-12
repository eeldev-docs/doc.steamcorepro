---
sidebar_position: 5
---

# Testing Steam Functionality

This guide outlines important steps and requirements to ensure smooth testing of Steam integration in your Unreal Engine project.

## Prerequisites for Testing

- Configure Steam settings properly in your `DefaultEngine.ini`. See detailed configuration instructions [here](#).
- Ensure the Steam Client is running and that you are logged in.
- Verify that the Steam account used for testing owns the game. You can:
  - Add the Steam account to your app’s organization, or
  - Obtain Steam keys from Valve to activate the game on the tester’s account.

## Testing a Packaged Build

- Always package your game as a **Development Build** for local testing.
- If packaging as a **Shipping Build**, you must upload the build to Steam and launch it via the Steam Client.

## Packaging Using the Project Launcher

Follow these steps to package your project:

1. **Open the Project Launcher** in Unreal Engine.

   ![Project Launcher](../../../static/img/project_launcher.png)

2. **Configure your profile settings** as needed.

   ![Profile Settings](../../../static/img/project_launcher_1.png)

3. **Select build configurations** (Development or Shipping).

   ![Build Configuration](../../../static/img/project_launcher_2.png)

4. **Return using the back button** after configuring the profile.

   ![Back Button](../../../static/img/project_launcher_3.png)

5. **Start packaging by clicking the Launch button**.

   ![Launch Packaging](../../../static/img/project_launcher_4.png)

## Multiplayer Testing
:::warning NOTE
You must use a Packaged game build to test multiplayer, testing in the editor is not going to work
:::

- Multiplayer testing via Steam requires:
  - Two separate computers, each logged into different Steam accounts, or
  - One computer and a virtual machine (VM) setup.

## Testing in the Editor

To test Steam functionality within the Unreal Editor, launch a **Standalone Game** instance.

### UE4

Launch a standalone instance to initialize Steam.

![Standalone UE4](https://eeldev.com/wp-content/uploads/2021/01/7f0bfa893518c85d953db53d9af0099d-1.png)

### UE5

Launch a standalone instance to initialize Steam.

![Standalone UE5](../../../static/img/standalone_settings.png)
