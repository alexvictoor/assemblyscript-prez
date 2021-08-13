import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";

const code = `// KO
export function echo(input: string) {
  return input;
}

// OK
export function echo(input: string): string {
  return input;
}

// KO
const data: Record<string, string> = {}

// OK
const data = new Map<string, string>();

// OK
type Func = (x: string | null) => number;

// KO
type Func = (x: string | number) => number;


// Pas de type erasure :-)

class GenericFactory<T> {

  create(): T {
    return instantiate<T>();
  }
}

const factory = new GenericFactory<...>();
type Config = Map<string, number>;
const factory = new GenericFactory<Config>();
const map = factory.create();
map.set('maClef', 42);


// Surcharge d'opérateurs

class ComplexNumber {

  constructor(
    public real: f64, 
    public imaginary: f64) {}

  toString(): string {
    return 
    \`\${this.real} + i\${this.imaginary}\`;
  }

  @operator("+")
  add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real + other.real, 
      this.imaginary + other.imaginary
    );
  }
} 

const c1 = new ComplexNumber(12, 42);
const c2 = new ComplexNumber(10, 2);
const c3 = c1 + c2;
trace(c3.toString()); 
// trace: 22.0 + i44.0

`;

export default (

  <CodeSlide
        bgColor="secondary"
        transition={['fade']}
        lang="js"
        code={code}
        fit
        ranges={[
          { loc: [0, 4] },
          { loc: [5, 9] },
          { loc: [10, 12] },
          { loc: [13, 15] },
          { loc: [16, 18] },
          { loc: [19, 21] },
          { loc: [23, 24] },
          { loc: [23, 31] },
          { loc: [23, 33] },
          { loc: [33, 35] },
          { loc: [33, 37] },
          { loc: [38, 51] },
          { loc: [52, 66] },
         
        ]}
        showLineNumbers={true}
      />



);