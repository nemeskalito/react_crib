import { useState } from "react";
import "./header.css";

const themes = [
  { name: "wheel-nautical", src: "/fon1.mp4" },
  { name: "wheel-gold", src: "/fon2.mp4" },
  { name: "wheel-synapse", src: "/fon3.mp4" },
  { name: "wheel-obsidian", src: "/fon4.mp4" },
];
export let video = "";
export const Header = ({ setVideo }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="header__wrapper">
      <header>
        <div className="header__container">
          <div className="header__line">
            <div className="header__logo">
              <img src="../../src/assets/react.svg" alt="logo" />
              <div className="wheels">
                {themes.map((item) => {
                  video = active;
                  return (
                    <div
                      onClick={() => {
                        setActive(item.name);
                        setVideo(item.src);
                      }}
                      key={item.name}
                      className={`wheel ${
                        active === item.name ? `${item.name}-active` : item.name
                      }`}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="header__theme">
              <button></button>
            </div>
            <div className="header__linkGit">
              <a href="https://github.com/nemeskalito/react_crib">
                <img src="../../src/assets/github.svg" alt="github" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
