import React from "react";
import { Image, Notes, Slide } from "spectacle";

export default (
    <Slide transition={['slide']} bgColor="primary">
        <Image src="assets/wasm_js_runtime.png" width="100%" />
        <Notes>
            <p>js et wasm géré par le moteur js</p>
            <p>wasm ne communique avec le monde extérieur que via le js</p>
            <p>appels supers rapides entre js et wasm</p>
            <p>code binaire wasm interprété très vite par le moteur</p>
        </Notes>
    </Slide>

);