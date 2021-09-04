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
      <h4>spec on y trouve un certain nombre d'instructions, des types primitifs comme des nombres entiers sur 32b et 64 bits. par contre ça reste super simple, orienté perf et ajd pas de gc</h4>
      
    </Notes>
  </Slide>
);
