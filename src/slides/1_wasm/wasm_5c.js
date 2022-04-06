import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";


const code = `(f32.sqrt
  (f32.add 
    (f32.mul 
      (local.get $x)(local.get $x)
    )
    (f32.mul 
      (local.get $y)(local.get $y)
    )
  )
)`;

export default (

  <CodeSlide
        bgColor="secondary"
        transition={['fade']}
        lang="json"
        code={code}
        fit
        ranges={[
          { loc: [0, 10] }
        ]}
        showLineNumbers={false}
      />



);