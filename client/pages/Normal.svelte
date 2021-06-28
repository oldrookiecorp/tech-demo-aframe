<script context="module">
  import GameObject from "../entities/GameObject.svelte";
  // import GameUi from "../entities/GameUi.svelte";
  import RoomTest from "../entities/RoomTest.svelte";
  import CheckAnswer from "../components/CheckAnswer.svelte"
  import { default as UIAssets, Assets } from "../assets/UI/index.svelte";
  import UIStates from "../states/UI/index.svelte";
  import UIGlobalComponent from "../components/UI/ui.svelte";
  import { default as UIComponent } from "../entities/UI/index.svelte";
  export const fileName = "Normal";
</script>


<svelte:head>
  <script>

    // 상태변수
    let score = 0;
    AFRAME.registerComponent("cursor-listener", {
      init: function () {
        // 환경배치
        const scene = document.querySelector("a-scene");
        const copyArr = document.getElementsByClassName("env");
        // const position = [
        //   "-2 -4.5 4.1",
        //   "4.541 -4.5 15.448",
        //   "-8.404 -4.856 15.446",
        //   "5 -4.5 3",
        //   "-8.156 1.19 10.908",
        // ];
        const position = [
          "-2 -4.5 4.1",
          "-8.404 -4.856 15.446",

          "-8.156 1.19 10.908",
          "5 -4.5 3",
          "7.327 -4.72 14.503",
        ];
        for (let j = 0; j < 5; j++) {
          const copyElement = copyArr[j].cloneNode();
          copyElement.setAttribute("position", position[j]);
          copyElement.setAttribute("check-answer", "");

          scene.appendChild(copyElement);
        }

        this.el.addEventListener("click", function (evt) {
            console.log("start!");
            const answerArr = document.getElementsByClassName("answer");
            const srcArr = [
              "assets/Puzzle/gltf/빈백_쿠션_코랄색/빈백_쿠션_코랄색.gltf",
            ];
            for (let i = 0; i < 2; i++) {
              answerArr[i].setAttribute("src", srcArr[i]);
            }
            AFRAME.scenes[0].emit('startGame');
          });
      },
    });
  </script>
  
</svelte:head>
<!-- UI 관련 스테이트 -->
<UIStates />
<!-- UI의 글로벌 컴포넌트 -->
<UIGlobalComponent />
<!-- 정답체크 컴포넌트 -->
<CheckAnswer/>
<a-scene
  id="scene-stage-2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
  ui                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  vr-mode-ui
  inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
>
<UIAssets />

  <a-entity
    light="type: ambient;  intensity: 0.5;"
    position="20 0 12"
  />
 
  <a-entity
    light="type: point; castShadow: true; intensity: 0.2;"
    position="20 -2 8"
  />
  <a-entity
    light="type:  point;  intensity:0.5 castShadow: true;"
    position="50 0 12"
  />
  <a-entity laser-controls="hand: left" />
  <a-entity laser-controls="hand: right" />
  <a-entity camera look-controls wasd-controls position="20 1.5 15">
    <a-entity
      cursor="fuse: true; fuseTimeout: 500"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
      material="color: #fff; shader: flat; opacity: .8"
    />
    <UIComponent />
  </a-entity>
  <GameObject Normal={true} />
  <RoomTest />
</a-scene>
