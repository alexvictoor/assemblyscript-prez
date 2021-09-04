import React from "react";
import { Heading, Image, Link, Notes, Slide } from "spectacle";

export default (
<Slide transition={['zoom']} bgColor="primary" backgroundOpacity={0} >

<Image src="assets/vs-code.svg" width="60%" />
<Link href="https://github.dev/alexvictoor/assemblyscript-hello-world">Hello world!</Link>
    <Notes>
        <p>un projet assemblyscript ça ressemble à quoi</p>
        <p>du code typescript dans vscode - des fichiers ts</p>
        <p>la conf qui va bien pour les spécificités AS et on remplazce tsc par asc et c'est parti</p>
        <p>ça marche plutôt pas mal - i32 alias vers number</p>
        <p>as-pect jest like</p>
    </Notes>
</Slide>
);