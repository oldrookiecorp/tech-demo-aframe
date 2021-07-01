<script>
  import { default as ObjAsset, ObjAssets } from "../Assets/GameObject.svelte";
  import { STATES, ENUMS, HANDLERS } from "../states/UI/index.svelte";
  import * as StateLib from "../lib/state/bind";

  export let Hard;
  export let Normal;
</script>

<ObjAsset />

<a-gltf-model
  shadow="cast: true; "
  src={ObjAssets.npc}
  cursor-listener
  start-timer
  position="20 -4 5"
  scale="0.4 0.4 0.4"
  animation="property: object3D.position.y;
  to: -3; 
  dir: alternate; 
  dur: 1000; 
  loop: true"
/>
<a-gltf-model
  shadow="cast: true; receive: true"
  src={ObjAssets.desk}
  class="env"
  position="37.776 -4.5 0.971"
  scale="0.03 0.04 0.05"
  rotation="0 -90 0"
/>

<!-- 책장 -->
<a-gltf-model
  src={ObjAssets.shelf}
  id="shelf"
  class="env"
  shadow="cast: true; receive: true"
  position="35.528 -4.856 20.005"
  scale="1 1 1"
  
/>
<a-gltf-model
    shadow="cast: true; receive: true"
    rotation="-180 80.9 -180"
    class="env"
    src={ObjAssets.Ecarpet}
    scale="4 4 4"
    position="39.6 -4.502 9.69"
    id="Ecarpet"
  />
<a-gltf-model
  shadow="cast: true; receive: true"
  src={ObjAssets.modern__sofa}
  position="20 -4 15"
  scale="6 6 6"
  rotation="0 180 0"
/>
<!-- 정답 -->
<!-- 빈백 -->
<a-gltf-model
  src={ObjAssets.aqua}
  class="env answer"
  shadow="cast: true; receive: true"
  position="47.439 -4.72 14.503"
  scale="3.5 3.5 3.5"
  rotation="0 -86.466 0"
/>
<a-gltf-model
  src={ObjAssets.adidas}
  class="env answer"
  shadow="cast: true; receive: true"
  position="40.007 1.157 19.498"
  scale="3.5 3.5 3.5"
  rotation="0 -170.400 0"
/>


{#if Hard}
<a-gltf-model
shadow="cast: true; receive: true"
class="env answer"
src={ObjAssets.diningTable}
scale="3 3 3"
position="42.714 -4.524 7.2"
id="diningTable"
/>
  <a-gltf-model
    shadow="cast: true; receive: true"
    check-answer
    bind__check-answer={StateLib.bind([STATES.STATE_OF_GAME])}
    class="env answer"
    src={ObjAssets.bluevase}
    scale="3 3 3"
    position="8.8 3.944 0.539"
    id="bluevase"
  />
  
  
{/if}
{#if Normal || Hard}
  <!-- stand lamp -->
  <a-gltf-model
    shadow="cast: true; receive: true"
    check-answer
    bind__check-answer={StateLib.bind([STATES.STATE_OF_GAME])}
    class="env answer"
    src={ObjAssets.stand}
    scale="1 0.6 1"
    position="8 -4.75 18.743"
    id="standLamp"
  />
{/if}
