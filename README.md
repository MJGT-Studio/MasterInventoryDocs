# Master Inventory

Thanks for purchasing Master Inventory follow this docs to learn how easy is to implement in you game.



## Requirements

- Unreal engine 5.1, i am using the new input system so old engine version this function will not work
- Awesome game.


## Installation

### First you need to migrate the following folder to your game.


![Img1](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/Img1.png)


### Now you need to add the following component to your game controller

```javascript
BP_MasterInventory
```

![img2](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img2.png)

### After you done this part you need to add the required interfaces to you controller so the master inventory can send you callback
when the player for example use a item drop and etc, follow the steps.


#### 1: Click in the class settings

![img3](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img3.png)

#### 2: Add the Bpi Actor Inventory interface

![img4](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img4.png)

#### 3: Now you need to implement return interfaces follow the imgs

This interface will return where you want to spawn the item normally you create a spawn point and attach to the character.

![img5](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img5.png)

This interface will return the inventory reference THIS IS VERY IMPORTANT

![img6](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img6.png)

#### 4: Now copy they following nodes highlighted by (MASTER INVENTORY) from BP_Master Inventory Controller example to your controller, those nodes they will control the inventory callback actions like item transfer, item usage and etc.

![img7](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img7.png)

 ### Congratulations you have successfully install the master inventory


## Update the controls

Master Inventory is using the new unreal engine input system call (Input Mapping Context) is a much better solution that the normal input system because allow you to have all you controls in one place, to update the navigate to the folder MasterInventory/inventory/Inputs

![img8](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img8.png)
To add new inputs just press in the plus button.

## Craft system
To create new recipes open the navigate to MasterInventory/inventory/Variables/CraftSystem and open the file DT_CraftRecipes that control the recipes input and outputs
![img9](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img9.png)

Note the craftPosition variable will be use to indicate the position where the item need to be place by the player in order to craft the item, note case of duplicate recipes the system will pickup the first one.

## Item Creation

The easiest way to create a new item is to duplicate existing item and change the name and the mesh, if you want to create a new item from scratch you need to follow the steps below.

### 1: navigate to (MasterInventory/inventory/Variables/Items)

In this folder open the follow file DT_Item, this file controls all the inventory items available

![img10](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img10.png)
![img11](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img11.png)

When editing the item pay attention to the following fields

| Variable Name             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Index | Used internally for reference internally so master inventory knows what item to change |
| Icon | Icon that will display in the master inventory |
| Name | Item display name |
| Description | Used in the item details widget |
| Description Widget | Used in the item details widget, a dynamic widget will be created and add on top in the item details |
| Category | Can be used to handle different actions |
| Rarity | Item Rarity used in the name and description display |
| Equipped | Is the item Equipped ? used internally |
| Stack | How many of the items the player have, used internally |
| Max Stack | How many max stacks per slot you want per slot |
| Category action | Can be to equip items, spawn items and etc, the sword item has a more details example. |
| Sell Price | Not in use yet |
| Buy Price | Not in use yet |
| Item Picker | The actor that will be used to pick the item in the world |
| Context Menu | Actions this item can handle |
| Pickup Delay | Time delay to pick the item, lets say you want to use a animation first |
| Drop Not Allowed | That means the item once pickup will not be dropped |
| Max Durability | How durable the item is. |
| Current Durability | If below 0 the item will be deleted |
| Attribute Boost | Lets say you want to increase the player health you can create custom stats and use this in the callback |

## Item Picker (BP_BaseItemPicker)
The item Picker is what the player or any actor with the Master Inventory can interact with, here is a list of functions that you can override when customizing a item, i recommend creating a children actor so you don't override the default MasterInventory Picker.

| Function Name             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
| OnActorDestroy | Used When the MasterInventory pickup the item |
| ActorInRange | When a actor with the MasterInventory is in range |
| ActorOutOfRange | When a actor with the MasterInventory is out range |
| Object Interaction Client | When a actor with the MasterInventory interact with the object, note that the event runs in the Client |

## Chest Actor (BP_BaseChest)
The chest base actor is quite simple, the best also extends from BP_BaseItemPicker so you have all the functions above but we have some extra variable settings you can use to configure the chest item.

| Variable Name             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
| InUse | Means that another actor is using the chest |
| ChestId | Used so the system can save the chest item and the items inside |
| DynamicChestId | Normally used for dynamic spawned chests |

## ItemAttributes

To manage ItemAttributes navigate to (MasterInventory/inventory/Variables/Items/ItemAttributes) open the file DT_ItemAttributes
![img13](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/img/img13.png)

When editing the item pay attention to the following fields
| Variable Name             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Name | Stats name |
| Color | Color that will display in the master inventory |
| Icon | Icon that will display in the master inventory |

[tutorial-setup](https://youtu.be/87jMTX83RpI)
[Asset-Link](https://www.unrealengine.com/marketplace/en-US/product/b5c3ee6da047491a958b499c7f027713)

beta 1.2.1
