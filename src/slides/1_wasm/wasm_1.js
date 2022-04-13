import React from "react";
import { Appear, Heading, Notes, Slide, Text } from "spectacle";

export default (
  <Slide transition={["fade"]} bgColor="secondary">
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
      <h4>langage une sorte d'assembleur</h4>
      <h4>machine virtuelle hyper simple - le but c'est d'être efficace, il faut que ça démarre très vite</h4>
      <h4> 
        spec à vocation à évoluer plus tard, c'est un MVP
        spec on y trouve un certain nombre d'instructions, 
        des types primitifs comme des nombres entiers sur 32b et 64 bits. 
        par contre ça reste super simple, orienté perf et ajd pas de gc
        il y pas mal de choses ajd en draft qui arriveront plus tard
        </h4>
      
    </Notes>
  </Slide>
);
