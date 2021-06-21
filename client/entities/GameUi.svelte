<script context = "module">
  </script>
<svelte:head>
    <style>
        *{
            color: white;
        }
        .uibox {
        display: flex;
        font-size: 40px;
        width: 100%;
        height: 15%;

        font-weight: 400;
        line-height: 16px;
        position: absolute;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.3);
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        }
        .textbox {
        display: flex;
        align-content: center;
        flex-direction: column;
        justify-content: center;
        }
        #text {
        position: relative;
        z-index: 9999;
        }
        #demo {
        display: flex;
        align-content: center;
        flex-direction: column;
        justify-content: center;
        }
        #life {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        width: 10%;
        height: 40%;
        }
        #life > img {
        display: block !important;
        height: 100%;
        margin-right: 5px;
        }
      </style>
      
</svelte:head>
<script>
    export let scoreText;

      </script>
<a-camera 
    position="20 1.5 15" 
    >
    <a-text id="text" value={scoreText} position="-0.2 1.5 -2" color="black"></a-text>
    <a-text id="timer" value={"TIMER"} position="-2.85 1.5 -2" color="black" scale="0.8 0.8 0.8"></a-text>
    <a-cursor color="red"></a-cursor>
</a-camera>

<!-- <div aframe-injected class="uibox">
    <div class="textbox">
    </div>
    <div id="demo"></div>
    <div id="life"></div>

</div> -->