import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
/**
 * Debug
 */

const gui = new GUI({ width: 400 });

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

const doorColorTexture = textureLoader.load("./textures/door/color.jpg");
const doorAlphaTexture = textureLoader.load("./textures/door/alpha.jpg");
const doorAmbientOcclusionTexture = textureLoader.load(
  "./textures/door/ambientOcclusion.jpg"
);
const doorHeightTexture = textureLoader.load("./textures/door/height.jpg");
const doorNormalTexture = textureLoader.load("./textures/door/normal.jpg");
const doorMetalnessTexture = textureLoader.load(
  "./textures/door/metalness.jpg"
);
const doorRoughnessTexture = textureLoader.load(
  "./textures/door/roughness.jpg"
);
const matcapTexture = textureLoader.load("./textures/matcaps/8.png");
const gradientTexture = textureLoader.load("./textures/gradients/5.jpg");

// Textures used as map and matcap should be encoded in sRGB
doorColorTexture.colorSpace = THREE.SRGBColorSpace;
matcapTexture.colorSpace = THREE.SRGBColorSpace;

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

// MeshBasicMaterial
// const meshBasicMaterial = new THREE.MeshBasicMaterial({
//   map: doorColorTexture
// });
// const meshBasicMaterial = new THREE.MeshBasicMaterial();
// meshBasicMaterial.map = doorColorTexture;
// meshBasicMaterial.color = new THREE.Color("green")
// meshBasicMaterial.wireframe = true;
// meshBasicMaterial.side = THREE.DoubleSide // will show the opposite/back side of materials (FrontSide is default)

// // These two are used together!
// meshBasicMaterial.opacity = 0.5;
// meshBasicMaterial.transparent = true;

// meshBasicMaterial.transparent = true;
// meshBasicMaterial.alphaMap = doorAlphaTexture; // white will be visible and black - hidden

// MeshNormalMaterial
// const meshNormalMaterial = new THREE.MeshNormalMaterial() // very nice color!

// MeshMatcapMaterial
// const meshMatcapMaterial = new THREE.MeshMatcapMaterial();
// meshMatcapMaterial.matcap = matcapTexture;

// MeshDepthMaterial
// const meshDepthMaterial = new THREE.MeshDepthMaterial();

// MeshLambertMaterial
// const meshLambertMaterial = new THREE.MeshLambertMaterial();

// MeshPhongMaterial
// const meshPhongMaterial = new THREE.MeshPhongMaterial()
// // reflection of the light
// meshPhongMaterial.shininess = 100;
// meshPhongMaterial.specular = new THREE.Color("purple")

// // MeshToonMaterial
// const meshToonMaterial = new THREE.MeshToonMaterial();
// gradientTexture.minFilter = THREE.NearestFilter;
// gradientTexture.magFilter = THREE.NearestFilter;
// gradientTexture.generateMipmaps = false;
// meshToonMaterial.gradientMap = gradientTexture;

// MeshStandardMaterial
// const meshStandardMaterial = new THREE.MeshStandardMaterial();
// meshStandardMaterial.metalness = 1;
// meshStandardMaterial.roughness = 1;
// meshStandardMaterial.map = doorColorTexture;
// meshStandardMaterial.aoMap = doorAmbientOcclusionTexture;
// meshStandardMaterial.aoMapIntensity = 1;
// meshStandardMaterial.displacementMap = doorHeightTexture;
// meshStandardMaterial.displacementScale = 0.1
// meshStandardMaterial.metalnessMap = doorMetalnessTexture
// meshStandardMaterial.roughnessMap = doorRoughnessTexture
// meshStandardMaterial.normalMap = doorNormalTexture
// meshStandardMaterial.normalScale.set(0.5, 0.5)

// meshStandardMaterial.transparent = true;
// meshStandardMaterial.alphaMap = doorAlphaTexture

// gui.add(meshStandardMaterial, "metalness").min(0).max(1).step(0.0001);
// gui.add(meshStandardMaterial, "roughness").min(0).max(1).step(0.0001);
// gui.add(meshStandardMaterial, "displacementScale").min(0).max(1).step(0.05)

// MeshPhysicalMaterial
const meshPhysicalMaterial = new THREE.MeshPhysicalMaterial();
meshPhysicalMaterial.metalness = 0;
meshPhysicalMaterial.roughness = 0;
// meshPhysicalMaterial.map = doorColorTexture;
// meshPhysicalMaterial.aoMap = doorAmbientOcclusionTexture;
// meshPhysicalMaterial.aoMapIntensity = 1;
// meshPhysicalMaterial.displacementMap = doorHeightTexture;
// meshPhysicalMaterial.displacementScale = 0.1
// meshPhysicalMaterial.metalnessMap = doorMetalnessTexture
// meshPhysicalMaterial.roughnessMap = doorRoughnessTexture
// meshPhysicalMaterial.normalMap = doorNormalTexture
// meshPhysicalMaterial.normalScale.set(0.5, 0.5)

