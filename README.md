# Overview

The CopyClipBoard button is a component designed to facilitate copying text to the clipboard with a simple click.

It serves as a simple and essential tool for enabling users to copy text displayed on a page to the local clipboard (the clipboard of the machine where the click occurs).


## CopyClipBoard component

![copyClipBoard](https://github.com/4d-depot/Qodly-copy-clipboard/blob/main/public/CopyClipBoard.png)
![OutlineCopyClipBoard](https://github.com/4d-depot/Qodly-copy-clipboard/blob/main/public/OutlineCopyClipBoard.png)
![CopyAllToClipBoard](https://github.com/4d-depot/Qodly-copy-clipboard/blob/main/public/CopyAllToClipBoard.png)

### Properties

| Name          | Type   | Default       | Description                                                                                                                                           |
| ------------- | ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Icon          | string | Copy           | This is the appearance of the copy icon to select from a three-value drop-down list (Copy, Outline copy, Copy all).                                                                             |
| Icon color    | string | Empty          | This property sets the color of the copy icon (RGB code). |     

### Datasource

| Name       | Type   | Required | Description                                                                                                   |
| ---------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------- |
| Datasource | string | Yes      | Will contain the Qodly source to copy to the clipboard when the onClick event fires.                          |
