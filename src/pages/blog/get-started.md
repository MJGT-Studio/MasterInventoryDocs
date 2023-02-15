---
layout: $/layouts/post.astro
title: Master Inventory- Get Started
description: Learn the basics of Master Inventory
tags:
  - started
  - docs
author: Mario Tarosso
authorTwitter: mariojgt2
date: 2023-02-12T10:23:31.210Z
image: https://images.unsplash.com/photo-1589409514187-c21d14df0d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80
category: started
---

# Master Inventory

Thanks for purchasing Master Inventory follow this docs to learn how easy is to implement in you game.


## Requirements

- Unreal engine 5.1 or above, i am using the new input system so old engine version this function will not work
- Awesome game.


## Installation

### First migrate the project folder to your project folder

![Img1](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/Img1.png)


### New in your player controller add the master inventory component

```javascript
BP_MasterInventory
```
![Img2](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/Img2.png)

### New you need to add the master inventory interface to your player controller

look for the interface in the content browser call

```javascript
BPI_ActorInventory
```
Now follow the next steps

### 1: Click in the class settings

![Img3](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/Img3.png)

### 2: Add the Bpi Actor Inventory interface

![Img4](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/Img4.png)

### 3: Now you need to implement return interfaces follow the imgs

This interface will return where you want to spawn the item normally you create a spawn point and attach to the character.

![Img5](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/Img5.png)

This interface will return the inventory reference THIS IS VERY IMPORTANT

![Img6](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/Img6.png)

Now if you look in the demo controller you will see the implementation of some events that you can use to customize the inventory, copy and paste the code in your controller and customize it to your needs.

![Img7](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/Img7.png)

### Congratulations you have successfully install the master inventory

[tutorial-setup](https://youtu.be/87jMTX83RpI)
[Asset-Link](https://www.unrealengine.com/marketplace/en-US/product/b5c3ee6da047491a958b499c7f027713)

