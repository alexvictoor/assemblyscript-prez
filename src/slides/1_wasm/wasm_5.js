import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";


const code = `// js
x + y

// wat (WebAssembly text format)
local.get $x
local.get $y
i32.add

// wat s-expression
(i32.add 
  (local.get $x) 
  (local.get $y)
)`;

export default (

  <CodeSlide
        bgColor="secondary"
        transition={['fade']}
        lang="java"
        code={code}
        fit
        ranges={[
          { loc: [0, 2] },
          { loc: [3, 4] },
          { loc: [3, 5] },
          { loc: [3, 6] },
          { loc: [3, 7] },
          { loc: [7, 13] },
        ]}
        showLineNumbers={true}
      />



);