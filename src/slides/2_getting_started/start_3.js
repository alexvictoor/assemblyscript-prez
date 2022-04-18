import React from "react";
import { Image, Link, Notes, Slide } from "spectacle";

export default (
<Slide transition={['fade']} bgColor="primary" backgroundOpacity={0} >

<Image src="assets/vs-code.svg" width="60%" />
<Link href="https://github.dev/alexvictoor/assemblyscript-hello-world">Hello world!</Link>
    <Notes>
        <p>un projet assemblyscript ça ressemble à quoi</p>
        <p>du code typescript dans vscode - des fichiers ts</p>
        <p> 1 code as, 2 conf typescript, instruction wasm, 3 asc, bundle wasm, 4 chargement depuis le js, 5 toutes les erreurs ne sont pas détectées</p>
        <p>la conf qui va bien pour les spécificités AS et on remplazce tsc par asc et c'est parti</p>
        <p>ça marche plutôt pas mal - i32 alias vers number</p>
        <p>as-pect jest like</p>
    </Notes>
</Slide>
);