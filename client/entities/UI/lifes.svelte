<script>
  import * as StateLib from "../../lib/state/bind";
  import { Assets } from "../../assets/UI/index.svelte";
  import { STATES } from "../../states/UI/index.svelte";

  // 하트 이미지의 너비와 높이, 그리고 간격
  const __HEART_IMG_WIDTH = 0.05;
  const __HEART_IMG_HEIGHT = 0.05;
  const __HEART_IMG_MARGIN = 0.01;

  if (typeof window !== "undefined") {
    AFRAME.registerComponent("ui-lifes", {
      schema: {
        // 제한 생명 수
        //ui 하트 갯수
        [STATES.LIFES]: {
          type: "number",
          default: [STATES.LIFES],
        },
        // 남은 생명 수
        [STATES.REMAIN_LIFES]: {
          type: "number",
          default: [STATES.REMAIN_LIFES],
        },
      },
      update: function () {
        const element = this.el;
        const remainLifes = this.data[STATES.REMAIN_LIFES];
        const hearts = element.querySelectorAll(".ui-heart-item");
        // 하트 갯수가 현재와 다른 경우
        if (hearts.length !== this.data[STATES.LIFES]) {
          for (let i = 0; i < this.data[STATES.LIFES]; i++) {
            const _heart = document.createElement("a-image");
            _heart.setAttribute("class", "ui-heart-item");
            _heart.setAttribute("width", __HEART_IMG_WIDTH);
            _heart.setAttribute("height", __HEART_IMG_HEIGHT);
            _heart.setAttribute("position", {
              x: 0 + __HEART_IMG_WIDTH * (i - 2) + __HEART_IMG_MARGIN * (i - 2),
              y: 0,
              z: 0,
            });
            _heart.setAttribute("ui-lifes-heart", { fill: true });
            _heart.setAttribute("data-ui-heart-seq", i + 1);
            element.appendChild(_heart);
          }
        }
        // 하트 제한 갯수가 현재와 같은 경우
        else {
          hearts.forEach((_heart) => {
            const _currentHeartSeq = _heart.getAttribute("data-ui-heart-seq");
            _heart.setAttribute("ui-lifes-heart", {
              fill: _currentHeartSeq <= remainLifes,
            });
          });
        }
      },
    });

    AFRAME.registerComponent("ui-lifes-heart", {
      schema: {
        fill: {
          type: "boolean",
          default: false,
        },
      },
      update() {
        const element = this.el;
        const { fill } = this.data;
        if (fill) {
          element.setAttribute("src", Assets.heart.fill);
        } else {
          element.setAttribute("src", Assets.heart.empty);
        }
      },
    });
  }
</script>

<a-entity
  position="0 0 .01"
  ui-lifes
  bind__ui-lifes={StateLib.bind([STATES.LIFES, STATES.REMAIN_LIFES])}
/>
