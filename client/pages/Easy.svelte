<script context="module">
  import GameObject from "../entities/GameObject.svelte";
  import RoomTest from "../entities/RoomTest.svelte";
  import CheckAnswer from "../components/CheckAnswer.svelte";
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

        scene.enterVR();

        const copyArr = document.getElementsByClassName("env");
        const position = [
          "-3.776 -4.5 0.971",
          "-4.528 -4.856 20.005",
          // 카펫
          "-0.4 -4.502 9.69",
          // 빈백
          "7.642 -4.856 15.446",
          "0.007 1.157 19.498",
        ];
        for (let j = 0; j < position.length; j++) {
          const copyElement = copyArr[j].cloneNode();
          copyElement.setAttribute("position", position[j]);
          copyElement.setAttribute("check-answer", "");

          scene.appendChild(copyElement);
        }

        this.el.addEventListener("click", function (evt) {
          console.log("start!");
          const answerArr = document.getElementsByClassName("answer");
          const srcArr = [
            "assets/Puzzle/gltf/beanbag_Choral/beanbag_Choral.gltf",
            "assets/Puzzle/gltf/Cap_Gray_Nike/Cap_Gray_Nike.gltf",
          ];
          for (let i = 0; i < srcArr.length; i++) {
            answerArr[i].setAttribute("src", srcArr[i]);
          }
          AFRAME.scenes[0].emit("startGame");
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
<CheckAnswer />
<a-scene
  id="1"
  ui
  vr-mode-ui
  inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
>
  <UIAssets />

  <a-entity light="type: ambient;  intensity: 0.5;" position="20 0 12" />

  <a-entity
    light="type: point; castShadow: true; intensity: 0.2;"
    position="20 -2 8"
  />
  <a-entity
    light="type:  point;  intensity:0.4 castShadow: true;"
    position="44.818 1.417 12.585"
  />
  <a-entity
    light="type:  point;  intensity:0.4 castShadow: true;"
    position="4.818 1.417 12.585"
  />
  <a-entity laser-controls="hand: left" />
  <a-entity laser-controls="hand: right" />
  <a-entity
    camera
    look-controls="pointerLockEnabled: true;"
    wasd-controls
    position="20 1.5 15"
  >
    <a-entity
      cursor="fuse: true; fuseTimeout: 500"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
      material="color: #fff; shader: flat; opacity: .8"
    />
    <UIComponent />
  </a-entity>
  <GameObject />
  <RoomTest />
</a-scene>
