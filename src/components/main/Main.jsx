import "./main.css";
import { Route, Routes } from "react-router";
import { Navbar } from "./navbar/Navbar";
import { Bundlers } from "../book/Bundlers. Vite VS Webpack/Bundlers";
import { Structured } from "../book/Structured. Modules VS FSD/Structured";

export const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="main__container">
        <section className="main__section">
          <h1 className="main__title">React book</h1>
          <div className="main__text">
            <Routes>
              <Route path="/bundlers" element={<Bundlers />} />
              <Route path="/structured" element={<Structured />} />
            </Routes>
          </div>
        </section>
      </div>
    </div>
  );
};
