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
      <script>
        
      </script>
</svelte:head>

<div aframe-injected class="uibox">
    <div class="textbox">
    <p aframe-injected id="text">0 / 2</p>
    </div>
    <div id="demo"></div>
    <div id="life"></div>

</div>