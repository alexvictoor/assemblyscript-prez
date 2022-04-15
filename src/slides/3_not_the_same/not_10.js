import React from "react";
import CodeSlide from "spectacle-code-slide/lib/CodeSlide";

const code = `// Pas de type erasure :-)

class GenericFactory<T> {

  create(): T {
    return instantiate<T>();
  }
}

const factory = new GenericFactory<...>();
type Config = Map<string, number>;
const factory = new GenericFactory<Config>();
const map = factory.create();
map.set('maClef', 42);
`;

export default (

  <CodeSlide
        bgColor="secondary"
        transition={['fade']}
        lang="js"
        code={code}
        fit
        ranges={[
          { loc: [0, 9] },
        
        ]}
        showLineNumbers={true}
      />



);