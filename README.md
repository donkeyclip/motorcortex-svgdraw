# MotorCortex-svgdraw

**Table of Contents**

- [MotorCortex-svgdraw](#motorcortex-svgdraw)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [Draw](#draw)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-svgdraw/demo)

# Intro / Features
The library provides the Draw effect which applies progressive rendering of svg paths.
Just provide the target percentage (up to which length of the path you want to render)
and the Effect will animate the svg path render up that point.

This Plugin exposes just one Incident:
- Draw

# Getting Started
## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-svgdraw
# OR
$ yarn add @donkeyclip/motorcortex-svgdraw
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import SVGDDef from "@donkeyclip/motorcortex-svgdraw";
const SVGD = loadPlugin(SVGDDef);
```
# Creating Incidents

## Draw
Only svg **path** elements can be selected by Draw Effect. If you try to select any
element of other type you'll get error.
For each of the selected `path` elements the Effect will draw from the current length 
percentage of the path to the target, provided by the animated attribute `cover` 

```javascript
const draw = new SVGD.Draw({
    animatedAttrs: {
        cover: 1
    }
}, {
    selector: 'svg path',
    duration: 2000
});
```
The Effect of the example will fully draw all selected paths in 2000 milliseconds.

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
