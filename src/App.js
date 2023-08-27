import React, { useEffect, useState } from 'react';
import './App.css';


// import { register } from 'swiper/element/bundle';
// register();


function App() {


  const github = () => {
    window.open("https://github.com/FastRabbitON", '_blank').focus();
  }

  const mail = () => {
    window.location = "mailto:fastrabbiton@gmail.com";
  }

  const Kraft = () => {
    window.open("https://meblekraft.com.pl", '_blank').focus();
  }

  const Board = () => {
    window.open("https://mynoteboard.pl", '_blank').focus();
  }

  const Translator = () => {
    window.open("https://github.com/FastRabbitON/TranslatorPJM", '_blank').focus();
  }

  const Visual = () => {
    window.open("https://github.com/FastRabbitON/VisualResolutionTest", '_blank').focus();
  }

  const Weather = () => {
    window.open("  https://github.com/FastRabbitON/WeatherApp", '_blank').focus();
  }


  const Pace = () => {
    window.open("  https://github.com/FastRabbitON/PaceDetectionTest", '_blank').focus();
  }


  const AnchorAbout = () => {
    window.location = `#AboutMe`
  }

  const AnchorProjects = () => {
    window.location = `#Projects`
  }

  const AnchorContact = () => {
    window.location = `#Contact`
  }

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);

      console.log(window.scrollY)
    };



    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  return (

    <div className="AppContainer">

      <div id="AboutMe"></div>
      <div id="Projects"></div>
      <div id="Contact"></div>


      <div className="NavBarContainer"
        style={{
          backgroundColor: `${scrollPercentage > 1 ? "rgba(19, 16, 21)" : "rgba(0, 0, 0, 0)"}`

        }}>


        <div className="LoadingBarContainer">
          <div className="LoadingBar"
            style={{ width: `${Math.max(scrollPercentage, 5)}%`, height: "7px" }}>

          </div>
        </div>



        <div className="Buttons">
          <button id="nav-button-about" onClick={() => AnchorAbout()}>About Me</button>
          <button id="nav-button-projects" onClick={() => AnchorProjects()}>Projects</button>
          <button id="nav-button-contact" onClick={() => AnchorContact()}>Contact</button>
        </div>



      </div>

      <div className="BilbordContainer"></div>


      <div className="AboutMeContainer">

        <div className="AboutMeEmpty"></div>

        <div className="AboutMeContent">

          <div className="AboutMeSectionOne">
            <div className='MainText' onClick={() => github()}>
              FastRabbit ON
            </div>

            <div className="PhotoContainer">
              <img className="PhotoCV" src={require("./Asety/ZdjęcieCV.png")} />
              <div className="PhotoTitle">Kacper Kwiek</div>
            </div>
          </div>


          <div className="AboutMeSectionTwo">

            <div className="SkillsContainer">

              <div className="SkillsFirstSquare">
                <div className="SkillsSecondSquare">
                  <div className="SkillsThirdSquare">
                    <div className="SkillsRateContainer">

                      <div className="AboutSkill">
                        <div className="LabelSkill">HTML</div>
                        <div className="RateSkill">
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                        </div>
                      </div>

                      <div className="AboutSkill">
                        <div className="LabelSkill">CSS</div>
                        <div className="RateSkill">
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="HalfDotL"></div>
                          <div className="HalfDotR"></div>
                        </div>
                      </div>

                      <div className="AboutSkill">
                        <div className="LabelSkill">JavaScript</div>
                        <div className="RateSkill">
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="EmptyDot"></div>
                        </div>
                      </div>

                      <div className="AboutSkill">
                        <div className="LabelSkill">React</div>
                        <div className="RateSkill">
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="HalfDotL"></div>
                          <div className="HalfDotR"></div>
                          <div className="EmptyDot"></div>
                        </div>
                      </div>

                      <div className="AboutSkill">
                        <div className="LabelSkill">Python</div>
                        <div className="RateSkill">
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="HalfDotL"></div>
                          <div className="HalfDotR"></div>
                          <div className="EmptyDot"></div>
                          <div className="EmptyDot"></div>
                        </div>
                      </div>

                      <div className="AboutSkill">
                        <div className="LabelSkill">MATLAB</div>
                        <div className="RateSkill">
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="HalfDotL"></div>
                          <div className="HalfDotR"></div>
                          <div className="EmptyDot"></div>
                        </div>
                      </div>

                      <div className="AboutSkill">
                        <div className="LabelSkill">AutoCAD</div>
                        <div className="RateSkill">
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                        </div>
                      </div>

                      <div className="AboutSkill">
                        <div className="LabelSkill">SoundPLAN</div>
                        <div className="RateSkill">
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="HalfDotL"></div>
                          <div className="HalfDotR"></div>
                        </div>
                      </div>

                      <div className="AboutSkill">
                        <div className="LabelSkill">JASP</div>
                        <div className="RateSkill">
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="FullDot"></div>
                          <div className="HalfDotL"></div>
                          <div className="HalfDotR"></div>
                          <div className="EmptyDot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div className="LanguagesContainer">

              <div className="LanguagesFirstSquare">
                <div className="LanguagesSecondSquare">
                  <div className="LanguagesThirdSquare">

                    <div className="LanguagesContent">
                      <div className="LanguagesTitle">Polish</div>
                      <div className="LanguagesRate">
                        <div className="LanguagesRateTile">c2</div>
                        <div className="LanguagesRateBar">
                          <div className="BarOuter">
                            <div className="BarInnerPL"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="LanguagesContent">
                      <div className="LanguagesTitle">English</div>
                      <div className="LanguagesRate">
                        <div className="LanguagesRateTile">b1/b2</div>
                        <div className="LanguagesRateBar">
                          <div className="BarOuter">
                            <div className="BarInnerENG"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="LanguagesContent">
                      <div className="LanguagesTitle">PJM</div>
                      <div className="LanguagesRate">
                        <div className="LanguagesRateTile">a1</div>
                        <div className="LanguagesRateBar">
                          <div className="BarOuter">
                            <div className="BarInnerPJM"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className="EducationContainer">

              <div className="EducationFirstSquare">
                <div className="EducationSecondSquare">
                  <div className="EducationThirdSquare">

                    <div className="EducationContent">
                      <p><b>(2019 - 2022)</b></p>
                      <p>Faculty of Physics, UAM in Poznań</p>
                      <p> <b>Degree I:</b> Acoustics, specialization in hearing care and noise protection</p>
                      <p> <u>Acoustic, Hearing Care</u></p>
                    </div>

                    <div className="EducationContent">
                      <p><b>(2022 - now)</b></p>
                      <p>Faculty of Physics, UAM in Poznań</p>
                      <p><b>Degree II:</b> Acoustic</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>





      </div>



      <div className="ProjectsSection">

        <div className="ProjectContainerB" onClick={Board}>
          <div className="ProjectTitle">myNoteBoard</div>
          <div className="LeftType">
            <img src={require("./Asety/GifBoard.gif")} alt="" />
            <div className="ProjectInfo">
              <div className="ProjectDescription">
                myBoard is a fully customizable and interactive board for storing notes and widgets.
                The project is created to enjoy your own and unique organizer.
              </div>
              <div className="ProjectTech">
                <div className="Tech">HTML</div>
                <div className="Tech">CSS</div>
                <div className="Tech">JS</div>
                <div className="Tech">React</div>
                <div className="Tech">React Tooltip</div>
                <div className="Tech">React Color</div>
                <div className="Tech">Grab and move</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ProjectContainerP" onClick={Kraft}>
          <div className="ProjectTitle">Website for carpentry company</div>
          <div className="RightType">
            <img src={require("./Asety/GifKraft.gif")} alt="" />
            <div className="ProjectInfo">
              <div className="ProjectDescription">
                A website created for a company that creates custom-made furniture.
                Constant maintenance of the website and constant updating of the content.
              </div>
              <div className="ProjectTech">
                <div className="Tech">HTML</div>
                <div className="Tech">CSS</div>
                <div className="Tech">JS</div>
                <div className="Tech">React</div>
                <div className="Tech">Leaflet API</div>
                <div className="Tech">Gallery</div>
                <div className="Tech">Responsive</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ProjectContainerB" onClick={Translator}>
          <div className="ProjectTitle">Translator PJM</div>
          <div className="LeftType">
            <img src={require("./Asety/GifTranslator.gif")} alt="" />
            <div className="ProjectInfo">
              <div className="ProjectDescription">
                A dactylographic sign language translator that allows you to learn and translate individual
                letters from Polish into Polish Sign Language and vice versa.
              </div>
              <div className="ProjectTech">
                <div className="Tech">HTML</div>
                <div className="Tech">CSS</div>
                <div className="Tech">JS</div>
                <div className="Tech">Vanilla</div>
                <div className="Tech">Responsive</div>
                <div className="Tech">Dark Mode</div>

              </div>
            </div>
          </div>
        </div>

        <div className="ProjectContainerP" onClick={Weather}>
          <div className="ProjectTitle">Weather App</div>
          <div className="RightType">
            <img src={require("./Asety/GifWeather.gif")} alt="" />
            <div className="ProjectInfo">
              <div className="ProjectDescription">
                A simple weather application that retrieves information from an external OpenWeather api.
              </div>
              <div className="ProjectTech">
                <div className="Tech">HTML</div>
                <div className="Tech">CSS</div>
                <div className="Tech">JS</div>
                <div className="Tech">React</div>
                <div className="Tech">Open weather API</div>
                <div className="Tech">fetch</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ProjectContainerB" onClick={Visual}>
          <div className="ProjectTitle">Psychophysical Experiments</div>
          <div className="LeftType">
            <img src={require("./Asety/GifVisual.gif")} alt="" />
            <div className="ProjectInfo">
              <div className="ProjectDescription">
                A program that allows you to conduct various psychophysical experiments related to visual perception.
              </div>
              <div className="ProjectTech">
                <div className="Tech">HTML</div>
                <div className="Tech">CSS</div>
                <div className="Tech">JS</div>
                <div className="Tech">Data export</div>
              </div>
            </div>
          </div>
        </div>

      </div>




      <div className="SectionThreeContainer">

        <div className="SectionThreeContent">

          <div className="ContactFirstSquare"
            style={{ width: "300px", height: "150px" }}>

            <div className="ContactSecondSquare">

              <div className="ContactThirdSquare">

                <div className="ContactContainer">

                  <p onClick={() => github()}> <img src={require("./Asety/IcoGithub.png")} alt='IcoGit' /> github.com/FastRabbitON</p>
                  <p onClick={() => mail()}> <img src={require("./Asety/IcoGmail.png")} alt='IcoMail' /> fastrabbiton@gmail.com</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div >
  );




}

export default App;



