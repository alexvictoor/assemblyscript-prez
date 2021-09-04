import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";

const code = `export function add(a: i32, b: i32): i32 {
  return a + b;
}

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

// besoind e code js pour bootstraper une appli JS - ça c'est indépendant d'assemblyscript
// conseil assemblyscript loader dés que l'on veut passer autre chose qu'un nombre en param comme une string, 
// oui c'est plus compliqué que ça en a l'air une string