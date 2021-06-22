<script>
  import * as StateLib from "../../lib/state/bind";
  import { STATES } from "../../states/UI/index.svelte";
  import { convertSecondsToMinutes } from "../../lib/UI/Timer";
  if (typeof window !== "undefined") {
    AFRAME.registerComponent("ui-timer", {
      schema: {
        // 남은 초
        [STATES.REMAIN_SECONDS]: {
          type: "number",
          default: -1,
        },
      },
      init() {
        const _el = this.el;
        const _data = this.data;
        console.log(`[TIMER COMPONENT] intialized. ${JSON.stringify(_data)}`);
      },
      update() {
        const _el = this.el;
        const _data = this.data;
        const _oldData = _el.getAttribute("text");
        const _remainTimes = convertSecondsToMinutes(
          _data[STATES.REMAIN_SECONDS]
        );
        _el.setAttribute("text", {
          ..._oldData,
          value: `remain times : ${_remainTimes}`,
        });
      },
    });
  }
</script>

<a-entity
  position="0 -0.05 0"
  ui-timer
  bind__ui-timer={`${StateLib.bind([STATES.REMAIN_SECONDS])}`}
/>
