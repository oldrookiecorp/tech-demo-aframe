<script>
  import { STATES, HANDLERS } from "../../states/UI/index.svelte";

  if (typeof window !== "undefined") {
    AFRAME.registerComponent("ui", {
      init() {
        const _el = this.el;
        _el.emit(HANDLERS.SET_CURRENT_SCENE, {
          [STATES.CURRENT_SCENE]: _el,
          [STATES.CURRENT_SCENE_ID]: _el.getAttribute("id") || "",
        });

        console.log(`[UI COMPONENT] initialized`);
      },
    });
  }
</script>
