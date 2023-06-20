---
draft: false
title: Master UI - Widget System
snippet: "Learn the basics of Master UI Tutorial System"
image: {
    src: "https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/PostImgs/Tutorial.png",
    alt: "full stack web development"
}
publishDate: "2023-06-19 11:39"
category: "controls"
author: Mario Tarosso
tags: [started, docs, controls]
---

# The widget system

Master UI comes with a widget system that allow you to create a widget for your game, the widget system is very simple to use and it is very easy to create a widget for your game, if you play the demo you will see that the widget system is already implemented in the demo, in this document we will all the available widgets and methods you can use to create your own widget.

### Available widgets

![Img](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img01.png)
In the section below we will describe all the available widgets and how to use them.

# -- Buttons
Here is a list of master UI available buttons

### WBP_Master_ButtonImg
![Img2](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img02.png)

Method | Description
------------ | -------------
API_SetValue | Set the button text value

### Events callbacks
Event | Description
------------ | -------------
OnButtonClicked | Called when the button is clicked

#### Variables
Event | Description
------------ | -------------
DarkVersion | The dark version of the button
ClearVirtualControllerAfterAction | If true the virtual controller will be cleared after the button is clicked
Left click mouse can interact | If true the button can be clicked with the left mouse button

### WBP_Master_ButtonText
![Img3](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img03.png)

Method | Description
------------ | -------------
API_SetValue | Set the button text value

### Events callbacks
Event | Description
------------ | -------------
OnButtonClicked | Called when the button is clicked

#### Variables
Event | Description
------------ | -------------
DarkVersion | The dark version of the button
ClearVirtualControllerAfterAction | If true the virtual controller will be cleared after the button is clicked
Left click mouse can interact | If true the button can be clicked with the left mouse button

### WBP_Master_ButtonTextWithIcon

```
    This is a button with an icon and a text
```

![Img4](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img04.png)

Method | Description
------------ | -------------
API_SetValue | Set the button text value

### Events callbacks
Event | Description
------------ | -------------
OnButtonClicked | Called when the button is clicked

#### Variables
Event | Description
------------ | -------------
ButtonText | The text of the button on start
ButtonIcon | The icon of the button
ButtonColor | The color of the button
ClearVirtualControllerAfterAction | If true the virtual controller will be cleared after the button is clicked
Left click mouse can interact | If true the button can be clicked with the left mouse button
UseHoverAnimation | If true the button will use the hover animation

# -- Icons

### WBP_Master_ButtonTextWithIcon
```
    You can use this widget to display icons with a border of without a border.
```
![Img5](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img05.png)

Method | Description
------------ | -------------
API_SetValue | Set the icon value

#### Variables
Event | Description
------------ | -------------
IconVaraible | The icon variable
HideIconBorder | If true the icon border will be hidden on start

# -- Inputs

### WBP_ExpandableArea

```
    This widget is used to create expandable areas,
    use full when you want to create a widget that can be expanded and collapsed
    like a quest log.
```

![img6](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img06.png)

WHen working with this widget you need to attach you target widget to the Content of this widget.

Method | Description
------------ | -------------
API_PlayAniamtion | Play the expandable area animation
API_StopAnimation | Stop the expandable area animation

### WBP_Master_InputText
![img7](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img07.png)

Method | Description
------------ | -------------
API_DIsplayValidationError | Display the validation error

### Events callbacks
Event | Description
------------ | -------------
OnTextChange | Called when the text is changed

# -- List

### WBP_Master_ComplexList
```
    This list have two extra slots that can be used to display extra widgets and a text.
```
![img8](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img08.png)

Method | Description
------------ | -------------
API_SetSlot01 | Load any extra widget to the slot 01
API_SetSlot02 | Load any extra widget to the slot 02

### Events callbacks
Event | Description
------------ | -------------
OnButtonClicked | Called when the text is changed

### WBP_Master_SimpleList
![img9](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img09.png)

Method | Description
------------ | -------------
API_SetSlot | Load any extra widget to the slot 01

### Events callbacks
Event | Description
------------ | -------------
OnButtonClicked | Called when the text is changed

# -- Notifications

