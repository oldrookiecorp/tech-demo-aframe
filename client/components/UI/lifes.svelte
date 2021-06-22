<script context="module">
  import { STATES } from "../../states/UI/index.svelte";
  if (typeof window !== "undefined") {
    AFRAME.registerComponent("ui-lifes", {
      schema: {
        // 남은 생명 수
        [STATES.LIFES]: {
          type: "number",
          default: 5,
        },
        [STATES.REMAIN_LIFES]: {
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
          value: `remain Lifes : ${data[STATES.REMAIN_LIFES]}/${
            data[STATES.LIFES]
          }`,
        });
      },
    });
  }
</script>
