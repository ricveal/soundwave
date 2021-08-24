import React from "react";
import "./styles.css";

import Waveform from "./Waveform";
import TrackInfo from "./TrackInfo";

const track = {
  id: 1,
  title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
  url:
    "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
};

export default function App() {
  return (
    <div className="App">
      <Waveform url={track.url} />
      <TrackInfo track={track} />
    </div>
  );
}
