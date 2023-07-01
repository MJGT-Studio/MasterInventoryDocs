---
title: Release 4.0.0
description: Master inventory next release 4.0.0 features.
author: mario
publishDate: 2023-06-20T00:00:00.000Z
categories:
  - release
tags:
  - help
  - releases
---

## Release 4.0.0

release 4.0.0 notes:

- UI Refactor
- Fixed a bug in the tutorials widget that caused incorrect counts to be displayed during searches.
- Restructured UI variables.
- Fixed a bug in the quest UI where icons were not coming from the master inventory's datatable.
- Removed the Red Keep UI.
- Improved stability and consistency of the theme swap function.
- Added a new mouse cursor.
- Enhanced world UI item display for better item feedback.
- Refactored the items notification display.
- Improved performance of inventory refresh by implementing a debounce system.
- Restructured the ST_MasterUiSettings structure for cleaner code and better standardization.
- Updated the Legacy theme.
- Fixed issues where some UI items did not have dynamic icons.
- Resolved a bug in GameMode and UiGameMode where the game controller would sometimes go missing.
- Renamed UiGameMode to API_UiGameMode and GameMode to API_GameMode.
- Fixed a bug that caused duplicated notification messages when transferring items from a chest.

Notes: This release primarily affects the widgets. If you have any custom widgets using the MasterInventory UI, it is recommended to create a backup before upgrading. The update may impact previous widgets from older releases.


