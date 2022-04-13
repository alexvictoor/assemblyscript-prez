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
        <p>temps perso HdrHistogram </p>
        <p>adaption en typescript d'une lib Java écrite par gil tene </p>
        <p>mars 2020 un peu plus de temps perso</p>
        
    </Notes>
    </Slide>
);
