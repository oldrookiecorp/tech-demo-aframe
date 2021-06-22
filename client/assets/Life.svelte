<script context="module">
  export const lifeState =
    AFRAME &&
    window.AFRAME.registerState({
      initialState: {
        lifes: 5,
      },
      handler: {
        increaseLife(state) {
          state.lifes += 1;
        },
      },
    });
</script>

<a-text bind__value="lifes" />
