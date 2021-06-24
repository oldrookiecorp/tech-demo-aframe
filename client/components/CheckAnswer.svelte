<script>
    if (typeof window !== "undefined") {
AFRAME.registerComponent("check-answer", {
    init: function () {
      this.el.addEventListener("click", function (evt) {
        if (this.className === "env answer") {
                alert("정답입니다.");
                this.setAttribute("class", "env find");
                this.setAttribute("src", "assets/Puzzle/gltf/checkmark/scene.gltf");
                this.setAttribute("scale", "0.4 0.4 0.5");
                AFRAME.scenes[0].emit('decreaseRemainTargets');    

                if (score === 2) {
                  alert("정답을 모두 맞추셨습니다!");
                  window.location.reload();
                }
              } else if (this.className === "env find") {
                alert("이미 찾은 정답입니다.");
                
              } else {
                alert("틀렸습니다.");
                AFRAME.scenes[0].emit('decreaseRemainLifes');    
              }
        }
      );
    },
  });
}
</script>