
<script>
    export let scoreText;

</script>
<a-entity laser-controls="hand: left"raycaster="lineColor: red; lineOpacity: 0.5"></a-entity>
<a-entity laser-controls="hand: right"raycaster="lineColor: red; lineOpacity: 0.5"></a-entity>
<a-camera 
    position="20 1.5 15" 
    >
    <a-text id="text" value={scoreText} position="-0.2 1.5 -2" color="black"></a-text>
    <a-text id="timer" value={"TIMER"} position="-2.85 1.5 -2" color="black" scale="0.8 0.8 0.8"></a-text>
    <a-cursor color="red"></a-cursor>
</a-camera>
