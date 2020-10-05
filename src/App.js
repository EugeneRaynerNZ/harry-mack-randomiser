import React, { useState, useEffect } from "react";
import "./assets/reset.css";
import "./assets/style.css";
import Speed from "./components/Speed";
import Category from "./components/Category.js";
import Video from "./components/Video"
import { getWords, categories, dataApi } from "./data";


import { Container, Row, Col } from "reactstrap";

const calculateInterval = (bpm) => {
  return (60 / bpm) * 1000 * 8;
};

function App() {
  // the original word - also used in URL of api
  const [word, setWord] = useState("word");
  // the list of words returned by API (currently returned from data.js)
  const [words, setWords] = useState(getWords());
  // start and stop
  const [isRunning, setIsRunning] = useState(false);
  // the current BPM
  const [bpm, setBpm] = useState(90);
  // Words per minute (bpm / 60)
  const [wpm, setWpm] = useState(1)
  // what categories are clicked?
  const [checkedItems, setCheckedItems] = useState([]);
  // video id
  const [videoUrlTemp, setVideoUrlTemp] = useState('')
  const [videoUrl, setVideoUrl] = useState('sjJBpw5WNtU')

  // const [apiData, setApiData] = useState([]);
  
  // things that need to be more specific:
  // no repeaters
  // no repeaters - plurals
  // data randomised
  // first word needs to be randomised too

  useEffect(() => {
    async function getApiData() {
      const response = await fetch(
        `https://api.datamuse.com/words?rel_jja=${word}`
      );
      const data = await response.json();
      // const items = data;
      setWords(data.map(x => x.word));
    }

    getApiData();
  }, []);

  useEffect(() => {
    const words = getWords(checkedItems);
    setWords(words);
  }, [checkedItems]);

  useEffect(() => {
    const interval = calculateInterval(bpm);

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

  const updateWord = () => {
    const [pickedWord, ...remainingWords] = words;

    setWord(pickedWord);
    setWords(
      remainingWords.length > 0 ? remainingWords : getWords(checkedItems)
    );
  };

  // invoked when check box is changed
  const onCheck = (category) => {
    if (checkedItems.includes(category)) {
      setCheckedItems(checkedItems.filter((item) => item !== category));
    } else {
      setCheckedItems([...checkedItems, category]);
    }

    console.log(checkedItems)
  };

  const handleYoutubeVideo = (event) => {
    setVideoUrlTemp(event.target.value)
  }

  const onVideoChoose = () => {

    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = videoUrlTemp.match(regExp);
    const videoShortCode = (match&&match[7].length==11)? match[7] : false;

    setVideoUrl(videoShortCode)

    console.log(videoUrl)
  }

  return (
    <div className="App">
      <Container>
        <header>
          <h1>Harry Mack</h1>
          <p>Random Word Generator</p>
          <p>Practice freestyling here.</p>
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
                  <div className="youtubeEmbed">
                    <h3 className="mb-2">Input youtube video URL</h3>
                    <input id="videoUrl" type="text" className="mb-2" onChange={ handleYoutubeVideo }/>
                    <button className="mb-2" onClick={onVideoChoose}>Use this video</button>
                    <Video videoId={videoUrl}/>
                  </div>
                </Col>
                <Col sm="12">
                  <div className="preferences">
                    <h3>Preferences</h3>
                    <div className="preferences--container">
                      <Speed bpm={bpm} setBpm={setBpm} wpm={wpm}/>
                      <div className="categories">
                        <h3>Categories</h3>
                        <ul>
                          <Category
                            name="Sports"
                            onCheck={() => onCheck(categories.SPORTS)}
                            checked={checkedItems.includes(categories.SPORTS)}
                          />
                          <Category
                            name="Love"
                            onCheck={() => onCheck(categories.LOVE)}
                            checked={checkedItems.includes(categories.LOVE)}
                          />
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
            
            </Col>
          </Row>
        </main>
      </Container>
    </div>
  );
}

export default App;