### WBP_LogMessage
```
   This widget is used to display notifications in the game, you can set the destroy time of the notification.
```
![img10](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img10.png)

#### Variables
Event | Description
------------ | -------------
Message | The message of the notification
TextColor | The text color of the notification
DestroyTime | The time before the notification is destroyed

# -- ProgressBar

### WBP_Master_Circular
```
   Progress bar with a circular shape.
```
![img11](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img11.png)

Method | Description
------------ | -------------
API_SetPercentage | Set the percentage of the progress bar
API_ChangeBarColor | Change the color of the progress bar

### WBP_Master_ProgressBar

```
   Progress bar with a horizontal shape.
```
![img12](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img12.png)

Method | Description
------------ | -------------
API_SetPercentage | Set the percentage of the progress bar
API_ChangeBarColor | Change the color of the progress bar

# -- Slots

### WBP_BaseItemSlot

```
   This widget can be use to create any type of slot, you can use it to create a slot for items, skills, etc.
```

![img13](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img13.png)

Method | Description
------------ | -------------
API_ToogleQtyBox | Toogle the quantity box
API_ToogleIndexBox | Toogle the index box
API_ToogleSlotSelected | Toogle the slot selected
API_ToogleIcon | Toogle the icon
API_ToogleIconBorder | Toogle the icon border
API_ToogleIconOverlay | Toogle the icon overlay
API_ChangeQtyValue | Change the quantity value
API_ChangeIndexValue | Change the index value
API_ChangeIcon | Change the icon
API_ChangeBorder | Change the border
API_ChangeOverloadIcon | Change the overload icon
API_StartCooldown | Start the cooldown
API_ClearCooldown | Clear the cooldown

#### Variables
Name | Description
------------ | -------------
ShowQty | If true the quantity box will be shown
ShowIndex | If true the index box will be shown
ShowSelected | If true the slot selected will be shown
ShowIcon | If true the icon will be shown
UseDefaultIconOnStart | If true the default icon will be used on start
ShowIconBorder | If true the icon border will be shown
UseIconOverlay | If true the icon overlay will be shown

# -- Spinner

### WBP_Spinner
```
    This widget can be use to create loading, saving and etc spinners.
```
![img14](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img14.png)
Method | Description
------------ | -------------
API_SetValue | Set the text value of the spinner

# -- Stats

### WBP_DefaulPlayerStats

```
   Way of displaying the stats of the player using a horizontal bar.
```

![img15](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img15.png)
Method | Description
------------ | -------------
API_UpdateStats | Update the stats of the bar
SnapBarValue | Still will be use internally to update and set the bar value
StartSmoothBar | This method will be use internally to start the smooth bar animation
StopSmoothBar | This method will be use internally to stop the smooth bar animation

### WBP_DefaulPlayerStatsCircular

    ```
    Way of displaying the stats of the player using a circular bar, there is no text in this widget.
    ```
![img16](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img16.png)
Method | Description
------------ | -------------
API_UpdateStats | Update the stats of the bar
SnapBarValue | Still will be use internally to update and set the bar value
StartSmoothBar | This method will be use internally to start the smooth bar animation
StopSmoothBar | This method will be use internally to stop the smooth bar animation

# -- Title

### WBP_AnimatedNumberText

```
    You can use this to create animation fx in numbers.
```
![img17](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img17.png)

Method | Description
------------ | -------------
API_ChangeValue | Change the value of the text, note for this text you can also set a delay

### WBP_Master_Title
![img18](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img18.png)

Method | Description
------------ | -------------
API_SetValue | Set the value of the title

#### Variables
Event | Description
------------ | -------------
UseTitleBorder | If true the title border will be shown

### WBP_Master_TitleWithIcon

```
 Sometimes you need to display a title with an icon, this widget will help you to do that.
```

![img20](https://raw.githubusercontent.com/mjgt-Studios/MasterInventoryDocs/main/imgs/MasterUI/img20.png)

Method | Description
------------ | -------------
API_SetValue | Set the value of the title

#### Variables
Event | Description
------------ | -------------
RemoveBorder | If true the title border will be removed
UseCustomColor | If true the title color will be changed


#### There is much more to come, stay tuned!
