import "./main.css";
import { Route, Routes } from "react-router";
import { Navbar } from "./navbar/Navbar";
import { Bundlers } from "../book/Bundlers. Vite VS Webpack/Bundlers";
import { Structured } from "../book/Structured. Modules VS FSD/Structured";
import { Components } from "../book/Components/Components";
import { Props } from "../book/Props/Props";

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
              <Route path="/components" element={<Components />} />
              <Route path="/props" element={<Props />} />
            </Routes>
          </div>
        </section>
      </div>
    </div>
  );
};
