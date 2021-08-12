import React from "react";
import { Heading, Notes, Slide, Image, Text, Code, Appear } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="secondary">
      
        <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
        0x6A&nbsp;&nbsp;&nbsp;&nbsp;i32.add
      </Text>
      <Appear >
        <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
        0x6B&nbsp;&nbsp;&nbsp;&nbsp;i32.sub
      </Text>
      </Appear>
      <Appear >
        <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
        0x6C&nbsp;&nbsp;&nbsp;&nbsp;i32.mul
      </Text>
      </Appear>
      
        <Notes>
            <p>TODO</p>
        </Notes>
    </Slide>

);