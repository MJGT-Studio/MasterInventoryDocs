---
draft: false
title: Master Inventory - Craft system
snippet: "Learn the basics of Master Inventory Craft system"
image: {
    src: "https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/PostImgs/Craft.png",
    alt: "full stack web development"
}
publishDate: "2022-11-08 11:39"
category: "craft"
author: Mario Tarosso
tags: [started, docs, craft]
---

## Craft system
To create new recipes open the navigate to MasterInventory/inventory/Variables/CraftSystem and open the file DT_CraftRecipes that control the recipes input and outputs
![Img1](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/Craft/img1.png)

Note the craftPosition variable will be use to indicate the position where the item need to be place by the player in order to craft the item, note case of duplicate recipes the system will pickup the first one.

