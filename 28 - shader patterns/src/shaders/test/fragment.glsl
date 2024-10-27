varying vec2 vUv; // x and y: 0.0 - 1.0

void main()
{
    //  (Pattern 3)
    // float strength = vUv.x;

    //  (Pattern 4)
    // float strength = vUv.y;

    //  (Pattern 5)
    // float strength = 1.0 - vUv.y;

    //  (Pattern 6)
    // float strength = vUv.y * 10.0;

    //  (Pattern 7) mod is same as % operator which returns remainder, 2nd parameter is a limit
    // float strength = mod(vUv.y * 10.0, 1.0);

    //  (Pattern 8)
    // float strength = mod(vUv.y * 10.0, 1.0);

    // try to avoid if conditions and ternary operators as they're bad for performance! 
    // if (strength < 0.5) {
    //     strength = 0.0;
    // } else {
    //     strength = 1.0;
    // }

    // if (strength < 0.5)
    //     strength = 0.0;
    //  else 
    //     strength = 1.0;

    // strength = strength < 0.5 ? 0.0 : 1.0;

    // how it works: accepts limit as 1st param and value as 2nd; if strength < 0.5 returns 0.0 else returns 1.0
    // strength = step(0.5, strength); // 1st param is like thickness

    // (Pattern 9)
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.7, strength);

    // (Pattern 10)
    // float strength = mod(vUv.x * 10.0, 1.0);
    // strength = step(0.7, strength);

    // (Pattern 11)
    // float strength = step(0.7, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.7, mod(vUv.y * 10.0, 1.0));

    // (Pattern 12) - We can only see X and Y intersections
    // float strength = step(0.7, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.7, mod(vUv.y * 10.0, 1.0));

    // (Pattern 13)
    // float strength = step(0.3, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.7, mod(vUv.y * 10.0, 1.0));

    // (Pattern 14)
    // float barX = step(0.3, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.7, mod(vUv.y * 10.0, 1.0));

    // they're the same
    // float barY = step(0.3, mod(vUv.y * 10.0, 1.0));
    // barY *= step(0.7, mod(vUv.x * 10.0, 1.0));
    // float barY = step(0.7, mod(vUv.x * 10.0, 1.0));
    // barY *= step(0.3, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;

    // (Pattern 15)
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));

    // float barY = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;
    
    // (Pattern 16) 
    // abs will convert negative value into positive value
    // float strength = abs(vUv.x - 0.5);

    // (Pattern 17) 
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // (Pattern 18) 
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // (Pattern 19) 
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // (Pattern 20) 
    // float strength = step(0.4, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // float square1 = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // float square2 = 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // float strength = square1 * square2;

    // (Pattern 21)
    

    // Other interesting patterns:
    // float strength = step(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}