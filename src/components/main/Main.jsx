import "./main.css";
import { Route, Routes } from "react-router";
import { allTheThemes } from "../book/allTheThemes";
import { Navbar } from "./navbar/Navbar";
import { Header } from "../header/Header";
import { useRef, useState } from "react";

export const Main = () => {
  const [video, setVideo] = useState("/fon1.mp4");
  const [loading, setLoading] = useState(false);

  const videoRef = useRef(null);

  const changeVideo = (src) => {
    if (src === video) return;
    setLoading(true);
    setVideo(src);
  };

  return (
    <>
      <video
        ref={videoRef}
        src={video}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        onCanPlayThrough={() => setLoading(false)}
      ></video>
      {loading && (
        <div className="video-loader">
          <div className="spinner-wrapper">
            <div className="spinner"></div>
          </div>
        </div>
      )}

      <Header setVideo={changeVideo} />
      <div className="main">
        <Navbar />
        <div className="main__container">
          <section className="main__section">
            <h1 className="main__title">React book</h1>
            <div className="main__text">
              <Routes>
                {allTheThemes.map((item) => (
                  <Route
                    key={item.pathTo}
                    path={item.pathTo}
                    element={item.element}
                  />
                ))}
              </Routes>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
