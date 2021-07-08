<script context="module">
  import { STATES, ENUMS, HANDLERS } from "../../states/UI/index.svelte";
  import * as StateLib from "../../lib/state/bind.js";
  import { default as Lifes } from "./lifes.svelte";
  import { default as Targets } from "./targets.svelte";
  import { default as Timer } from "./timer.svelte";

  const BROWSER_Y_THRESHOLD = 0.7;
  const XR_TOP_Y_THRESHOLD = 0.4;
  const XR_BOTTOM_Y_THRESHOLD = -0.6;

  if (typeof window !== "undefined") {
    AFRAME.registerComponent("ui-container", {
      schema: {
        [STATES.ENABLE_XR_MODE]: {
          type: "boolean",
          default: false,
        },
      },
      update() {
        const element = this.el;
        const data = this.data;
        const topElement = element.querySelector(".ui-container-top");
        const bottomElement = element.querySelector(".ui-container-bottom");
      


        if (data[STATES.ENABLE_XR_MODE]) {
          // XR 모드로 들어간 경우
          topElement.setAttribute("position", {
            x: 0,
            y: XR_TOP_Y_THRESHOLD,
            z: 0,
          });
          bottomElement.setAttribute("position", {
            x: 0,
            y: XR_BOTTOM_Y_THRESHOLD,
            z: 0,
          });
          
        } else {
          // XR 모드에서 나온 경우
          topElement.setAttribute("position", {
            x: 0,
            y: BROWSER_Y_THRESHOLD,
            z: 0,
          });
          bottomElement.setAttribute("position", {
            x: 0,
            y: -BROWSER_Y_THRESHOLD,
            z: 0,
          });
        }
      },
    });
  }
</script>

<a-entity
  position="0 0 -1"
  ui-container
  bind__ui-container={StateLib.bind([STATES.ENABLE_XR_MODE])}
>
  <a-plane
    class="ui-container-top"
    position="0 .7  0"
    data-ui-container-position="top"
    color="rgb(0,0,0)"
    opacity="0.4"
    width=".4"
    height=".1"
  >
    <Targets />
  </a-plane>
  <a-text id="fail"  value="Fail" scale =".5 .5 .5" position = "-.1 -.2 0" data-ui-container-position="center" visible = {false}/>
  <a-text id="correct" value="Correct" scale =".5 .5 .5" position = "-.1 -.2 0" data-ui-container-position="center" visible = {false}/>

  <a-plane
    class="ui-container-bottom"
    position="0 -.7 0"
    data-ui-container-position="bottom"
    color="rgb(0,0,0)"
    opacity="0.4"
    width=".4"
    height=".2"
  >
    <Timer />
    <Lifes />
  </a-plane>
</a-entity>
