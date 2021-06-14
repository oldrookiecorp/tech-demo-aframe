<script context = "module">
  import GameObject from "../entities/GameObject.svelte";
import GameUi from "../entities/GameUi.svelte";
  import Room from "../entities/Room.svelte";
  export const fileName = "Puzzle";

</script>
<svelte:head>
  <script>
     AFRAME.registerComponent("start-timer", {
        init: function () {
            this.el.addEventListener("click", function (evt) {
              let time = 299;
              let min = "";
              let sec = "";

              const x = setInterval(function () {
                min = parseInt(time / 60);
                sec = time % 60;
                document.getElementById("demo").innerHTML = min + ":" + sec;
                time--;

                if (time < 0) {
                  clearInterval(x);
                  alert("game over!");
                  window.location.reload();
                }
              }, 1000);
            });    
        }
    })
    
    let score = 0;
    let heart = 5;

      AFRAME.registerComponent("cursor-listener", {
        init: function () {                
          const life = document.getElementById("life");

          for (let i = 0; i < heart; i++) {
            console.log("shoot");
            const element = document.createElement("img");
            element.setAttribute("src", "./assets/Puzzle/environment/heart.png");
            element.setAttribute("id", "heartImg");

            life.appendChild(element);
          }
          // 환경배치
          const scene = document.querySelector("a-scene");
          const copyArr = document.getElementsByClassName("env");
          const position = [
            "-2 -4.5 4.1",
            "4.541 -4.5 15.448",
            "-8.404 -4.856 15.446",
            "5 -4.5 3",
            "-8.156 1.19 10.908",
          ];
          const scoreText = document.getElementById("text");

          for (let j = 0; j < 5; j++) {
            const copyElement = copyArr[j].cloneNode();
            copyElement.setAttribute("position", position[j]);
            copyElement.addEventListener("click", function (evt) {
              if (this.className === "env answer") {
                alert("정답입니다.");
                ++score;
                scoreText.innerText = `${score} / 2`;
                // scoreText.setAttribute("value", `${score}/2`);
                this.setAttribute("class", "env find");
                this.setAttribute("src", "assets/Puzzle/gltf/checkmark/scene.gltf");
                this.setAttribute("scale", "0.4 0.4 0.5");

                if (score === 2) {
                  alert("정답을 모두 맞추셨습니다!");
                  window.location.reload();
                }
              } else if (this.className === "env find") {
                alert("이미 찾은 정답입니다.");
              } else {
                alert("틀렸습니다.");
                --heart;
                if (heart === 0) {
                  alert("game over!");
                  window.location.reload();
                } else {
                  const heartImg = document.getElementById("heartImg");
                  life.removeChild(heartImg);
                }
              }
            });
            scene.appendChild(copyElement);
          }

          this.el.addEventListener("click", function (evt) {
            console.log("start!");
            const answerArr = document.getElementsByClassName("answer");
            const srcArr = [
              "assets/Puzzle/gltf/starbucks_grande_coffee_cup_caution_hot/scene.gltf",
              "assets/Puzzle/gltf/book_of_duban/scene.gltf",
            ];
            const scale = ["0.2 0.17 0.2", "0.6 0.5 0.4"];
            const rotation = ["0 0 0 ", "0 -145.678 0"];
            for (let i = 0; i < 2; i++) {
              answerArr[i].setAttribute("src", srcArr[i]);
              answerArr[i].setAttribute("scale", scale[i]);
              answerArr[i].setAttribute("rotation", rotation[i]);
            }
          });
        },
      });
  </script>
</svelte:head>
  <a-scene physics="driver:ammo;debug:true; " >
    
    <a-assets>
        <a-mixin id="shadow" shadow="cast: true; receive: true" />
        <img id="sky" src="assets/Puzzle/environment/sky.jpg" />

        <a-asset-item id="npc"src="assets/Puzzle/gltf/isabelle_animal_crossing/scene.gltf"/>
    </a-assets>
    <GameUi/>
    <a-sky src="#sky"></a-sky>
    <a-entity
        light="type: ambient; castShadow: true; intensity: 0.2;"
        position="20 0 12"
      ></a-entity>
      <a-entity
        light="type:  point;  intensity:  0.4;  castShadow:  true"
        position="-0.274 1.950 15.506"
      ></a-entity>
      <a-entity
        light="type:  point;  intensity:  0.4;  castShadow:  true"
        position="20 -2 8"
      ></a-entity>
      <a-light
        type="point"
        intensity=".5"
        position="50 0 12"
        castShadow="true"
      ></a-light>
    <a-camera position="20 1.5 15">
        <a-cursor color="red"></a-cursor>
    </a-camera>
    <a-gltf-model 
    src="#npc" 
    cursor-listener
    start-timer
    mixin="shadow"
    position="20 -4 5"
    scale="0.5 0.5 0.5"
    animation="property: object3D.position.y;
      to: -3; 
      dir: alternate; 
      dur: 1000; 
      loop: true"></a-gltf-model>
      <GameObject/>
    <Room/>

  </a-scene>
