<script>
  // 박스의 사이즈 
  export let size = 4;
  // 박스의 색
  export let color = "#7BC8A4";
</script>

<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position={`0 -${size / 2} 0`}
  rotation="-90 0 0"
  width={size}
  height={size}
  {color}
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position={`0 ${size / 2} 0`}
  rotation="90 0 0"
  width={size}
  height={size}
  {color}
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position={`0 0 -${size / 2}`}
  rotation="0 0 0"
  width={size}
  height={size}
  {color}
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position={`-${size / 2} 0 0`}
  rotation="0 90 0"
  width={size}
  height={size}
  {color}
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position={`${size / 2} 0 0`}
  rotation="0 -90 0"
  width={size}
  height={size}
  {color}
  shadow
/>
<a-plane
  ammo-body="type:static"
  ammo-shape="type:box"
  position={`0 0 ${size / 2}`}
  rotation="-180 0 0"
  width={size}
  height={size}
  {color}
  shadow
/>
