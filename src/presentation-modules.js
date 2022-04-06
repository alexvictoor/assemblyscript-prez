// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';


// Import theme
import createTheme from 'spectacle/lib/themes/default';





// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#01273b',
    tertiary: '#40c0f0',
    quartenary: '#979797'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);



const slidesImports = [
  import("./slides/0_intro/intro_1"),
  import("./slides/0_intro/intro_2"),

  import("./slides/1_wasm/wasm_1"),
  import("./slides/1_wasm/wasm_2"),
  import("./slides/1_wasm/wasm_3"),
  import("./slides/1_wasm/wasm_3b"),
  import("./slides/1_wasm/wasm_4"),
  import("./slides/1_wasm/wasm_4b"),
  import("./slides/1_wasm/wasm_4c"),
  import("./slides/1_wasm/wasm_5"),
  import("./slides/1_wasm/wasm_5b"),
  import("./slides/1_wasm/wasm_5c"),
  import("./slides/1_wasm/wasm_6"),
  
  import("./slides/2_getting_started/start_1"),
  import("./slides/2_getting_started/start_2"),
  import("./slides/2_getting_started/start_3"),

  import("./slides/3_not_the_same/not_1"),
  import("./slides/3_not_the_same/not_2"),
  import("./slides/3_not_the_same/not_3"),
  import("./slides/3_not_the_same/not_4"),
  import("./slides/3_not_the_same/not_5"),
  import("./slides/3_not_the_same/not_6"),
  import("./slides/3_not_the_same/not_7"),
  import("./slides/3_not_the_same/not_8"),


  import("./slides/4_perf/perf_1"),
  import("./slides/4_perf/perf_2"),
  import("./slides/4_perf/perf_3"),
  import("./slides/4_perf/perf_4"),
  import("./slides/4_perf/perf_5"),
  import("./slides/4_perf/perf_5b"),
  import("./slides/4_perf/perf_6"),
  import("./slides/4_perf/perf_6b"),
  import("./slides/4_perf/perf_7"),

  import("./slides/5_end/conclusion"),
];

const codeSamples = {

}

localStorage.clear();

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.startTicker = this.startTicker.bind(this);
    this.stopTicker = this.stopTicker.bind(this);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
      
    });
  }

  startTicker() {
    if (!this.ticker) {
      this.ticker = setInterval(() => {
        const now = new Date();
        console.log("tick tick");
        this.setState({tick: now});
      }, 300);
    }
  }

  stopTicker() {
    if (this.ticker) {
      clearInterval(this.ticker);
      this.ticker = undefined;
    }
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => {

            if (codeSamples[index]) {
              return React.cloneElement(slide, {key: index, code: codeSamples[index](), onActive: this.startTicker});
            }
            
            return React.cloneElement(slide, {key: index, onActive: this.stopTicker });
          })
        }
      </Deck>
    );
  }
}
