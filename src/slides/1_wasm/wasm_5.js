import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";


const code = `x + y


local.get $x
local.get $y
i32.add

(i32.add 
  (local.get $x) 
  (local.get $y)
)`;

export default (

  <CodeSlide
        bgColor="secondary"
        transition={['fade']}
        lang="json"
        code={code}
        fit
        ranges={[
          { loc: [0, 1] },
          { loc: [3, 4] },
          { loc: [3, 5] },
          { loc: [3, 6] },
          { loc: [7, 11] },
        ]}
        showLineNumbers={true}
      />



);