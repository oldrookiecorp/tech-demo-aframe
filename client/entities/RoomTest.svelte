<script context="module">
  import { default as UIAssets, Assets } from "../assets/Room.svelte";
</script>

  <UIAssets />
    
    <a-sky src={Assets.sky}/>
<a-box class="door" src={Assets.door} position ="9.697 0.6 9.755" scale="2.64 1.1 0.55"rotation="0 90 0" height="11"width="7.2"></a-box>
<a-box class="door" src={Assets.door} position ="30.253 0.6 9.445" scale="2.64 1.1 0.55"rotation="0 90 0" height="11"width="7.2"></a-box>

<a-gltf-model
  src={Assets.roomtest}
  id="room"
  class="room"
  shadow="cast: true; receive: true"
  position="20 -5 10"
  scale="0.7 0.5 0.8"

/>