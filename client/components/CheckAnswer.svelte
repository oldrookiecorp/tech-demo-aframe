<script context="module">
  // import * as states from '../../client/states/UI/index.svelte';  

  if (typeof window !== "undefined") {
      AFRAME.registerComponent("check-answer", {
    init: function () {
      this.el.addEventListener("click", function (evt) {
       
          if (this.className === "env answer") {
            this.setAttribute("class", "env find");
            this.setAttribute("src", "assets/Puzzle/gltf/checkmark/scene.gltf");
            this.setAttribute("scale", "0.4 0.4 0.5");
            AFRAME.scenes[0].emit('decreaseRemainTargets');    
            } 
            else if (this.className === "env find") {
              //이미 찾은 정답일때 어떻게 할것인지 고민중
            } else {
              AFRAME.scenes[0].emit('decreaseRemainLifes');    
            }
          }
      );
    },
  });
}
</script>