import React from "react";
import { Appear, Heading, Image, Notes, Slide, Text } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="secondary">
    <Heading size={1} fit lineHeight={1} textColor="primary">
      number 
    </Heading>
    <Appear >
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
        i32 u32 i64 u64...
      </Text>
    </Appear>
   
    <Notes>

    </Notes>
  </Slide>
);