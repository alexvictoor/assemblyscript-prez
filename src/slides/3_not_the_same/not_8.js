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
          { loc: [19, 21] }
        ]}
        showLineNumbers={true}
      />



);