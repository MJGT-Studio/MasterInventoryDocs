# Master Inventory

Thanks for purchasing Master Inventory follow this docs to learn how easy is to implement in you game.



## Requirements

- Unreal engine 5.1, i am using the new input system so old engine version this function will not work
- Awesome game.


## Instalation

### First you need to migrate the following folder to your game.


![Logo](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/Img1.png)


### Now you need to add the following component to your game controller

```javascript
BP_MasterInventory
```

![Logo](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img2.png)

### After you done this part you need to add the required interfaces to you controller so the master inventory can send you callback
when the player for example use a item drop and etc, follow the steps.


#### 1: Click in the class settings

![Logo](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img3.png)

#### 2: Add the Bpi Actor Inventory interface

![Logo](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img4.png)

#### 3: Now you need to implement return interfaces follow the imgs

This interface will return where you want to spawn the item normaly you create a spawn point and attach to the character.

![Logo](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img5.png)

This interface will return the inventory reference THIS IS VERY IMPORTANT

![Logo](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img6.png)

#### 4: Now copy they following nodes highlighted by (MASTER INVENTORY) from BP_Master Inventory Controller example to your controller, those nodes they will control the inventory callback actions like item transfer, item usage and etc.

![Logo](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img7.png)

 ### Congratulations you have successfully install the master inventory


## Update the controls

Master Inventory is using the new unreal engine input system call (Input Mapping Context) is a much better solution that the normal input system because allow you to have all you controls in one place, to update the navigate to the folder MasterInventory/inventory/Inputs

![Logo](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img8.png)
To add new inputs just press in the plus button.

## Craft system
To create new recipes open the navigate to MasterInventory/inventory/Variables/CraftSystem and open the file DT_CraftRecipes that control the recipes input and outputs
![Logo](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img9.png)

Note the craftPosition variable will be use to indicate the position where the item need to be place by the player in order to craft, note that is case of duplicate recipes the system will pickup the first one.

## Videos

[tutorial-setup](https://youtu.be/87jMTX83RpI)
[Asset-Link](https://www.unrealengine.com/marketplace/en-US/product/b5c3ee6da047491a958b499c7f027713)
