<script>
  import { default as ObjAsset, ObjAssets } from "../Assets/GameObject.svelte";

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
  position="38 -4.5 4.1"
  scale="0.03 0.04 0.05"
  rotation="0 -90 0"
/>

<!-- 책장 -->
<a-gltf-model
  src={ObjAssets.shelf}
  class="env"
  shadow="cast: true; receive: true"
  position="31.596 -4.856 15.446"
  rotation="0 90 0"
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
  shadow="cast: true; receive: true"
  class="env answer"
  scale="0.04 0.05 0.04"
  position="32.156 1.19 10.908"
  rotation="0 -45 0"
  src={ObjAssets.book}
/>
<a-gltf-model
  shadow="cast: true; receive: true"
  src={ObjAssets.modern__sofa}
  position="20 -4 15"
  scale="6 6 6"
  rotation="0 180 0"
/>

{#if Hard}
  <!-- carpet -->
  <a-gltf-model
    shadow="cast: true; receive: true"
    check-answer
    rotation="-180 80.9 -180"
    class="env answer"
    src={ObjAssets.Ecarpet}
    scale="4 4 4"
    position="-1.27 -4.61 9.69"
    id="Ecarpet"
  />
  <a-gltf-model
    shadow="cast: true; receive: true"
    check-answer
    rotation="-180 80.9 -180"
    class="env"
    src={ObjAssets.Scarpet}
    scale="4 4 4"
    position="39.6 -4.61 9.69"
    id="Scarpet"
  />
  <!-- stand lamp -->
  <a-gltf-model
    shadow="cast: true; receive: true"
    check-answer
    class="env answer"
    src={ObjAssets.stand}
    scale="1 0.6 1"
    position="8.1 -4.75 18.743"
    id="standLamp"
  />
  <!-- cabinet -->
  <a-gltf-model
    shadow="cast: true; receive: true"
    check-answer
    class="env answer"
    src={ObjAssets.cabinet}
    scale="1 0.6 1"
    position="-7.643 -4.687 1.102"
    id="cabinet"
  />
  <!-- wood shelf -->
  <a-gltf-model
    sshadow="cast: true; receive: true"
    class="env "
    src={ObjAssets.woodShelf}
    scale="0.023 0.03 0.03"
    position="33.3 -3.687 1.102"
    id="woodShelf"
  />
{/if}
{#if Normal}
  <!-- stand lamp -->
  <a-gltf-model
    shadow="cast: true; receive: true"
    check-answer
    class="env answer"
    src={ObjAssets.stand}
    scale="1 0.6 1"
    position="8.1 -4.75 18.743"
    id="standLamp"
  />
{/if}
