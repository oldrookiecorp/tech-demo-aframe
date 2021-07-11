const renderPage = (head, body, jsFilename, data) => {
  return `
	<html class="a-fullscreen">
		<head>
		<meta charset="utf-8"/>
			<script>
				const HYDRATION_DATA = ${JSON.stringify(data)}
			</script>
			<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
			<meta aframe-injected name="mobile-web-app-capable" content="yes">
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
			<meta http-equiv="origin-trial" data-feature="WebVR (For Chrome M59+)" data-expires="2017-07-28" content="ArFv1ZeTwzkhjNE00uAE+XtiQB41fwqG/TqlFMLrepd9sforQSvQE/tgfIbUMYNuNre4QR1k4/z8xp2mV3dbhwwAAABeeyJvcmlnaW4iOiJodHRwczovL2FmcmFtZS5pbzo0NDMiLCJmZWF0dXJlIjoiV2ViVlIxLjEiLCJleHBpcnkiOjE1MDEyMTcwMDIsImlzU3ViZG9tYWluIjp0cnVlfQ==">
			<script src="https://aframe.io/releases/1.2.0/aframe.js"></script>
			<script src="https://mixedreality.mozilla.org/ammo.js/builds/ammo.wasm.js"></script>
			<script src="https://cdn.jsdelivr.net/gh/n5ro/aframe-physics-system@v4.0.1/dist/aframe-physics-system.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/aframe-state-component@7.1.0/dist/aframe-state-component.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js"></script>
			
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
