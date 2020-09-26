import React, { useState, useEffect } from "react";
import "./assets/reset.css";
import "./assets/style.css";
import Speed from "./components/Speed";
import Categories from "./components/Categories.js";
import {getWords} from "./data";

import { Container, Row, Col } from "reactstrap";

const calculateInterval = (wpm) => {
  return (60 / wpm) * 1000 * 8;
};

function App() {
  const [word, setWord] = useState("word");
  const [words, setWords] = useState(getWords());
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(120);

  const updateWord = () => {
    const [pickedWord, ...remainingWords] = words;
    
    setWord(pickedWord);
    setWords(remainingWords.length > 0 ? remainingWords : getWords())
  };

  // invoked when check box is changed
  const isChecked = () => {
    // get all the checked categories
    // use setWords(getWords([...categories]))
  }

  useEffect(() => {
    const interval = calculateInterval(wpm);

    const intervalRef = setInterval(() => {
      if (isRunning) {
        updateWord();
      }
    }, interval);

    return () => clearInterval(intervalRef);
  });

  // When start is clicked, set interval of words to WPM value (Words per minute, similar to BPM)
  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  console.log(wpm)

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
                    <p className="word">{word}</p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col sm="4">
              <Row>
                <Col sm="12">
                  <button
                    className="startButton mt-5 mt-sm-0"
                    onClick={toggleRunning}
                  >
                    {isRunning ? "Stop" : "Start"}
                  </button>
                </Col>
                <Col sm="12">
                  <div className="preferences">
                    <h3>Preferences</h3>
                    <div className="preferences--container">
                      <Speed wpm={wpm} setWpm={setWpm}/>
                      <Categories name="name" />
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

export default App;
