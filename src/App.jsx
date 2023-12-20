import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { TextLang } from "./context/TextLang";
import "./App.css";
function App() {
  const [showButton, setShowButton] = useState(true);
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  // for Theme
  useEffect(() => {
    document.querySelector("body").setAttribute("thema", "light");
  }, []);

  // for Darkmode
  function Darkmode() {
    document.querySelector("body").setAttribute("thema", "dark");
    setShowButton(false);
  }

  // for LightMode
  function LightMode() {
    document.querySelector("body").setAttribute("thema", "light");
    setShowButton(true);
  }

  // for lang
  function change(e) {
    setLanguage(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="container">
      {/* lang select menu */}
      <div className="lang-box">
        <select className="lang" onChange={change}>
          <option value="en">en</option>
          <option value="uz">uz</option>
          <option value="ru">ru</option>
        </select>
      </div>

      {/* mode menu */}
      <div className="checkbox">
        {showButton && (
          <button onClick={Darkmode}>
            <BsFillMoonStarsFill className="Moon" />
          </button>
        )}
        {!showButton && (
          <button onClick={LightMode}>
            <IoMdSunny className="sun" />
          </button>
        )}
      </div>
      
      <TextLang.Provider value={{ language, setLanguage }}>
        <Header> </Header>
        <Hero></Hero>
      </TextLang.Provider>
    </div>
  );
}

export default App;
