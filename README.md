# motorcortex-svgdraw
The library provides the Draw effect which applies progressive rendering of svg paths.
Just provide the target percentage (up to which length of the path you want to render)
and the Effect will animate the svg path render up that point.

[Demo](https://kissmybutton.github.io/motorcortex-svgdraw/demo)

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-svgdraw
# OR
$ yarn add @kissmybutton/motorcortex-svgdraw
```

## Importing and loading

```javascript
import MotorCortex from "@kissmybutton/motorcortex";
import SVGDDef from "@kissmybutton/motorcortex-svgdraw";
const SVGD = MotorCortex.loadPlugin(SVGDDef);
```

## API
The Plugin exposes just one Effect, the Draw Effect.

### Draw
Only svg **path** elements can be selected by Draw Effect. If you try to select any
element of other type you'll get error.
For each of the selected `path` elements the Effect will draw from the current length 
percentage of the path to the target, provided by the animated attribute `cover` 

```javascript
import MotorCortex from "@kissmybutton/motorcortex";
import SVGDDef from "@kissmybutton/motorcortex-svgdraw";
const SVGD = MotorCortex.loadPlugin(SVGDDef);

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