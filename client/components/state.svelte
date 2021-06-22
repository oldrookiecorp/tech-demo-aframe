<svelte:head>
  <script>
    AFRAME.registerState({
      initialState: {
        lifes: 5,
      },
      handlers: {
        decreaseLife(state) {
          console.log("decrease life");
          state.lifes -= 1;
        },
        increaseLife(state) {
          console.log("increase life");
          state.lifes += 1;
        },
      },
    });
  </script>
</svelte:head>
