uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix; // responsible for positioning

attribute vec3 position; // vec3 coordinates for vertexes
attribute float aRandom; // only 1 coordinate

varying float vRandom; // varying goes to fragment shader

// called automatically
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  // modelPosition.z += sin(modelPosition.x * 10.0) * 0.1; // waves
  modelPosition.z += aRandom * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vRandom = aRandom;

  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); // returns vec4
}

// function
float loremIpsum(float a, float b)
{
  return a + b;
}

// void test()
// {
  // variables
  // int a = 1;
  // float b = 1.0;
  // float c = float(a) * b; // cannot be mixed, but we can convert the type
  // bool foo = true;

  // vec2 is used to store 2D coordinates - x and y; one value will be used for both coordinates
  // vec2 foo = vec2(1.0, 2.0);

  // changing the current values
  // foo.x = 2.0; 
  // foo.y = 1.0;

  // operations
  // foo *= 2.0; // will multiply all coordinates

  // vec3 is used to store 3D coordinates or color - xyz or rgb; rest is the same as vec2
  // vec3 foo = vec3(1.0);
  // vec3 bar = vec3(1.0, 2.0, -3.0);
  // bar.z = 3.0

  // purple color
  // vec3 purpleColor = vec3(0.0);
  // purpleColor.r = 0.5;
  // purpleColor.b = 1.0;

  // vec3 can be created from vec2
  // vec2 foo = vec2(1.0, 2.0);
  // vec3 bar = vec3(foo, 3.0); // x = 1.0; y = 2.0
  // vec3 bar = vec3(foo.x, foo.y, 3.0);

  // vec2 can also be created using vec3 values
  // vec3 foo = vec3(1.0, 2.0, 3.0);
  // vec2 bar = foo.xy; // this is called "swizzle"
  // vec2 bar = foo.xz;
  // vec2 bar = foo.yx;

  // similar to vec3 but with a w for 4th dimension and a (alpha) for opacity
  // vec4 foo = vec4(1.0, 2.0, 3.0, 4.0);
  // float bar = foo.w;
  // float bar = foo.a;

  // there are other types like mat2, mat3, mat4, sampler2D

  // float result = loremIpsum(1.0, 2.0);
// }

