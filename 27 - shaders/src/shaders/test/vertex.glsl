uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;

void main()
{
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

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}