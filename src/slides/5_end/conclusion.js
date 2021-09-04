import React from "react";
import {
  Heading,
  Notes,
  Slide,
  List,
  ListItem,
  Link,
  Text,
  Image,
  Fill,
  Layout,
} from "spectacle";

export default (
  <Slide transition={["zoom"]} textFont="secondary">
    <Heading size={2} caps style={{ marginBottom: '50px' }}>
      THE END
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

    <Notes></Notes>
  </Slide>
);
