import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";

const code = `(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)`;

export default (

  <CodeSlide
        bgColor="secondary"
        transition={['fade']}
        lang="js"
        code={code}
        fit
        ranges={[
          { loc: [4, 5] },
          { loc: [2, 5] },
          { loc: [1, 5] },
          { loc: [0, 7] },
        ]}
        showLineNumbers={true}
      />



);