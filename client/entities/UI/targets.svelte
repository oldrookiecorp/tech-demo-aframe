<script>
  import * as StateLib from "../../lib/state/bind";
  import { STATES } from "../../states/UI/index.svelte";
  if (typeof window !== "undefined") {
    AFRAME.registerComponent("ui-targets", {
      schema: {
        // 남은 생명 수
        [STATES.NUMBER_OF_TARGETS]: {
          type: "number",
          default: 5,
        },
        [STATES.REMAIN_TARGETS]: {
          type: "number",
          default: 5,
        },
      },
      update: function () {
        const element = this.el;
        const data = this.data;
        const _oldData = element.getAttribute("text");
        element.setAttribute("text", {
          ..._oldData,
          value: `remain Targets : ${data[STATES.REMAIN_TARGETS]}/${
            data[STATES.NUMBER_OF_TARGETS]
          }`,
        });
      },
    });
  }
</script>

<a-entity
  position="0 0.05 0"
  ui-targets
  bind__ui-targets={`${StateLib.bind([
    STATES.NUMBER_OF_TARGETS,
    STATES.REMAIN_TARGETS,
  ])}`}
/>
