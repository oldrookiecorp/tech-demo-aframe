<svelte:head>
  <script>
    if (typeof window !== "undefined") {
      AFRAME.registerComponent("lifes", {
        schema: {
          remainLifes: {
            type: "number",
            default: 10,
          },
        },
        update: function () {
          const element = this.el;
          const { remainLifes } = this.data;
  
          const _oldData = element.getAttribute("text");
  
          element.setAttribute("text", {
            ..._oldData,
            value: `remain Lifes : ${remainLifes}`,
          });
        },
      });
    }
  </script>
</svelte:head>

