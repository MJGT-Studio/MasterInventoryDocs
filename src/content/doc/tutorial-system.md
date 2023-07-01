---
section: System
title: Tutorial System
description: Tutorial System Documentation
---

Master Inventory also comes with a tutorial system that allow you to create a tutorial for your game, the tutorial system is very simple to use and it is very easy to create a tutorial for your game, if you play the demo you will see that the tutorial system is already implemented in the demo.

## How to create a tutorial

To create a tutorial you need to create a new tutorial asset, to do that you need to navigate to the folder and open the datatable

`MasterRpgFramework -> MasterInventory -> Variables -> TutorialAndTipsSystem -> DT_TutorialsAndTips`

![Img1](/public/docs/tutorial/img1.png)

Add a new row and fill the data, check the table below for the description of the data

| Name             | type | Description                                                                |
| ----------------- | ---- | ------------------------------------------------------------------ |
| ID | String | used to identify the tutorial, also on save and load |
| Icon | Texture2D | the icon that will be displayed in the tutorial list |
| Tutorial Title | Text | the title of the tutorial |
| Title Color | LinearColor | the color of the title |
| TutorialDescriptionWidget | Widget | the description of the tutorial |
| Completed | Bool | if the tutorial is completed or not |
| Type | Enum | there is two type of tutorial, hard and soft, hard tutorial require player action to complete the tutorial, soft tutorial are automatically completed |
| Timer | Float | how long the tutorial will be displayed |

After you have created the tutorial you can add the tutorial trigger to the world using this actor, and you can select the tutorial you want to trigger
`MasterRpgFramework -> MasterInventory -> Blueprints -> Tutorial -> BP_BaseTutorialTrigger`

![Img2](/public/docs/tutorial/img2.png)
