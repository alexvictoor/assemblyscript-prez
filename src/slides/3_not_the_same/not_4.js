import React from "react";
import { Heading, Text, Notes, Slide, Quote, BlockQuote } from "spectacle";

export default (
  <Slide transition={["zoom"]} bgColor="secondary" backgroundOpacity={0}>
    <BlockQuote>
      <Quote textSize={52}>AssemblyScript n’est pas un langage dynamique</Quote>
    </BlockQuote>

    <Notes></Notes>
  </Slide>
);
