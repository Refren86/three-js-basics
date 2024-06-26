import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// // mesh.position.x = 0.7;
// // mesh.position.y = - 0.6
// // mesh.position.z = 1

// // same as above
// mesh.position.set(0.7, - 0.6, 1)

// // mesh.scale.x = 2
// // mesh.scale.y = 0.5
// // mesh.scale.z = 0.5

// // same as above
// mesh.scale.set(2, 0.5, 0.5)

// // Default order is XYZ
// mesh.rotation.reorder("YXZ")
// mesh.rotation.y = Math.PI  / 4
// mesh.rotation.x = Math.PI / 4

// scene.add(mesh)

// console.log('Mesh before normalize :', mesh.position.length()); // distance between the center of a scene and mesh
// mesh.position.normalize(); // reduce/increase the vector length to 1 (distance between center of scene and mesh)
// console.log('Mesh after normalize :', mesh.position.length()); // distance between the center of a scene and mesh

// Group
const group = new THREE.Group();
group.position.y = 1
group.rotation.y = Math.PI / 2;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1) ,
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1) ,
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

cube2.position.x = -2;

group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1) ,
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cube3.position.x = 2;

group.add(cube3)

// Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// camera.lookAt(mesh.position)

// console.log(mesh.position.distanceTo(camera.position)); // distance between mesh and camera

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)