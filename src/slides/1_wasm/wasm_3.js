import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";

export default (
    <Slide transition={['zoom']} bgColor="primary">
        <Image src="assets/wasm_runtime.png" width="100%" />
        <Notes>
            <p>en fait wasm ce n'est pas que pour les navigateurs</p>
        </Notes>
    </Slide>

);