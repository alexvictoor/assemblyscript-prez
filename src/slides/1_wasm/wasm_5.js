import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";


const code = `local.get $x
local.get $y
i32.add

(i32.add (local.get $x) (local.get $y))`;

export default (

  <CodeSlide
        bgColor="secondary"
        transition={['fade']}
        lang="json"
        code={code}
        fit
        ranges={[
          { loc: [0, 1] },
          { loc: [0, 2] },
          { loc: [0, 3] },
          { loc: [4, 5] },
        ]}
        showLineNumbers={false}
      />



);