---
draft: false
title: Master Inventory - Controls
snippet: "Learn the basics of Master Inventory Controls"
image: {
    src: "https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/PostImgs/Controls.png",
    alt: "full stack web development"
}
publishDate: "2022-11-08 11:39"
category: "controls"
author: Mario Tarosso
tags: [started, docs, controls]
---

## Update the controls

Master Inventory is using the new unreal engine input system call (Input Mapping Context) is a much better solution that the normal input system because allow you to have all you controls in one place, to update the navigate to the folder MasterInventory/inventory/Inputs

Here is a list of all the controls that you can change

| Name             | Description                                                                |
| ----------------- | ------------------------------------------------------------------ |
| AC_ObjectInteract | This is the key that you use to interact with the object |
| AC_ToogleCharacterSheet   | This is the key that you use to open the character sheet |
| AC_ActionSlot_1 to 9   | This represent the action slot 1 to 9 |
| AC_MapZoopIn   | Zoom in in the map currently disabled |
| AC_MapZoopOut   | Zoom out in the map currently disabled |
| AC_ToogleMap   | Open and close the map |
| AC_ToogleRadar   | Open and close the radar ui |
| AC_ToogleCraft   | Open and close the craft system |
| AC_ToogleInventory   | Open and close the inventory ui system |
| AC_ToogleQuestJournal   | Open and close the quest system |
| AC_ToogleTutorialAndTipsList   | Open and close the tutorial system |
| AC_QuickMenuAcess   | Open and close the virtual menu for quick access to the ui |
| AC_VirtualCursorMovement   | control the virtual cursor movement |
| AC_VirtualLeftClick   | simulate the mouse left click |
| AC_VirtualRightClick   | simulate the mouse right click |
| AC_VirtualScrollDown   | simulate the mouse scroll down |
| AC_VirtualScrollUp   | simulate the mouse scroll up |

You can remap the controls at the location

```http
MasterRpgFramework -> MasterInventory -> Inputs -> IMC_MasterInventory
```
