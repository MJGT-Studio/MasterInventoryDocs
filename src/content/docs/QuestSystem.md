---
draft: false
title: Master Inventory - Quests
snippet: "Learn the basics of Master Inventory Quests"
image: {
    src: "https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/PostImgs/Quests.png",
    alt: "full stack web development"
}
publishDate: "2023-02-16 11:39"
category: "controls"
author: Mario Tarosso
tags: [quest, docs, controls]
---


# Tasks Setup
Lets create a simple task, lets you want the player to find cubes in the world you can create this task in this location
```http
  MasterInventory/inventory/Variables/QuestSystem/QuestsTasks/DT_QuestTasks.uasset
```
now open this file in lets add the task


![Img1](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/Quests/img1.png)
Table structure

| Parameter |  Description                       |
| :-------- |  :-------------------------------- |
| `ID` | **Important**. Will be used internally to find the task inside a quest. |
| `Task Name` | **Required**. Your display task name |
| `Task Type` | **Required**. Type will determinate if the player need to find a item, collect money and etc. |
| `is Completed` | Check if the task is completed |
| `is Info Task` | Info task means that don,t need to be completed, lets say you want the player to return to the vendor or something |
| `Required Items` | Depending on the type of the task you need to add what items we need to check |
| `Required Currency` | If the task use currency we can add here how much the player need |
| `Disable Icon` | If true the task icon will not display |
| `Use Custom Icon` | You want to use a custom icon |
| `Custon Icon` | Your task custom icon |


# Quest Setup
Now lets create a simple quest, lets you want the player to find cubes in the world you can create this quest in this location
```http
  MasterInventory/inventory/Variables/QuestSystem/Quests/DT_MasterQuests.uasset
```
![Img2](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/Quests/img2.png)


| Parameter |  Description                       |
| :-------- |  :-------------------------------- |
| `ID` | **Important**. Will be used internally to find the task inside a quest |
| `QuestIcon` | **Important**. Quest display icon |
| `Quest Name` | **Important**. Quest name |
| `Quest Description` | **Important**. Quest text description, currently not in use |
| `Quest Description Widget` | **Important**. Used to display a more complex quest description |
| `Available` |  Is the quest available |
| `Category` | What category this quest belongs |
| `LinearTasks` | if true on task complete it will move to the next one |
| `CanLinearTasksStack` | if true the task will task once complete |
| `Tasks` | **Important**. Your quest tasks |
| `TasksProgress` | **Important**. The value that will determinate if the quest can be complete or not |
| `Rewards` | **Important**. Player rewards |
| `Completed` | **Important**. Is the quest previous completed |
| `isTracking` | **Important**. is the player tracking the quest |
| `WhenCompleteCanTriggerEventCallBack?` | this will prevent a infinite loop once the quest has been completed |


Pleas for better understanding check the example project you can also check this  - [video](https://youtu.be/kFMVHpIeuqo) for a better understanding
