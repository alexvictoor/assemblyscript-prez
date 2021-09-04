import React from "react";
import { Heading, Slide, Text, Notes } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={3} bold lineHeight={1} textColor="primary">
              Découverte d'AssemblyScript
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit >
              TypeScript sous stéroïdes ?
          </Text>
          <Notes>
              <p>qui a déjà joué avec wasm ?</p>
              <p>qui a déjà joué avec assemblyscript ?</p>
              <p>je ne vais pas totu abordé, sujet très vaste, n'hésitez pas à me poser des questions à la fin si vous êtes frustrés car certains sujets n'ont pas été abordés</p>
              <p>HdrHistogramsJS outils pour generer des stats de latences - perf en js pas fouf fou par rapport à d'autres langages - comment optimiser les perfs</p>  
          </Notes>
        </Slide>
);
