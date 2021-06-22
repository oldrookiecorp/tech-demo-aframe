<script context="module">
  import { default as UIAssets, Assets } from "../assets/UI.svelte";
  import UIStates, { STATES } from "../states/UI/index.svelte";
  import UIComponent from "../components/UI/ui.svelte";
  import TimerComponent from "../components/UI/timer.svelte";
  import LifeComponent from "../components/UI/lifes.svelte";
  import TargetComponent from "../components/UI/targets.svelte";
  import * as StateLib from "../lib/state/bind.js";
  export const fileName = "UI";
</script>

<UIStates />
<UIComponent />
<TimerComponent />
<LifeComponent />
<TargetComponent />

<a-scene id="scene-stage-1" stats ui>
  <UIAssets />
  <a-entity light="type:  ambient; " />
  <a-entity
    inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
    camera
    look-controls
    wasd-controls
  >
    <a-entity
      cursor="fuse: true; fuseTimeout: 500"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
      material="color: fff; shader: flat; opacity: .8"
    />
    <a-plane position="1 .5 -1" color="#242424" width="1" height=".5">
      <a-entity material="type:plain" geometry="height: auto; width: auto">
        <a-entity
          position="0 0.05 0"
          ui-targets
          bind__ui-targets={`${StateLib.bind([
            STATES.NUMBER_OF_TARGETS,
            STATES.REMAIN_TARGETS,
          ])}`}
        />
        <a-entity
          ui-lifes
          bind__ui-lifes={`${StateLib.bind([
            STATES.LIFES,
            STATES.REMAIN_LIFES,
          ])}`}
        />
        <a-entity
          position="0 -0.05 0"
          ui-timer
          bind__ui-timer={`${StateLib.bind([STATES.REMAIN_SECONDS])}`}
        />
      </a-entity>
    </a-plane>
  </a-entity>

  <a-sky src={Assets.sky} />
</a-scene>
