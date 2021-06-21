export const gameTimer = () => {
  console.log("js함수 실행");
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
};
