import React from "react";
import { Appear, Heading, Image, Notes, Slide, Text } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="secondary"
    bgImage="assets/chess.jpg"
    bgDarken="0.5"
  >
    <Image src="assets/Bitboard.gif" />
    <Text textSize={20} textColor="tertiary" >source chessprogramming.org</Text>
    
    <Notes></Notes>
  </Slide>
);
