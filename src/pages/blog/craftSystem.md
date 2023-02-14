---
layout: $/layouts/post.astro
title: Master Inventory - Craft system
description: Learn the basics of Master Inventory Craft system
tags:
  - started
  - docs
  - craft
author: Mario Tarosso
authorTwitter: mariojgt2
date: 2023-02-10T10:23:31.210Z
image: https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
category: craft
---

## Craft system
To create new recipes open the navigate to MasterInventory/inventory/Variables/CraftSystem and open the file DT_CraftRecipes that control the recipes input and outputs
![Img1](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/imgs/Craft/Img1.png)

Note the craftPosition variable will be use to indicate the position where the item need to be place by the player in order to craft the item, note case of duplicate recipes the system will pickup the first one.

