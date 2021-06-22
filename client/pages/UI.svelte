<script context="module">
  import { default as UIAssets, Assets } from "../assets/UI/index.svelte";
  import UIStates from "../states/UI/index.svelte";
  import UIGlobalComponent from "../components/UI/ui.svelte";
  import { default as UIComponent } from "../entities/UI/index.svelte";
  export const fileName = "UI";
</script>

<!-- UI 관련 스테이트 -->
<UIStates />
<!-- UI의 글로벌 컴포넌트 -->
<UIGlobalComponent />

<a-scene
  id="scene-stage-1"
  inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
  stats
  ui
>
  <UIAssets />
  <a-entity light="type:  ambient; " />
  <a-entity camera look-controls wasd-controls>
    <a-entity
      cursor="fuse: true; fuseTimeout: 500"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
      material="color: fff; shader: flat; opacity: .8"
    />
    <UIComponent />
  </a-entity>

  <a-sky src={Assets.sky} />
</a-scene>
