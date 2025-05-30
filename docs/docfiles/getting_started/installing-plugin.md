---
sidebar_position: 1
---

# Installing the plugin

:::info Video Tutorial is available
[Video Tutorial](../videos/getting_started.mdx)
:::

## Installing
- You can only install the plugin via the Epic Launcher

## Disable Engine Steam Plugins
![Image](../../../static/img/installing_1.png)

### Select your Engine Version
![Image](../../../static/img/installing_2.png)

### Moving the plugin
- Move (not copy) the plugin from the engines marketplace directory to your own projects Plugins directory, you may have to create the Plugins directory in your project if it doesn't exist.
```
Example Location: 
C:\Program Files\Epic Games\UE_4.27\Engine\Plugins\Marketplace
```
![Image](../../../static/img/installing_3.png)

### Force Plugin/Project recompile (optional)
- Delete the Binaries, Build, Intermediate and Saved folders inside your project directory.

![Image](../../../static/img/installing_4.png)

- Delete the Binaries and Intermediate folders inside the SteamCore plugin directory

![Image](../../../static/img/installing_5.png)

## C++ project
- If this is a C++ project, add "SteamCorePro" as a module dependency in your projects Build.cs file.

![Image](../../../static/img/installing_6.png)

### Enable the Plugin
![Image](../../../static/img/enabled_plugin.png)