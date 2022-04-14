import React from "react";
import { Heading, Text, Notes, Slide } from "spectacle";

export default (
<Slide transition={['zoom']} bgColor="secondary" backgroundOpacity={0} >

<Heading size={1} fit lineHeight={1} textColor="primary">
      C'est comme du TypeScript
    </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
       sauf que...
      </Text>
    <Notes>
    J'ai quand même une mauvaise nouvelle
    on va voir ensemble qu'il y a quelques limitations. Je vais ne pas être exhaustifs - certaines limitations viennent de webassembly, et ça change très vite. D'autres viennent de webassembly et ça change très vite aussi.
    </Notes>
</Slide>
);