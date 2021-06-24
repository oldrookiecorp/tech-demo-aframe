<script context="module">
  import * as LifeAssets from "./lifes.svelte";
  export const Assets = {
    sky: "#sky__miami",
    heart: {
      ...LifeAssets.ASSETS,
    },
  };
</script>

<a-assets>
  <!-- svelte-ignore a11y-missing-attribute -->
  <img id="sky__miami" src="assets/img/sky__miami.jpeg" />
  <LifeAssets.default />
</a-assets>
