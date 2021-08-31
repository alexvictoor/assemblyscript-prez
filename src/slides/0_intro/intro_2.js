import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem, Layout, Fill, Fit, Image } from "spectacle";

export default (
    <Slide transition={['zoom']} >
     <Layout>
         <Fill>
             <Image src="assets/todo.png" />
             
         </Fill>
         <Fill>
            <Heading>MYSELF</Heading>
           
            <Text textAlign="left" margin="30px">Alexandre Victoor</Text>
            <Text textAlign="left" margin="30px">@Alex_Victoor</Text>
            <Text textAlign="left" margin="30px">github.com/alexvictoor</Text>
            <Text textAlign="left" margin="30px">&nbsp;</Text>
            <Image src="assets/LogoCometMeetings.png" margin="40px 40 px" />
         </Fill>
    </Layout>
     
     <Notes>
        <p>comet typescript en mob</p>
        <p>on en parle après au pot si vous êtes curieux</p>
        
    </Notes>
    </Slide>
);
