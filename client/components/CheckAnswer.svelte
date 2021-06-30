<script context="module">
    import { STATES, ENUMS, HANDLERS } from "../states/UI/index.svelte";


  if (typeof window !== "undefined") {
      AFRAME.registerComponent("check-answer", {
    init: function () {
      this.el.addEventListener("click", function (evt) {
        const failTextUI = document.querySelector("#fail");
        const correctTextUI = document.querySelector("#correct");
          if (this.className === "env answer") {

            correctTextUI.setAttribute("visible",true);

            setTimeout(function(){
            correctTextUI.setAttribute("visible",false);
            },2000)

            this.setAttribute("class", "env find");
            this.setAttribute("src", "assets/Puzzle/gltf/checkmark/scene.gltf");
            this.setAttribute("scale", "0.3 0.4 0.3");

            AFRAME.scenes[0].emit('decreaseRemainTargets');    
            } else if (this.className === "env find") {
              //이미 찾은 정답일때 어떻게 할것인지 고민중
            } else {
              failTextUI.setAttribute("visible",true);

              setTimeout(function(){
                failTextUI.setAttribute("visible",false);
              },2000)

              AFRAME.scenes[0].emit('decreaseRemainLifes');    
            }
      
        }
      );
    },
  });
}
</script>