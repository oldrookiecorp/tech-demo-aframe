<script context="module">
  import { STATES, ENUMS, HANDLERS } from "../../states/UI/index.svelte";
  import * as StateLib from "../../lib/state/bind.js";
  import { default as Lifes } from "./lifes.svelte";
  import { default as Targets } from "./targets.svelte";
  import { default as Timer } from "./timer.svelte";
</script>

<a-plane position="1 .5 -1" color="#242424" width="1" height=".5">
  <a-entity material="type:plain" geometry="height: auto; width: auto">
    <Lifes />
    <Targets />
    <Timer />
  </a-entity>
</a-plane>
