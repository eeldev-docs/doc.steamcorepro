---
sidebar_position: 10
---

# Filtering Servers
:::tip TIP
This Example has a Video Tutorial that you can find here: [Related Video](../../videos/dedicated-server-ue5.mdx)
:::

There are 2 methods for filtering dedicated server results and that is by using **Tags** or a **Server Object**, lets take a look at how we can use this in the game.

## Filtering using Tags
Tags are separated by “,” comma sign, in this case we’ll use the tags “dedicated” and “modded” as an example.

![Tags](https://eeldev.com/wp-content/uploads/2020/04/createserver.png)

### Filtering the Results
In this example we’re going to filter out all servers that are not Dedicated

![Filter](https://eeldev.com/wp-content/uploads/2020/04/filter.png)

## Filtering using Server Object
We must first construct the object that we will set our filtering options on.

![Create](https://eeldev.com/wp-content/uploads/2020/05/construct-1.png)

We must first construct the object that we will set our filtering options on.

### Setting the Filters
![Filters](https://eeldev.com/wp-content/uploads/2020/05/filters1.png)


### Applying Filters
This will only return Linux servers that has No Players

![Apply](https://eeldev.com/wp-content/uploads/2020/05/applying.png)

## Additional Filters
![More](https://eeldev.com/wp-content/uploads/2020/05/filters2.png)