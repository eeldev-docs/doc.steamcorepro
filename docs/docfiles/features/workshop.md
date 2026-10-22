---
sidebar_position: 5
---

# Steam Workshop

Steam Workshop lets players upload, browse and subscribe to user generated content (UGC) such as maps or mods. This guide uses the **SteamCore|UGC** nodes.

## Prerequisites
- Your own Steam App ID, see [Using Your Own App ID](../getting_started/using-own-app-id.md).
- Steam is running and the game is launched as a **Standalone Game** or a packaged build.

## Step 1: Enable the Workshop
1. On the [Steamworks partner site](https://partner.steamgames.com/apps/), go to **Workshop → General**, enable the Workshop and check **Enable ISteamUGC for file transfer**.
2. Go to **Application → Steam Cloud** and set a byte quota and file count. Workshop files count against the Steam Cloud settings.
3. **Publish** the changes.

## Uploading an Item
1. Call **Create Item** with your App ID as **Consumer App ID** and **File Type** set to **Community**. Store **Data → Published File ID**.
2. Call **Start Item Update** with your App ID and the **Published File ID**. It returns an update handle.
3. Set the item's data with the update handle:

   | Node | Description |
   | --- | --- |
   | **Set Item Title** | The item's title. |
   | **Set Item Description** | The item's description. |
   | **Set Item Content** | The **absolute** path to a folder. Everything in the folder is uploaded. |
   | **Set Item Preview** | The **absolute** path to a preview image. |
   | **Set Item Tags** | Tags players can filter by. |
   | **Set Item Visibility** | Public, friends only, private or unlisted. |
   | **Add Item Key Value Tag** | A key-value pair that queries can filter by with **Add Required Key Value Tag**. **Remove All Item Key Value Tags** clears the existing ones first. |

4. Call **Submit Item Update** with the update handle and a change note.

While the upload is running, call **Get Item Update Progress** with the update handle, for example from a timer, to show a progress bar.

:::warning Timeout
The **Timeout** input of **Submit Item Update** defaults to 10 seconds. Uploads often take longer, so set it to a higher value, such as 300 seconds.
:::

### Workshop Legal Agreement
If **Data → bUserNeedsToAcceptWorkshopLegalAgreement** is true, the item stays hidden until the player accepts the Workshop agreement. Open it with **Activate Game Overlay to Web Page**:

```
https://steamcommunity.com/sharedfiles/workshoplegalagreement
```

To update an existing item later, start again from step 2 with the same **Published File ID**.

## Using Subscribed Items
1. Call **Get Subscribed Items** to get the **Published File IDs** the player is subscribed to.
2. For each item, call **Get Item State**. If the states contain **Installed**, call **Get Item Install Info**. **Folder** is where the item's content is on disk.
3. If the item is not installed yet or **Needs Update** is set, call **Download Item** and use **Get Item Install Info** when it completes.

What you do with the content depends on your game, for example loading map files or mounting `.pak` files from the folder.

Players subscribe in the Steam Workshop or in your game with **Subscribe Item** and **Unsubscribe Item**.

### Downloaded Items
Items can also be downloaded without a subscription, for example on a dedicated server or when the game downloads an item another player is using. **Get Num Downloaded Items** and **Get Downloaded Items** list them. Call **Mark Downloaded Item As Unused** when you no longer need an item, so Steam can remove it from the local cache.

## Browsing Items
1. Create a query:
   - **Create Query All UGC Request** for all items, for example the most popular ones.
   - **Create Query User UGC Request** for one player's items, for example their published or subscribed items.
2. Call **Send Query UGC Request** with the query handle.
3. On completion, loop from `0` to **Data → Num Results Returned** − 1 and call **Get Query UGC Result** for each index. **Details** contains the title, description, owner and more. **Get Query UGC Preview URL** returns the preview image URL.
4. Call **Release Query UGC Request** when you are done with the results.

The **Page** input of the create nodes selects the result page. Steam returns up to 50 results per page.

### Filtering by Date
Call **Set Time Created Date Range** or **Set Time Updated Date Range** on the query handle before sending it to only return items created or updated between two dates. Both dates are in UTC.

### Content Descriptors
Items can be marked with content descriptors, such as violence or nudity:
- **Add Content Descriptor** and **Remove Content Descriptor** set them on an item update.
- **Get Query UGC Content Descriptors** returns them for a query result.
- **Get User Content Descriptor Preferences** returns the descriptors the player has chosen to hide, so you can filter items in your own UI.

## Troubleshooting
- **Create Item fails:** make sure the Workshop is enabled and published in Steamworks, and that **Consumer App ID** is your own App ID.
- **Submit Item Update fails:** check that the content folder and preview image paths are absolute and exist, and that the preview image is within the Steam Cloud quota.
