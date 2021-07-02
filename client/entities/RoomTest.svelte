<script context="module">
  import { default as UIAssets, Assets } from "../assets/Room.svelte";
</script>

  <UIAssets />
    
    <a-sky src={Assets.sky}/>

<a-gltf-model
  src={Assets.roomtest}
  id="room"
  class="room"
  shadow="cast: true; receive: true"
  position="20 -5 10"
  scale="0.7 0.5 0.8"

/>