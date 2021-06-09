const renderPage = (head, body, jsFilename, data) => {
  return `
	<html>
		<head>
			<script>
				const HYDRATION_DATA = ${JSON.stringify(data)}
			</script>
      <script src="https://aframe.io/releases/1.2.0/aframe.js"></script>
      <script src="https://mixedreality.mozilla.org/ammo.js/builds/ammo.wasm.js"></script>
      <script src="http://cdn.jsdelivr.net/gh/n5ro/aframe-physics-system@v4.0.1/dist/aframe-physics-system.js"></script>
			<script src="${jsFilename}" ></script>
		</head>
		<body>
			${head}
			<div id="page">${body}</div>
		</body>
	</html>
	`;
};

export default renderPage;
