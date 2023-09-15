import { useState } from "react";
import "./TranslatorPJMStyle.css"

const TranslatorPJM = () => {

  document.title = "Portfolio | TranslatorPJM"

  const [isInfoWindow, setIsInfoWindow] = useState("On")
  const [translatorContent, setTranslatorContent] = useState("")

  const [inputSize, setInputSize] = useState(25)
  const [outputSize, setOutputSize] = useState(40)

  const [inputPlaceholder, setInputPlaceholder] = useState("Język Polski")
  const [outputPlaceholder, setOutputPlaceholder] = useState("PJM")

  const [inputType, setInputType] = useState("inputPL")
  const [outputType, setOutputType] = useState("inputPJM")

  const [isDarkMode, setIsDarkMode] = useState(false)

  const [isVisible, setIsVisible] = useState(false)


  const handleInfoWindow = () => {
    if (isInfoWindow === "On") {
      setIsInfoWindow("Off")
    }
    else if (isInfoWindow === "Off") {
      setIsInfoWindow("On")
    }


  }

  const handleChangeLanguage = () => {
    if (inputType === "inputPL" && outputType === "inputPJM") {

      setInputType("inputPJM")
      setInputPlaceholder("PJM")

      setOutputType("inputPL")
      setOutputPlaceholder("Język Polski")
    }
    else if (inputType === "inputPJM" && outputType === "inputPL") {

      setInputType("inputPL")
      setInputPlaceholder("Język Polski")

      setOutputType("inputPJM")
      setOutputPlaceholder("PJM")

    }
  }

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleVisible = () => {
    setIsVisible(!isVisible)
  }

  return (

    <div className="AppTranslator"
      style={{
        backgroundColor: `${isDarkMode ? "#393938" : "white"}`,
      }}
    >

      <nav className="navTranslator"
        style={{
          backgroundColor: `${isDarkMode ? "#393938" : "white"}`,
          color: `${isDarkMode ? "white" : "black"}`,
        }}>

        <button className="NavInfoBtn" onClick={handleInfoWindow}>Informacje</button>

        <div className="NavTitle">
          <div className="NavTitlePL">Tłumacz </div>
          <p> | </p>
          <div className="NavTitlePJM">TłumaC</div>
        </div>

        <div className="DisplayMode">

          <button className="LightMode"
            onClick={handleDarkMode}
            style={{
              color: `${isDarkMode ? "black" : "orange"}`
            }}>
            &#9728;
          </button>

          <button className="DarkMode"
            onClick={handleDarkMode}
            style={{
              color: `${isDarkMode ? "blue" : "black"}`
            }}
          >
            &#9789;
          </button>

        </div>

      </nav>

      <div className={`WindowInfo${isInfoWindow}`} >
        <div className="WindowInfoBlur" onClick={handleInfoWindow}></div>
        <div className="WindowInfoContainer"
          style={{
            backgroundColor: `${isDarkMode ? "#393938" : "white"}`,
            color: `${isDarkMode ? "white" : "black"}`,
            border: `${isDarkMode ? "0.2rem solid white" : "0.2rem solid black"}`
          }}
        >

          <div className="InfoContentOne">
            <p>Program nie służy do tłumaczenia całch zdań oraz słów.</p>
            <p>Jest to narzędzie do nauki daktylografii w PJM.</p>
          </div>

          <div className="InfoContentTwo">
            <p>Sposób wprowadzania dwuznaków:</p>
            <p>[SHIFT + h] H → ch</p>
            <p>[SHIFT + c] C → cz</p>
            <p>[SHIFT + r] R → rz</p>
            <p>[SHIFT + s] S → sz</p>
          </div>

          <div className="InfoContentThree">
            <p>Sposób wprowadzania reszty liter i znaków nie odbiega od powszechnie przyjętych norm.</p>
          </div>

          <button className="WindowInfoBtn" onClick={handleInfoWindow}>Rozumiem</button>
        </div>
      </div>

      <main
        style={{
          backgroundColor: `${isDarkMode ? "#393938" : "white"}`,
          color: `${isDarkMode ? "white" : "black"}`,
        }}
      >

        <div className="LeftSection">

          <input
            className="LeftSlide"
            type="range"
            min="2"
            max="150"
            value={inputSize}
            onChange={e => setInputSize(e.target.value)}
          />

          <textarea
            className={inputType}
            type="text"
            value={translatorContent}
            onChange={e => setTranslatorContent(e.target.value)}
            spellCheck={false}
            placeholder={inputPlaceholder}
            style={{
              fontSize: `${inputSize}px`,
              color: `${isVisible ? "transparent" : `${isDarkMode ? "white" : "black"}`}`
            }}>
          </textarea>

          <div className="LernSection">
            <input type="checkbox" onChange={handleVisible} />
            <div>Tryb Nauki <i>(Ukryj wprowadzany tekst)</i></div>
          </div>

        </div>

        <div className="CenterSection">
          <button
            className="ChangeLanguageBtn"
            onClick={handleChangeLanguage}
            style={{
              backgroundColor: `${isDarkMode ? "#393938" : "white"}`,
              color: `${isDarkMode ? "white" : "black"}`,
            }}
          >

            <div className="ArrowsBtn">→</div>
            <div className="ArrowsBtn">←</div>

          </button>
        </div>

        <div className="RightSection">

          <input
            className="RightSlide"
            type="range"
            min="2"
            max="150"
            value={outputSize}
            onChange={e => setOutputSize(e.target.value)}
          />

          <textarea
            readOnly={true}
            className={outputType}
            type="text"
            value={translatorContent}
            spellCheck={false}
            placeholder={outputPlaceholder}
            style={{
              fontSize: `${outputSize}px`,
            }}>

          </textarea>

        </div>

      </main>
    </div>
  );
}

export default TranslatorPJM;