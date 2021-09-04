import React from "react";
import { Heading, Image, Notes, Slide } from "spectacle";

export default (
<Slide transition={['spin']} bgColor="primary" bgImage="assets/open_arena.png" backgroundOpacity={0} >
  <Image src="assets/Emscripten_logo_full.png" width="100%" />
    <Notes>
        <p>évidemment pas grand monde n'écrit d'app directement d'app avec le lang wasm</p>
        <p>Emscripten bien pratique pour compiler pour wasm du code C (pour les jeux ou autre, rust)</p>
        <p>Je vous avoue je suis quelqu'un d'assez paresseux. Le C j'en ai fait à l'école, pas super envie d'en refaire. Le rust j'ai essayé, disons que je me suis faché avec le compilo.</p>
    </Notes>
</Slide>
);