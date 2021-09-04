import React from "react";
import { Heading, Notes, Slide, Image, Text, Code, Appear } from "spectacle";

export default (
    <Slide transition={['fade']} bgColor="secondary">
      
        <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
        0x6A&nbsp;&nbsp;&nbsp;&nbsp;i32.add
      </Text>
      
        <Notes>
          <p>TODO code wasm 0x6A tout seul puis je blague dans la spec, il y aussi une version texte intelligible par des humains et c'est mignon tout plein</p>
            <p>Concrètement la spec wasm, des instructions assembleurs, ex pour additionner deux entiers</p>
            <p>spec wasm nombres entiers sur 32 64 bits</p>
        </Notes>
    </Slide>

);