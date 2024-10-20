precision mediump float;

uniform sampler2D uTexture; // sampler2D is texture type which returns vec4

// varying float vRandom; // varying comes from fragment shader (here it's single coordinate)
varying vec3 vColor;
varying vec2 vUv;
varying float vElevation;

void main()
{
  vec4 textureColor = texture2D(uTexture, vUv);
  textureColor.rgb *= vElevation * 2.0 + 0.7;
  gl_FragColor = textureColor;
}