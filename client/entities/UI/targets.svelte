<script>
  import * as StateLib from "../../lib/state/bind";
  import { STATES } from "../../states/UI/index.svelte";
  if (typeof window !== "undefined") {
    AFRAME.registerComponent("ui-targets", {
      schema: {
        // 최대 타겟 수
        [STATES.NUMBER_OF_TARGETS]: {
          type: "number",
          default: 5,
        },
        // 남은 타겟 수
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
          width: 0.8,
          align: "center",
          value: `remains\n${data[STATES.REMAIN_TARGETS]}/${
            data[STATES.NUMBER_OF_TARGETS]
          }`,
        });
      },
    });
  }
</script>

<a-entity
  position="0 .78 0"
  geometry="primitive:plane;width:.25;height:.12;"
  material="shader:flat; color:#000; opacity:.7"
  ui-targets
  bind__ui-targets={`${StateLib.bind([
    STATES.NUMBER_OF_TARGETS,
    STATES.REMAIN_TARGETS,
  ])}`}
/>
