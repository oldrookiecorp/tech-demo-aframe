<script context="module">
  import { STATES, ENUMS, HANDLERS } from "../../states/UI/index.svelte";
  import * as StateLib from "../../lib/state/bind.js";
  import { default as Lifes } from "./lifes.svelte";
  import { default as Targets } from "./targets.svelte";
  import { default as Timer } from "./timer.svelte";
</script>

<a-entity position="0 0 -1">
  <Lifes />
  <Targets />
  <Timer />
</a-entity>
