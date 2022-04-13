import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={3} bold lineHeight={1} textColor="primary">
              AssemblyScript
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit >
              TypeScript sous stéroïdes grâce à WebAssembly ?
          </Text>
          <Notes>
              <p>qui a déjà joué avec wasm ?</p>
              <p>qui a déjà joué avec assemblyscript ?</p>
              <p>AssemblyScript ? Typescript ? plus rapide ?</p>
              <p>questions à la fin</p>  
          </Notes>
        </Slide>
);
