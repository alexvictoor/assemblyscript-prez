import React from "react";
import { Heading, Slide, Text, Notes, List, ListItem, Layout, Fill, Fit, Image } from "spectacle";

export default (
    <Slide transition={['slide']} bgImage="assets/comet_roof_top.webp" bgDarken="0.8" >
     <Layout>
         <Fill>
             <Image src="assets/cosmos.png" />
             
         </Fill>
         <Fill>
            <Heading>MYSELF</Heading>
           
            <Text textAlign="left" margin="30px" textColor="primary">Alexandre Victoor</Text>
            <Text textAlign="left" margin="30px" textColor="primary">@Alex_Victoor</Text>
            <Text textAlign="left" margin="30px" textColor="primary">github.com/alexvictoor</Text>
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
