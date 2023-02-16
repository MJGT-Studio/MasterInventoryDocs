---
draft: false
title: Master Inventory - Quests
snippet: "Learn the basics of Master Inventory Quests"
image: {
    src: "https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/PostImgs/Controls.png",
    alt: "full stack web development"
}
publishDate: "2022-11-08 11:39"
category: "controls"
author: Mario Tarosso
tags: [started, docs, controls]
---


# Tasks Setup
Lets create a simple task, lets you want the player to find cubes in the world you can create this task in this location
```http
  MasterInventory/inventory/Varaibles/QuestSystem/QuestsTasks/DT_QuestTasks.uasset
```
now open this file in lets add the task


![Img1](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/Quests/img1.png)
Table structure

| Parameter |  Description                       |
| :-------- |  :-------------------------------- |
| `ID` | **Important**. Will be used internaly to find the task inside a quest. |
| `Task Name` | **Required**. Your display task name |
| `Task Type` | **Required**. Type will determinate if the player need to find a item, collect money and etc. |
| `is Completed` | Check if the task is completed |
| `is Info Task` | Info task means that don,t need to be completed, lets say you want the player to return to the vendor or something |
| `Required Items` | Depending on the type of the task you need to add what items we need to check |
| `Required Currency` | If the task use currency we can add here how much the player need |
| `Disable Icon` | If true the task icon will not display |
| `Use Custom Icon` | You want to use a custom icon |
| `Custon Icon` | Your task custom icon |
