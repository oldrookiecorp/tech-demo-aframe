<script context="module">
  import { default as UIAssets, Assets } from "../assets/Room.svelte";
</script>
<script src="https://unpkg.com/aframe-csg-meshs/index.js"></script> 

  <UIAssets />
    
    <a-sky src={Assets.sky}/>
     <!-- 벽 -->
     <!-- front -->
     <a-box
     shadow="cast: true;"
     position="0 -3.5 0"
     width="20"
     height="3"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   id="glass"
   material="transparent: true; opacity: 0.1"
   shadow="cast: true;"
   position="0 1.5 0"
   width="20"
   height="7"
   src={Assets.wall}
   ammo-body="type:static"
  ammo-shape="type:box"
 ></a-box>
   <!-- right -->
   <a-box
   shadow="cast: true;"
     position="10 0 15"
     rotation="0 90 0"
     width="10"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   shadow="cast: true;"
     position="10 0 2.5"
     rotation="0 90 0"
     width="5"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>

   <a-box
   shadow="cast: true;"
     position="-10 0 10"
     rotation="0 90 0"
     width="20"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   

   <a-box
   shadow="cast: true; "
     position="-3 0 20"
     width="13"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   material="transparent: true; opacity: 0.1"

    shadow="cast: true; "
     position="7 0 20"
     width="7"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>

   
   <!-- 천장 & 바닥 -->
   <a-box
     shadow="cast: true; "
     position="0 5 10"
     color="rgb(179, 179, 179)"
     rotation="90 0 0"
     width="20"
     height="20"
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   shadow="cast: true;"
     position="0 -5 10"
     rotation="90 0 0"
     width="20"
     height="20"
     src={Assets.floor}
     ammo-body="type:static"
    ammo-shape="type:plain"
     depth="0.5"
   ></a-box>

   <!-- 벽 -->
   <!-- 앞 -->
   <a-box
    shadow="cast: true;"
     position="20 0 0"
     width="20"
     height="10"
     src={Assets.wall}
     material="transparent: true; opacity: 0.1"
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <!-- right -->

   <a-box
     shadow="cast: true; "
     position="30 0 15"
     rotation="0 90 0"
     width="10"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   shadow="cast: true; "
     
     position="30 0 2.5"
     rotation="0 90 0"
     width="5"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>

   <!-- 왼 -->
   <a-box
     shadow="cast: true; "
     position="10 0 15"
     rotation="0 90 0"
     width="10"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   shadow="cast: true; "
     
     position="10 0 2.5"
     rotation="0 90 0"
     width="5"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <!-- 뒤 -->
   <!-- 창문 -->
   <a-box
   shadow="cast: true; "
   material="transparent: true; opacity: 0.1"
     position="20 0 20"
     width="20"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   
   <!-- 천장 & 바닥 -->
   <a-box
     shadow="cast: true;"
     position="20 5 10"
     color="rgb(179, 179, 179)"
     rotation="90 0 0"
     width="20"
     height="20"
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   shadow="cast: true; "
     
     position="20 -5 10"
     rotation="90 0 0"
     width="20"
     height="20"
     src={Assets.floor}
     ammo-body="type:static"
     ammo-shape="type:plain"
     depth="0.5"
   ></a-box>

   <!-- 3번째방 -->
   <!-- 벽 -->
   <!-- 앞 -->
   <a-box
     shadow="cast: true;"
     position="40 -3.5 0"
     width="20"
     height="3"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   id="glass"
   material="transparent: true; opacity: 0.1"
   shadow="cast: true;"
   position="40 1.5 0"
   width="20"
   height="7"
   src={Assets.wall}
   ammo-body="type:static"
  ammo-shape="type:box"
 ></a-box>
   <!-- right -->

   <a-box
   shadow="cast: true; "
     
     position="50 0 10"
     rotation="0 90 0"
     width="20"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>

   <!-- 왼 -->
   <a-box
   shadow="cast: true; "
     
     position="30 0 15"
     rotation="0 90 0"
     width="10"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   shadow="cast: true; "
     
     position="30 0 2.5"
     rotation="0 90 0"
     width="5"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <!-- 뒤 -->
   <a-box
   shadow="cast: true; "
   material="transparent: true; opacity: 0.1"
     position="47 0 20"
     width="7"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
    shadow="cast: true; "
     position="37 0 20"
     width="13"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   
   <!-- 천장 & 바닥 -->
   <a-box
   shadow="cast: true; "
     
     position="40 5 10"
     color="rgb(179, 179, 179)"
     rotation="90 0 0"
     width="20"
     height="20"
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <a-box
   shadow="cast: true; "
     
     position="40 -5 10"
     rotation="90 0 0"
     width="20"
     height="20"
     src={Assets.floor}
     ammo-body="type:static"
    ammo-shape="type:box"
     depth="0.5"
   ></a-box>

     