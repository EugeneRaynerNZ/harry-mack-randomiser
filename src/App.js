import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import YouTube from "react-youtube";

import "./assets/reset.css";
import "./assets/style.css";

import { calculateInterval, getVideoId } from "./utils";

import Speed from "./components/Speed";
import Category from "./components/Category";
import { getWords, categories } from "./data";

// add renderedStuff here
// remove comments
// How to write good Doc Block

function App() {
  // the original word - also used in URL of api
  const [word, setWord] = useState("word");
  // the list of words returned by API (currently returned from data.js)
  const [words, setWords] = useState([]);
  // start and stop
  const [isRunning, setIsRunning] = useState(false);
  // the current BPM
  const [bpm, setBpm] = useState(90);
  // what categories are clicked?
  const [checkedItems, setCheckedItems] = useState([categories.SPORT]);
  // video id
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=lHzYZvpbpoo&ab_channel=NEXTSOULBEATS"
  );
  const [videoPlayerEl, setVideoPlayerEl] = useState(null);

  // const [apiData, setApiData] = useState([]);

  // things that need to be more specific:
  // no repeaters
  // no repeaters - plurals
  // data randomised
  // first word needs to be randomised too

  // categories checked
  useEffect(() => {
    (async () => {
      const words = await getWords(checkedItems);
      setWords(words);
    })();
  }, [checkedItems]);

  // interval between words
  useEffect(() => {
    const interval = calculateInterval(bpm);

    const intervalRef = setInterval(() => {
      if (isRunning) {
        updateWord();
      }
    }, interval);

    return () => clearInterval(intervalRef);
  });

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  // start button plays youtube
  useEffect(() => {
    if (videoPlayerEl) {
      isRunning ? videoPlayerEl.playVideo() : videoPlayerEl.pauseVideo();
    }
  }, [isRunning, videoPlayerEl]);

  // update words with new words
  const updateWord = async () => {
    const [pickedWord, ...remainingWords] = words;

    setWord(pickedWord);
    setWords(
      remainingWords.length > 0 ? remainingWords : await getWords(checkedItems)
    );
  };

  // invoked when check box is changed
  const onCheck = (category) => {
    if (checkedItems.includes(category)) {
      setCheckedItems(checkedItems.filter((item) => item !== category));
    } else {
      setCheckedItems([...checkedItems, category]);
    }
  };

  const onInputBoxChange = (event) => {
    setVideoUrl(event.target.value);
    setIsRunning(false);
  };

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const onVideoReady = (event) => {
    // access to player in all event handlers via event.target
    setVideoPlayerEl(event.target);
  };

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
                    <input
                      type="text"
                      className="mb-2"
                      onChange={onInputBoxChange}
                    />
                    <YouTube
                      videoId={getVideoId(videoUrl)}
                      opts={opts}
                      onReady={onVideoReady}
                    />
                  </div>
                </Col>
                <Col sm="12">
                  <div className="preferences">
                    <h3>Preferences</h3>
                    <div className="preferences--container">
                      <Speed bpm={bpm} setBpm={setBpm} />
                      <div className="categories">
                        <h3>Categories</h3>
                        <ul>
                          <Category
                            name="Sports"
                            onCheck={() => onCheck(categories.SPORT)}
                            checked={checkedItems.includes(categories.SPORT)}
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
            <Col></Col>
          </Row>
        </main>
      </Container>
    </div>
  );
}

export default App;
