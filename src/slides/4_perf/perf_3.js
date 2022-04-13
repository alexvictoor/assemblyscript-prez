import React from "react";
import { BlockQuote, Cite, Notes, Quote, Slide } from "spectacle";

export default (
<Slide transition={['spin']} bgColor="secondary" backgroundOpacity={0} >
<BlockQuote>
      <Quote textSize={36}>...pre-existing TypeScript code doesn't magically become faster just by compiling to WebAssembly</Quote>
      <Cite>AssemblyScript FAQ</Cite>
    </BlockQuote>
    <Notes>
    <p>Le code du banch en js et assemblyscript quasiment le même. AssemblyScript pas magique. </p>
    <p>Un autre bench existe ou là il ya du parallélisme avec l'instruction simd, du multithreading, et c'est beaucoup plus rapide </p>
    <p>Le gc</p>
    </Notes>
</Slide>
);