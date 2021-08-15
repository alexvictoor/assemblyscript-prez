import React from "react";
import { Appear, Heading, Image, Notes, Slide, Text } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="secondary"
    bgImage="assets/chess.jpg"
    bgDarken="0.5"
  >
    <Heading size={1} fit caps lineHeight={1} textColor="primary">
      bench perft
    </Heading>
    <Appear>
      <Text textColor="tertiary"  >position initiale, 5 niveaux, 4865609 nodes</Text>
    </Appear>
    <Appear>
      <Text textColor="tertiary" bold >JavaScript : 14674ms</Text>
    </Appear>
    <Appear>
      <Text textColor="tertiary" bold >AssemblyScript : 1219ms</Text>
    </Appear>
    <Notes></Notes>
  </Slide>
);
