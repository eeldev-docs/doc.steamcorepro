# Friend List
- Requires SteamCore PRO **1.0.2.4** and later
- You can find more examples in the [Blueprint Example Project](../../../example-project.md)

:::info Video Tutorial is available
[Video Tutorial](../../videos/friends_list.mdx)
:::

## Listing Friends
- Newer versions of SteamCore PRO now has a simpler method for retrieving a list of friends, you can still list friends using the traditional way (by using Steamworks SDK nodes) but if you need a simpler way you can use the methods below.

## Querying Friends
- You first have to query/retrieve a copy of your friends list from steam, you can do that by calling "Read Friend List"

![Image](../../../../static/img/friends_query.png)

## Listing Friends
- After retrieving a list of your friends from Steam (see above), you can list all found friends using the Friend List Type.
- Make sure that you do not call this function before **Read Friend List** has returned **Completed**

![Image](../../../../static/img/friends_list.png)

## Example Using the Steamworks Nodes
This Blueprint uses the **SteamCore|Friends** nodes directly:
- **ShowMyName** prints your own Steam name with **Get Persona Name**.
- **ListFriends** gets the number of friends with **Get Friend Count**, loops over them with **Get Friend By Index** and prints each name with **Get Friend Persona Name**. Both nodes take the same **Flags**; **Immediate** means regular friends. If **Flags** is empty, **Get Friend Count** returns 0.
- **OpenFriendsOverlay** opens the friends list in the Steam overlay with **Activate Game Overlay**.

![Friends example](../../../../static/img/friends_example.webp)
