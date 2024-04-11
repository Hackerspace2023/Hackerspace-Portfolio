import React, { useEffect, useState } from "react";
import "../../css/loading.css";

const Loading = ({ progress }) => {
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    const randomWords = [
      "creating the webpage...",
      "Initilizing the assests...",
      "Completing the webpage...",
      "Almost there...",
      "Done!",
    ];
    // const interval = setInterval(() => {
    //     const randomIndex = Math.floor(Math.random() * randomWords.length);
    //     setLoadingText(randomWords[randomIndex]);
    // }, 500);
    for (let i = 0; i < randomWords.length; i++) {
      setTimeout(() => {
        setLoadingText(randomWords[i]);
      }, i * 1000);
    }

    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="loading">
        <div className="loading-text">{loadingText}</div>
        <div className="loading-bar-section">
          <div className="loading-percentage">{progress}%</div>
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
