import "./main.css";
import { Route, Routes } from "react-router";
import { allTheThemes } from "../book/allTheThemes";
import { Navbar } from "./navbar/Navbar";
import { Header } from "../header/Header";
import { useState } from "react";

export const Main = () => {
  const [video, setVideo] = useState("/fon1.mp4");
  return (
    <>
      <video
        src={video}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <Header setVideo={setVideo} />
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
