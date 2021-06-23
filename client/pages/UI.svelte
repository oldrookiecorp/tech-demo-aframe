<script context="module">
  import { default as UIAssets, Assets } from "../assets/UI.svelte";
  import { default as Lifes } from "../components";
  export const fileName = "UI";
</script>

<svelte:head>
  <script>
    // registerState
    AFRAME.registerState({
      initialState: {
        lifes: 5,
        seconds: 300,
        remainSeconds: 300,
        interval: null,
        startedAt: null,
      },
      handlers: {
        initialize(state, action) {
          // action과 actions가 다른것인가?
          state.lifes = action.lifes;
          state.seconds = actions.seconds;
          state.remainSeconds = actions.remainSeconds;
        },
        increaseLife: (state) => state.lifes++,
        decreaseLife: (state) => state.lifes--,
        setRemainSeconds: (state, action) =>
          (state.remainSeconds = action.seconds),
        setTimeInterval: (state) => {
          state.startedAt = new moment();
          state.remainSeconds = 300;
          state.interval = window.setInterval(() => {
            const { startedAt, seconds } = state;
            // 현재와 시작 남은 시간 계산
            const _now = new moment();
            //scene에다가 emit하면 언제 실행되는 것인가?
            AFRAME.scenes[0].emit("setRemainSeconds", {
              seconds: seconds - _now.diff(startedAt, "seconds"),
            });
          }, 500);
        },
        clearTimeInterval: (state) => {
          if (state.interval && window) {
            // clear interval
            window.clearInterval(state.interval);
            // initialize state
            state.interval = null;
            state.startedAt = null;
            console.log("time interval clear");
          } else {
            throw new Error(
              "clear time interval error!, interval already empty"
            );
          }
        },
      },
    });

    AFRAME.registerComponent("timer", {
      schema: {
        remainSeconds: {
          type: "number",
          default: 300,
        },
      },
      update() {
        const element = this.el;
        const { remainSeconds } = this.data;
        const _oldData = element.getAttribute("text");

        if (remainSeconds <= 0) {
          element.setAttribute("text", {
            ..._oldData,
            value: `remain Times : Finished!`,
          });
          window.AFRAME.scenes[0].emit("clearTimeInterval");
        } else {
          const _minutes = Math.floor(remainSeconds / 60);
          const _seconds = `${remainSeconds - _minutes * 60}`.padStart(2, "0");

          element.setAttribute("text", {
            ..._oldData,
            value: `remain Times : ${_minutes}:${_seconds}`,
          });
        }
      },
    });
  </script>
</svelte:head>
<Lifes />
<a-scene stats>
  <UIAssets />

  <a-entity light="type:  ambient; " />
  <a-entity
    inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
    camera
    look-controls
    wasd-controls
  >
    <a-entity
      cursor="fuse: true; fuseTimeout: 500"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
      material="color: fff; shader: flat; opacity: .8"
    />

    <a-plane position="1 .5 -1" color="#242424" width="1" height=".5">
      <a-entity material="type:plain" geometry="height: auto; width: auto">
        
        <a-entity lifes bind__lifes="remainLifes:lifes" />
        <a-entity
          lifes
          bind__lifes="remainLifes:lifes"
        />
        <a-entity
          position="0 -0.05 0"
          timer
          bind__timer="remainSeconds:remainSeconds"
        />
      </a-entity>
    </a-plane>
  </a-entity>

  <a-sky src={Assets.sky} />
</a-scene>
