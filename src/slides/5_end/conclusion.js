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
    <Layout style={{ marginBottom: '50px' }}>
      <Fill style={{ textAlign: 'left'}} >
        <Text textSize="30" bold >WebAssembly</Text>
        <Text textSize="20"><a href="https://www.figma.com/fr/blog/webassembly-cut-figmas-load-time-by-3x/">Figma is powered by WebAssembly</a></Text>
        <Text textSize="20" ><a href="https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format">Doc Mozilla sur WAT</a></Text>
        <Text textSize="20" ><a href="https://exercism.org/tracks/wasm">Track Exercism WASM/WAT</a></Text>
        <Text textSize="30" bold >AssemblyScript</Text>
        <Text textSize="20" ><a href="https://colineberhardt.github.io/wasm-mandelbrot/#WebAssembly">Bench Mandelbrot</a></Text>
        <Text textSize="20" ><a href="https://github.com/alexvictoor/assemblyscript-hello-world">Hello world TS/AS</a></Text>
        <Text textSize="20" ><a href="https://surma.dev/things/js-to-asc/index.html">Is WebAssembly magic performance pixie dust?</a></Text>
        <Text textSize="20" ><a href="https://www.youtube.com/watch?v=u0Jgz6QVJqg&ab_channel=GoogleChromeDevelopers">AssemblyScript - HTTP 203</a></Text>
      </Fill>
      <Fill>
        <Image src="assets/assemblyscript-qrcode.svg" />
      </Fill>
    </Layout>
    <Text textColor="tertiary" bold>@Alex_Victoor</Text>
    <Notes>
      AssemblyScript c'est très sympa
      Il faut pour en profiter écrire le code différemment, un peu comme du code en C pus que du code TypeScript
      Faire attention au GC et aux allocations mémoires.


    </Notes>
  </Slide>
);
