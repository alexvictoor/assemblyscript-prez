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


// Côté JS
const wasm = 
  await WebAssembly.instantiateStreaming(
    fetch("untouched.wasm"), 
    {
      env: {
       abort() {},
      },
    }
  );

const { add } = wasm.instance.exports;
console.log(add(2, 2));



export function hello(name: string): string {
  return \`Hello \${name}!\`;
}

// Côté JS
import { instantiate } from "@assemblyscript/loader";

const wasm = await instantiate(
  fetch("untouched.wasm")
);

const { 
  hello, 
  __newString, 
  __getString 
} = wasm.exports;

const param = __newString("Paris");
const result = hello(param);
console.log(__getString(result));

`;

export default (

  <CodeSlide
        bgColor="secondary"
        transition={['fade']}
        lang="js"
        code={code}
        fit
        ranges={[
          { loc: [0, 3] },
          { loc: [4, 8] },
          { loc: [15, 17] },
          { loc: [20, 23] },
          { loc: [24, 26] },
          { loc: [27, 30] },
          { loc: [31, 36] },
          { loc: [37, 41] },
        ]}
        showLineNumbers={true}
      />



);