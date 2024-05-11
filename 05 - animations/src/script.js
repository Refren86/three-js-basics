import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// let time = Date.now();

// // Animations
// const tick = () => {
//   const currentTime = Date.now();
//   const delta = currentTime - time;
//   time = currentTime;
//   // update objects
//   mesh.rotation.y += 0.002 * delta;

//   // render
//   renderer.render(scene, camera);
//   requestAnimationFrame(tick);
// };

// tick();

gsap.to(mesh.position, { x: 2, duration: 1, delay: 2 })
gsap.to(mesh.position, { x: 0, duration: 1, delay: 3 })

// same as above but with Clock
// const clock = new THREE.Clock();

const tick = () => {
  // const elapsedTime = clock.getElapsedTime(); // 1.432152531523

  // // mesh.rotation.x = elapsedTime * Math.PI * 2;
  // camera.position.y = Math.sin(elapsedTime);
  // camera.position.x = Math.cos(elapsedTime);
	// camera.lookAt(mesh.position)

  // render
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();
