<script context="module">
  import state from "../components/state.svelte";
  import { default as DemoAssets, Assets } from "../assets/Demo.svelte";
  import PlaneBox from "../entities/PlaneBox.svelte";
  export const fileName = "Demo";
</script>

<svelte:head>
  <script>
    AFRAME.registerComponent("generate-ball", {
      schema: {
        count: {
          type: "number",
          default: 10,
        },
        radius: {
          type: "number",
          default: 0.25,
        },
      },
      init() {
        for (let i = 0; i < this.data.count; i++) {
          const sphere = document.createElement("a-sphere");
          const x = (Math.random() - 0.5) * 5;
          const y = Math.random() * 10 - 5;
          const z = (Math.random() - 0.5) * 5;
          sphere.setAttribute("position", "" + x + " " + y + " " + z);
          sphere.setAttribute("radius", this.data.radius);
          sphere.setAttribute("ammo-body", "type: dynamic;");
          sphere.setAttribute("ammo-shape", "type:sphere");
          sphere.setAttribute("shadow", "");
          sphere.setAttribute("color", "#EF2D5E");
          this.el.appendChild(sphere);
        }
      },
    });
  </script>
</svelte:head>

<a-scene
  physics="driver:ammo;debug:true;"
  stats
  generate-ball="count : 200; radius: .2"
>
  <DemoAssets />
  <a-camera position="0 2 5" />
  <a-gltf-model
    src={Assets.balloon}
    ammo-body="type:static"
    ammo-shape="type:box"
    position="0 -5 0"
  />
  <PlaneBox size={10} color="gray" />
</a-scene>
