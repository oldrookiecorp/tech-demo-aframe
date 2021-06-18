<script context="module">
  import { default as UIAssets, Assets } from "../assets/UI.svelte";
  export const fileName = "UI";
</script>

<a-scene
  physics="driver:ammo;debug:true;"
  stats
  generate-ball="count : 200; radius: .2"
>
  <UIAssets />
  <a-entity light="type:  ambient;  castShadow:  true" />
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
      material="color: black; shader: flat"
    />

    <a-plane
      position="1 .5 -1"
      color="#242424"
      width="1"
      height=".5"
      shadow="receive: false"
    >
      <a-entity
        material="type:plain"
        geometry="height: auto; width: auto"
        text="value: life; shader: msdf; "
      />
    </a-plane>
  </a-entity>

  <a-sky src={Assets.sky} />
  <a-text> Hello </a-text>
</a-scene>
