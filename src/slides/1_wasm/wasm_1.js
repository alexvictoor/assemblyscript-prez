import React from "react";
import { Heading, Notes, Slide, Text, Appear, Image } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="secondary">
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      wasm
    </Heading>
    <Appear >
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        L'assembleur du WEB
      </Text>
    </Appear>

    <Notes>
      <h4>on ne peut pas parler d'assemblyscript sans parler avant de wasm</h4>
      <h4>spec d'un langage et d'une machine virtuelle</h4>
      
    </Notes>
  </Slide>
);
