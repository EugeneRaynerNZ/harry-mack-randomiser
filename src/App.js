import React from "react";
import "./assets/reset.css";
import "./assets/style.css";
import Speed from "./components/Speed";
import Categories from "./components/Categories.js";
import Words from "./data";

import { Container, Row, Col } from "reactstrap";

const renderWord = (words) => { 
  return words.map(word => word.text)
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "word",
      usedWords: [],
      wpm: 120
    };
  }

   
  // When start is click, set interval of words to WPM value (Words per minute, similar to BPM)
  handleRunStart = () => {
    var interval = (60 / this.state.wpm) * 1000;
    var ranTimes = 0;
    var myTimeout = setInterval(function() {
        console.log('test' + ranTimes);
        ranTimes++;
        if (ranTimes >= this.state.wpm) {
            clearInterval(myTimeout);
        }
    }, interval);
  }

  

  updateWord = () => {
    
    let arr = renderWord(Words)
    let usedWord = arr[Math.floor(Math.random() * arr.length)]
    this.setState((state) => {

      return {
        usedWords: state.usedWords.concat(usedWord),
        word: usedWord
      }
      
    })

    console.log('used words: ' + this.state.usedWords)
  }

  render() {

    return (
      <div className="App">
        <Container>
          <header>
            <h1>Harry Mack</h1>
            <p>Random Word Generator</p>
          </header>
          <main>
            <Row>
              <Col sm="8">
                <Row className="h-100">
                  <Col sm="12">
                    <div className="wordBox">
                      <p className="word">{this.state.word}</p>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col sm="4">
                <Row>
                  <Col sm="12">
                    <button
                      className="startButton mt-5 mt-sm-0"
                      onClick={this.updateWord} >
                      Start
                    </button>
                  </Col>
                  <Col sm="12">
                    <div className="preferences">
                      <h3>Preferences</h3>
                      <div className="preferences--container">
                        <Speed />
                        <Categories name="name"/>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </main>
        </Container>
      </div>
    );
  }
}

export default App;
