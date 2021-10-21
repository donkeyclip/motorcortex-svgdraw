import MotorCortex from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import DrawDefinition from "../dist/motorcortex-svgdraw.esm";
const DrawPlugin = MotorCortex.loadPlugin(DrawDefinition);

const clip = new MotorCortex.HTMLClip({
  html: `<div class="container">
        <div mc-for="key,item" mc-of="initParams.box">
            <svg width="200" height="200" id="{{'svg-' + key}}" class="logo" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,100A90,90 0,1,1 190,100A90,90 0,1,1 10,100" style="stroke-dasharray: 566, 568; stroke-dashoffset: 0;"></path>
                <path d="M14.260000000000005,100A85.74,85.74 0,1,1 185.74,100A85.74,85.74 0,1,1 14.260000000000005,100" style="stroke-dasharray: 539, 541; stroke-dashoffset: 0;"></path>
                <path d="M27.052999999999997,100A72.947,72.947 0,1,1 172.947,100A72.947,72.947 0,1,1 27.052999999999997,100" style="stroke-dasharray: 459, 461; stroke-dashoffset: 0;"></path>
                <path d="M60.26,100A39.74,39.74 0,1,1 139.74,100A39.74,39.74 0,1,1 60.26,100" style="stroke-dasharray: 250, 252; stroke-dashoffset: 0;"></path>
                <path d="M34.042,131.189L67.047,77.781" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
                <path d="M31.306,75.416L92.41,60.987" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
                <path d="M68.81,34.042L122.219,67.046" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
                <path d="M124.584,31.305L139.013,92.409" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
                <path d="M165.957,68.809L132.953,122.219" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
                <path d="M168.693,124.584L107.59,139.012" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
                <path d="M131.19,165.957L77.781,132.953" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
                <path d="M75.417,168.693L60.987,107.59" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
            </svg>
        </div>
    </div>`,
  css: `
        .container{
            background: black;
            width: 960px;
            height: 400px;
        }
        .container>div{
            width: 200px;
            height: 200px;
            padding: 80px 18px;
            display: inline-block;
        }
        path{
            stroke: yellow;
            fill:none;
        }
    `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "960px",
    height: "400px",
  },
  initParams: {
    box: ["", "", "", "", "", ""],
  },
});

const draw1 = new DrawPlugin.Draw(
  {
    animatedAttrs: {
      cover: 1,
    },
  },
  {
    selector: "#svg-0 path",
    duration: 2000,
  }
);

const draw2 = new DrawPlugin.Draw(
  {
    animatedAttrs: {
      cover: 1,
    },
  },
  {
    selector: "#svg-1 path",
    duration: 300,
    delay: "@expression(index*300)",
  }
);

const draw3 = new DrawPlugin.Draw(
  {
    animatedAttrs: {
      cover: 1,
    },
  },
  {
    selector: "#svg-2 path",
    duration: 2000,
    easing: "easeOutBounce",
  }
);

const draw4 = new DrawPlugin.Draw(
  {
    animatedAttrs: {
      cover: 1,
    },
  },
  {
    selector: "#svg-3 path",
    duration: 1500,
    delay: "@stagger(0, 500, 1, linear, linear, true)",
  }
);

const draw5 = new DrawPlugin.Draw(
  {
    animatedAttrs: {
      cover: 0,
    },
  },
  {
    selector: "path",
    duration: 1500,
    delay: "@stagger(0, 2000, 0.5, easeOutCubic, omni, true)",
  }
);

clip.addIncident(draw1, 0);
clip.addIncident(draw2, 2000);
clip.addIncident(draw3, 4000);
clip.addIncident(draw4, 6000);
clip.addIncident(draw5, 8000);

new Player({ clip });
