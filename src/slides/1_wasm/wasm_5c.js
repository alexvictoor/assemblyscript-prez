import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";


const code = `// js
sqrt(x*x + y*y)




// wat s-expression
(f32.sqrt
  (f32.add 
    (f32.mul 
      (local.get $x)(local.get $x)
    )
    (f32.mul 
      (local.get $y)(local.get $y)
    )
  )
)






`;

export default (

  <CodeSlide
        bgColor="secondary"
        transition={['fade']}
        lang="java"
        code={code}
        fit
        ranges={[
          { loc: [0, 2] },
          { loc: [5, 17] }
        ]}
        showLineNumbers={true}
      />



);