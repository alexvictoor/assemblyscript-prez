import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";

const code = `// Java
int getBucketIndex(final long value) {
  // ...
  return leadingZeroCountBase - Long.numberOfLeadingZeros(value | subBucketMask);

  // TypeScript
  return max(
    floor(log2(value)) -
      this.subBucketHalfCountMagnitude -
      this.unitMagnitude,
    0
  );

  // AssemblyScript
  // CLS - Count Leading Zeros
  return this.leadingZeroCountBase - <i32>clz(value | this.subBucketMask);

  // Java
  return leadingZeroCountBase - Long.numberOfLeadingZeros(value | subBucketMask);

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
          { loc: [5, 12] },
          { loc: [13, 16] },
          { loc: [13, 19] },
        
        ]}
        showLineNumbers={true}
      />



);