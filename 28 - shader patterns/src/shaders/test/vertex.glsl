varying vec2 vUv; // UV is used to place textures on the geometries

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
}