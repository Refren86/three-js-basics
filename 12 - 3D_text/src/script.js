import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Axes helper
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper )

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load('/textures/matcaps/9.jpeg')

matcapTexture.colorSpace = THREE.SRGBColorSpace

/**
 * Font
 */
const fontLoader = new FontLoader();
fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
  const textGeometry = new TextGeometry("Denys Shvaiber", {
    font,
    size: 0.5,
    height: 0.2,
    curveSegments: 4,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 4,
  });

	// textGeometry.computeBoundingBox()
	// textGeometry.translate(
	// 	-(textGeometry.boundingBox.max.x - 0.02) * 0.5, // move to left in half of the full width
	// 	-(textGeometry.boundingBox.max.y - 0.02) * 0.5, // move to bottom in half of the full height
	// 	-(textGeometry.boundingBox.max.z - 0.03) * 0.5, // move to the back in half of the full depth
	// )

	textGeometry.center()

  const material = new THREE.MeshMatcapMaterial();
	material.matcap = matcapTexture;

  const textMesh = new THREE.Mesh(textGeometry, material);
  scene.add(textMesh);

	const octahedronGeometry = new THREE.OctahedronGeometry(0.4, 0)
	const tetrahedronGeometry = new THREE.TetrahedronGeometry(0.4, 0)

	for (let i = 0; i < 50; i++) {
		const octahedronMesh = new THREE.Mesh(octahedronGeometry, material);
		const tetrahedronMesh = new THREE.Mesh(tetrahedronGeometry, material);

		octahedronMesh.position.x = (Math.random() - 0.5) * 10;
		octahedronMesh.position.y = (Math.random() - 0.5) * 10;
		octahedronMesh.position.z = (Math.random() - 0.5) * 10;

		tetrahedronMesh.position.x = (Math.random() - 0.5) * 10;
		tetrahedronMesh.position.y = (Math.random() - 0.5) * 10;
		tetrahedronMesh.position.z = (Math.random() - 0.5) * 10;

		octahedronMesh.rotation.x = Math.random() * Math.PI;
		octahedronMesh.rotation.y = Math.random() * Math.PI;

		tetrahedronMesh.rotation.x = Math.random() * Math.PI;
		tetrahedronMesh.rotation.y = Math.random() * Math.PI;

		const scale = Math.random();
		octahedronMesh.scale.set(scale, scale, scale) // proportional scaling
		tetrahedronMesh.scale.set(scale, scale, scale) // proportional scaling

		scene.add(octahedronMesh)
		scene.add(tetrahedronMesh)
	}
});

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = -3;
camera.position.y = 2;
camera.position.z = 4;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const tick = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
