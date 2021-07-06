<script>
  import { STATES, HANDLERS } from "../../states/UI/index.svelte";

  if (typeof window !== "undefined") {
    AFRAME.registerComponent("ui", {
      init() {
        const _el = this.el;

        _el.emit(HANDLERS.SET_CURRENT_SCENE, {
          [STATES.CURRENT_SCENE]: _el,
          [STATES.CURRENT_SCENE_ID]: parseInt(_el.getAttribute("id")) || 1,
        });
        _el.emit("initTimers");
        _el.addEventListener("enter-vr", () => {
          console.log("[UI COMPONENT] WILL ENTER VR MODE");
          _el.emit(HANDLERS.SET_ENABLE_XR_MODE, {
            [STATES.ENABLE_XR_MODE]: true,
          });
        });
        _el.addEventListener("exit-vr", () => {
          console.log("[UI COMPONENT] WILL EXIT VR MODE");
          _el.emit(HANDLERS.SET_ENABLE_XR_MODE, {
            [STATES.ENABLE_XR_MODE]: false,
          });
        });

        console.log(`[UI COMPONENT] initialized`);
      },
    });
  }
</script>
