<script context="module">
  import { default as UIAssets, Assets } from "../assets/Room.svelte";
</script>

  <UIAssets />
    
    <a-sky src={Assets.sky}/>
     <!-- 벽 -->
     <a-box
     shadow="cast: true;"
     position="0 0 0"
     width="20"
     height="10"
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
   shadow="cast: true;"
     position="0 0 20"
     width="20"
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
   <a-box
   shadow="cast: true; "

     position="20 0 20"
     width="20"
     height="10"
     src={Assets.wall}
     ammo-body="type:static"
    ammo-shape="type:box"
   ></a-box>
   <!-- 천장 & 바닥 -->
   <a-box
     shadow="cast: true; "
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
   shadow="cast: true; "
     
     position="40 0 0"
     width="20"
     height="10"
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

     position="40 0 20"
     width="20"
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

     