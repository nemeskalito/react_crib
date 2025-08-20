import "./main.css";
import { Route, Routes } from "react-router";
import { allTheThemes } from "../book/allTheThemes";
import { Navbar } from "./navbar/Navbar";
import { Header } from "../header/Header";

export const Main = () => {
  return (
    <>
      <video
        src="/fon4.mp4"
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <Header />
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
