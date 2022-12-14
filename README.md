
# Master Inventory

Thanks for purchasing Master Inventory follow this docs to learn how easy is to implement in you game.



## Requirements

- Unreal engine 5.1, i am using the new input system so old engine version this function will not work
- Awesome game.


## Instalation

### First you need to migrate the following folder to your game.

Add IMG1 here

### Now you need to add the following component to you game controller

```javascript
BP_MasterInventory
```

add img2 here

### After you done this part you need to add the required interfaces to you controller so the master inventory can send you callback
when the player for example use a item drop and etc, follow the steps.


#### 1: Click in the class settings

add img3 here

#### 2: Add the Bpi Actor Inventory interface

add img4 here

#### 3: Now you need to implement return interfaces follow the imgs

This interface will return where you want to spawn the item normaly you create a spawn point and attach to the character.

add img5

This interface will return the inventory reference THIS IS VERY IMPORTANT

add img 6

#### 4: Now you need following nodes from BP_Master Inventory Controller example to your controler, those nodes they will controll the item callback, item transfer and component initialization

 add img7

 ### Congratulations you have install the master inventory
