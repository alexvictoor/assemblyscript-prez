import React from "react";
import { Heading, Notes, Slide, Text } from "spectacle";

export default (
    <Slide transition={['slide']} bgImage="assets/gil_tene.jpg" bgDarken="0.6" >
      <Heading size={3} bold lineHeight={1} textColor="primary">
        HdrHistogram
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" >
        @giltene
      </Text>
     
      <Text margin="10px 0 0" textColor="tertiary" >
        https://github.com/HdrHistogram
      </Text>
     
     <Notes>
        <p>comet typescript en mob</p>
        <p>on en parle après au pot si vous êtes curieux</p>
        
    </Notes>
    </Slide>
);
