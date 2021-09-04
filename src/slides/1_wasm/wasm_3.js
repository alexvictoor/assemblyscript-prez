import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Image src="assets/wasm_runtime.png" width="100%" />
        <Notes>
            <p>en fait wasm ce n'est pas que pour les navigateurs</p>
            <p>alternative légère à des technos de virtualisation ou même aux containeurs docker</p>
        </Notes>
    </Slide>

);