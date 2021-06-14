<a-assets>
    <a-asset-item id="desk"src="assets/Puzzle/gltf/stylized_desk/scene.gltf"/>
    <a-asset-item id="bed"src="assets/Puzzle/gltf/bed_agape/scene.gltf"/>
    <a-asset-item id="shelf"src="assets/Puzzle/gltf/shelf/scene.gltf"/>
    <a-asset-item id="starbucks"src="assets/Puzzle/gltf/starkbucks_cup/scene.gltf"/>

    <a-asset-item id="book"src="assets/Puzzle/gltf/book/scene.gltf"/>
    <a-asset-item id="modern__sofa"src="assets/Puzzle/gltf/modern__sofa/scene.gltf"/>

</a-assets>
<a-gltf-model
        shadow="cast: true; receive: true"
        src="#desk"
        class="env"
        position="38 -4.5 4.1"
        scale="0.04 0.05 0.08"
        rotation="0 -90 0"
      ></a-gltf-model>
      <!-- 침대 -->
      <a-gltf-model
      src="#bed"
        class="env"
        shadow="cast: true; receive: true"
        position="44.541 -4.5 15.448"
        scale="0.04 0.05 0.04"
        rotation="0 0 0"
      ></a-gltf-model>
      <!-- 책장 -->
      <a-gltf-model
      src="#shelf"
        class="env"
        shadow="cast: true; receive: true"
        position="31.596 -4.856 15.446"
        rotation="0 90 0"
      ></a-gltf-model>
      <!-- 정답 -->
      <a-gltf-model
        shadow="cast: true; receive: true"
        class="env answer"
        position="45 -4.5 3"
        rotation="0 -45 0"
        src="#starbucks"
      ></a-gltf-model>
      <a-gltf-model
        shadow="cast: true; receive: true"
        class="env answer"
        scale="0.04 0.05 0.04"
        position="32.156 1.19 10.908"
        rotation="0 -45 0"
        src="#book"
      ></a-gltf-model>
      <a-gltf-model
        shadow="cast: true;"
        src="#modern__sofa"
        position="20 -4 15"
        scale="6 6 6"
        rotation="0 180 0"
      ></a-gltf-model>