<script context="module">
  import { default as UIAssets, Assets } from "../assets/Room.svelte";
</script>

  <UIAssets />
    
    <a-sky src={Assets.sky}/>
<a-assets>
    <!-- env -->
    <a-asset-item id="roomtest"src="assets/Puzzle/gltf/방 수정_문 추가/방_수정_문 추가.gltf"/>
</a-assets>

<a-gltf-model
  src="#roomtest"
  id="room"
  class="room"
  shadow="cast: true; receive: true"
  position="31.596 -4.856 15.446"
  scale="0.7 0.5 0.8"

/>