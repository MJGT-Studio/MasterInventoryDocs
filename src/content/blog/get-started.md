---
draft: false
title: Master Inventory- Get Started
snippet: "Learn the basics of Master Inventory"
image: {
    src: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?&fit=crop&w=430&h=240",
    alt: "full stack web development"
}
publishDate: "2023-02-14 11:39"
category: "controls"
author: Mario Tarosso
tags: [started, docs, craft]
---

# Master Inventory

Thanks for purchasing Master Inventory follow this docs to learn how easy is to implement in you game.


## Requirements

- Unreal engine 5.1 or above, i am using the new input system so old engine version this function will not work
- Awesome game.


## Installation

### First migrate the project folder to your project folder

![Img1](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/img1.png)


### New in your player controller add the master inventory component

```javascript
BP_MasterInventory
```
![Img2](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/img2.png)

### New you need to add the master inventory interface to your player controller

look for the interface in the content browser call

```javascript
BPI_ActorInventory
```
Now follow the next steps

### 1: Click in the class settings

![Img3](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/img3.png)

### 2: Add the Bpi Actor Inventory interface

![Img4](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/img4.png)

### 3: Now you need to implement return interfaces follow the imgs

This interface will return where you want to spawn the item normally you create a spawn point and attach to the character.

![Img5](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/img5.png)

This interface will return the inventory reference THIS IS VERY IMPORTANT

![Img6](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/img6.png)

Now if you look in the demo controller you will see the implementation of some events that you can use to customize the inventory, copy and paste the code in your controller and customize it to your needs.

![Img7](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/GetStarted/img7.png)

### Congratulations you have successfully install the master inventory

[tutorial-setup](https://youtu.be/87jMTX83RpI)
[Asset-Link](https://www.unrealengine.com/marketplace/en-US/product/b5c3ee6da047491a958b499c7f027713)