// meshPhysicalMaterial.transparent = true;
// meshPhysicalMaterial.alphaMap = doorAlphaTexture

gui.add(meshPhysicalMaterial, "metalness").min(0).max(1).step(0.0001);
gui.add(meshPhysicalMaterial, "roughness").min(0).max(1).step(0.0001);
// gui.add(meshPhysicalMaterial, "displacementScale").min(0).max(1).step(0.05)

// Clearcoat (like a glass on top of a material)
// meshPhysicalMaterial.clearcoat = 1;
// meshPhysicalMaterial.clearcoatRoughness = 0

// gui.add(meshPhysicalMaterial, "clearcoat").min(0).max(1).step(0.0001);
// gui.add(meshPhysicalMaterial, "clearcoatRoughness").min(0).max(1).step(0.0001);

// Sheen
// meshPhysicalMaterial.sheen = 1;
// meshPhysicalMaterial.sheenRoughness = 0.25;
// meshPhysicalMaterial.sheenColor.set(1, 1, 1);

// gui.add(meshPhysicalMaterial, "sheen").min(0).max(1).step(0.0001);
// gui.add(meshPhysicalMaterial, "sheenRoughness").min(0).max(1).step(0.0001);
// gui.addColor(meshPhysicalMaterial, "sheenColor")

// Iridescence
// meshPhysicalMaterial.iridescence = 1;
// meshPhysicalMaterial.iridescenceIOR = 1;
// meshPhysicalMaterial.iridescenceThicknessRange = [100, 800];

// gui.add(meshPhysicalMaterial, "iridescence").min(0).max(1).step(0.0001);
// gui.add(meshPhysicalMaterial, "iridescenceIOR").min(1).max(2.333).step(0.0001);
// gui.add(meshPhysicalMaterial.iridescenceThicknessRange, '0').min(1).max(1000).step(1).name('Min iridescence thickness');
// gui.add(meshPhysicalMaterial.iridescenceThicknessRange, '1').min(1).max(1000).step(1).name('Max iridescence thickness');

// Transmission
meshPhysicalMaterial.transmission = 1;
meshPhysicalMaterial.ior = 1.5; // index of refraction (https://en.wikipedia.org/wiki/List_of_refractive_indices)
meshPhysicalMaterial.thickness = 0.5;

gui.add(meshPhysicalMaterial, "transmission").min(0).max(1).step(0.0001);
gui.add(meshPhysicalMaterial, "ior").min(1).max(2.333).step(0.0001);
gui.add(meshPhysicalMaterial, "thickness").min(0).max(1).step(0.0001);

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const planeGeometry = new THREE.PlaneGeometry(2, 2, 100, 100);
const torusGeometry = new THREE.TorusGeometry(1, 0.5, 32, 32, Math.PI * 2);

const sphereMesh = new THREE.Mesh(sphereGeometry, meshPhysicalMaterial);
const planeMesh = new THREE.Mesh(planeGeometry, meshPhysicalMaterial);
const torusMesh = new THREE.Mesh(torusGeometry, meshPhysicalMaterial);

// sphereMesh.rotation.reorder("YXZ")
// planeMesh.rotation.reorder("YXZ")
// torusMesh.rotation.reorder("YXZ")

sphereMesh.position.x = -3;
torusMesh.position.x = 3;

scene.add(sphereMesh, planeMesh, torusMesh);

/**
 * Lights
 */
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff, 30);
// pointLight.position.x = 2;
// pointLight.position.y = 3;
// pointLight.position.z = 4;
// scene.add(pointLight);

/**
 * Environment mat
 */
const rgbeLoader = new RGBELoader()
rgbeLoader.load('./textures/environmentMap/2k.hdr', (environmentMap) => {
  environmentMap.mapping = THREE.EquirectangularReflectionMapping
  scene.background = environmentMap
  scene.environment = environmentMap
})

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
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 10;
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
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  sphereMesh.rotation.x = -0.15 * elapsedTime;
  sphereMesh.rotation.y = 0.1 * elapsedTime;

  planeMesh.rotation.x = -0.15 * elapsedTime;
  planeMesh.rotation.y = 0.1 * elapsedTime;

  torusMesh.rotation.x = -0.15 * elapsedTime;
  torusMesh.rotation.y = 0.1 * elapsedTime;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
