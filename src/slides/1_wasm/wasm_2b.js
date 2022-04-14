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
            <h4> 
        spec à vocation à évoluer plus tard, c'est un MVP
        spec on y trouve un certain nombre d'instructions, 
        des types primitifs comme des nombres entiers sur 32b et 64 bits. 
        par contre ça reste super simple, orienté perf et ajd pas de gc
        il y pas mal de choses ajd en draft qui arriveront plus tard
        </h4>
        </Notes>
    </Slide>

);