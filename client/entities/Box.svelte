<svelte:head>
  <script>
    let scene;
    window.onload = () => {
      scene = document.querySelector("a-scene");

      for (let i = 0; i < 100; i++) {
        const sphere = document.createElement("a-sphere");
        const x = (Math.random() - 0.5) * 1.5;
        const y = Math.random() + 1;
        const z = (Math.random() - 0.5) * 1.5 - 4;
        sphere.setAttribute("position", "" + x + " " + y + " " + z);
        sphere.setAttribute("radius", 0.25);
        sphere.setAttribute("ammo-body", "type: dynamic;");
        sphere.setAttribute("ammo-shape", "type:sphere");
        sphere.setAttribute("shadow", "");
        sphere.setAttribute("color", "#EF2D5E");
        scene.appendChild(sphere);
      }
    };
  </script>
</svelte:head>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position="0 0 -4"
  rotation="-90 0 0"
  width="4"
  height="4"
  color="#7BC8A4"
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position="0 4 -4"
  rotation="90 0 0"
  width="4"
  height="4"
  color="#7BC8A4"
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position="0 2 -6"
  rotation="0 0 0"
  width="4"
  height="4"
  color="#7BC8A4"
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position="-2 2 -4"
  rotation="0 90 0"
  width="4"
  height="4"
  color="#7BC8A4"
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position="2 2 -4"
  rotation="0 -90 0"
  width="4"
  height="4"
  color="#7BC8A4"
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position="0 2 -2"
  rotation="-180 0 0"
  width="4"
  height="4"
  color="#7BC8A4"
  shadow
/>
