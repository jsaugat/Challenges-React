import { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Video from "./Video";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};
const videoKeys = Object.keys(videos); // array of keys

function App() {
  const [selected, setSelected] = useState("deer"); // default deer
  const videoSrc = videos[selected];

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <h1>Video Player</h1>
      <Menu
        handleChange={handleChange}
        selected={selected}
        videoKeys={videoKeys}
      />{" "}
      <br />
      <Video videoSrc={videoSrc} />
    </>
  );
}

export default App;
