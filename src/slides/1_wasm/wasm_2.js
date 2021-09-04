import React from "react";
import { Heading, Notes, Slide, Image, Text } from "spectacle";

export default (
    <Slide transition={['slide']} bgColor="primary">
        <Image src="assets/js_wasm.png" width="100%" />
        <Notes>
            <p>On peut faire tourner autrechose que du js dans un browser</p>
            <p>l'idée de wasm, c'est d'avoir des applis qui se lancent/démarrent très vites et qui s'exécutent le plus rapidement possible</p>
            <p>vocation à évoluer, à peine une v1</p>
            <p>pour l'instant c'est très simple et pas mal de limitations (pas de GC, pas d'effets de bords, pas d'accès direct au DOM..., pas mals de choses en draft)</p>
        </Notes>
    </Slide>

);