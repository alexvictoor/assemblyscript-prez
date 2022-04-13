import React from "react";
import {
  Fill, Heading, Image, Layout, Notes,
  Slide, Text
} from "spectacle";

export default (
  <Slide transition={["zoom"]} textFont="secondary">
    <Heading size={2} caps style={{ marginBottom: '50px' }}>
      Merci !
    </Heading>
    <Layout>
      <Fill style={{ textAlign: 'left'}} >
         <Text textColor="tertiary">@AssemblyScript</Text>
         <Text textColor="tertiary">@MaxGraey</Text>
         <Text textColor="tertiary">@torch2424</Text>
         <Text textColor="tertiary">@_jayphelps</Text>
         <Text textColor="tertiary">@linclark</Text>
      </Fill>
      <Fill>
        <Image src="assets/assemblyscript-qrcode.svg" />
      </Fill>
    </Layout>
    
    <Notes>
      AssemblyScript c'est très sympa
      Il faut pour en profiter écrire le code différemment, un peu comme du code en C pus que du code TypeScript
      Faire attention au GC et aux allocations mémoires.


    </Notes>
  </Slide>
);
