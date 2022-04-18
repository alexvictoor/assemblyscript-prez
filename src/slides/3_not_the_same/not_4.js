import React from "react";
import { BlockQuote, Notes, Quote, Slide } from "spectacle";

export default (
  <Slide transition={["slide"]} bgColor="secondary" backgroundOpacity={0}>
    <BlockQuote>
      <Quote textSize={52}>AssemblyScript n’est pas un langage dynamique</Quote>
    </BlockQuote>

    <Notes></Notes>
  </Slide>
);
