# Qodly Copy Clipboard

A custom component for Qodly Studio that copies the value of a bound string Qodly Source to the clipboard when clicked.

## Install in Qodly Studio

Download the `qodly_copyclipboard_V0.1.1.zip` asset from the [latest release](https://github.com/4d-depot/Qodly-copy-clipboard/releases/latest). In the Qodly Studio component palette, use **Upload Component**, select the ZIP, click **Install Component**, then reload Studio. The component appears as **CopyClipBoard** under Custom Components.

Bind a string Qodly Source to the component. The copy action is available by click or keyboard (Enter or Space). The settings let you choose between **Copy**, **Outline copy**, and **Copy all**, and select an icon color. The **On Click** event is also available.

## Develop

This project targets Qodly Studio / 4D 21. Install Node.js and npm, then run:

```bash
npm ci
npm run dev
```

Open the local URL shown by Vite to preview the component. To build an installable archive:

```bash
npm run build
```

The build creates `qodly_f5970dd47c55b96d6a2b.zip` at the project root. The Module Federation Vite plugin is pinned to `1.2.6` for compatibility with Qodly Studio's custom-component loader.