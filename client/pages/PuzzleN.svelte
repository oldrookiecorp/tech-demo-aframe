<script src="https://cdn.jsdelivr.net/npm/aframe-state-component@7.1.0/dist/aframe-state-component.min.js"></script>

<script context = "module">
  import GameObject from "../entities/GameObject.svelte";
  import GameUi from "../entities/GameUi.svelte";
  import Room from "../entities/Room.svelte";
  import {gameTimer} from "../components/gameTimer";
  export const fileName = "Puzzle";
  
</script>
<svelte:head>

  <script>
    
    AFRAME.registerComponent("start-timer", {
        init: function () {
          const UISite = document.querySelector("a-camera");

          this.el.addEventListener("click", function (evt) {
            const timer = document.getElementById("timer");
            let time = 150;
            let min = "";
            let sec = "";
            const x = setInterval(function () {
              min = parseInt(time / 60);
              if(time % 60 < 10){
                sec = `0${time % 60}`;

              }else {
                sec = time % 60;
              }
              timer.setAttribute('value',`${min} : ${sec}`);
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
    
    // 상태변수
    let score = 0;
    let heart = 5;
      AFRAME.registerComponent("cursor-listener", {
        init: function () {           
          //목숨 배치
          const UISite = document.querySelector("a-camera");
          for (let i = 0; i < heart; i++) {
            const element = document.createElement("a-image");
            element.setAttribute("src", "./assets/Puzzle/environment/heart.png");
            element.setAttribute("id", "heartImg");
            element.setAttribute("scale", "0.2 0.2 0.2");
            element.setAttribute("position", `${i/4.5+1.8} 1.5 -2`);
            
            UISite.appendChild(element);
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
          for (let j = 0; j < 5; j++) {
            const copyElement = copyArr[j].cloneNode();
            copyElement.setAttribute("position", position[j]);
            copyElement.setAttribute("check-answer",'');

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
              console.log("set")
              answerArr[i].setAttribute("src", srcArr[i]);
              answerArr[i].setAttribute("scale", scale[i]);
              answerArr[i].setAttribute("rotation", rotation[i]);
            }
          });
        },
      });
      AFRAME.registerComponent("check-answer", {
        init: function () {
          const UISite = document.querySelector("a-camera");
          this.el.addEventListener("click", function (evt) {
          const scoreText = document.getElementById("text");

          if (this.className === "env answer") {
                alert("정답입니다.");
                ++score;
                scoreText.setAttribute("value", `${score}/3`);
                this.setAttribute("class", "env find");
                this.setAttribute("src", "assets/Puzzle/gltf/checkmark/scene.gltf");
                this.setAttribute("scale", "0.4 0.4 0.5");
                if (score === 3) {
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
                  UISite.removeChild(heartImg);
                }
              }
            })}
          });
  </script>
</svelte:head>
  <a-scene physics="driver:ammo;debug:true; " >
    <a-assets>
      <a-asset-item id="stand"src="assets/Puzzle/gltf/장스탠드/장스탠드.gltf"/>
    </a-assets>
    <a-entity
    light="type: ambient;intensity: 0.5;"
    position="20 0 12"
  ></a-entity>
 
  <a-entity
    light="type: point; castShadow: true; intensity: 0.2;"
    position="20 -2 8"
  ></a-entity>
  <a-entity
      light="type:  point;  intensity:0.4 castShadow: true;"
      position="50 0 12"
    />
    <GameUi scoreText={"0/3"}/>
    <GameObject/>
    <Room/>
    <a-gltf-model 
    shadow="cast: true; receive: true"
      check-answer
      class="env answer"
      src="#stand" 
      scale="1 0.6 1"
      position="8.1 -4.75 18.743"
      id="standLamp"
    />
  </a-scene>
