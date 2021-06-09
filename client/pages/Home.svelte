<script context="module">
  import Box from "../entities/Box.svelte";
  export const fileName = "Home";
</script>

<a-scene physics="driver:ammo;debug:true; " stats>
  <a-assets>
    <a-asset-item id="balloon" src="assets/delivery_balloon/scene.gltf" />
  </a-assets>
  <a-camera position="0 2 5" />
  <a-gltf-model src="#balloon" ammo-body="type:static" ammo-shape="type:box" />
  <a-box ammo-body="type:dynamic" color="red" />
  <a-box
    ammo-body="type:static"
    ammo-shape="type:box"
    width="0.75"
    height="0.75"
    depth="0.75"
    move-circle
    position="-1 0.8 -3"
    rotation="0 45 0"
    color="#4CC3D9"
    shadow
  />

  <Box />
</a-scene>
