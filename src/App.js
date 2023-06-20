import React, { useEffect, useState } from 'react';
import './App.css';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


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
    window.open("https://github.com/FastRabbitON/MyBoard", '_blank').focus();
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
          backgroundColor: `${scrollPercentage > 1 ? "black" : "rgba(0, 0, 0, 0)"}`

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


      <div className="SectionOneContainer">

        <div className="EmptySpaceMe"></div>

        <div className="ContentSpace">
          <div className="SecOneTop">

            <div className='MainText' onClick={() => github()}>
              FastRabbit ON
            </div>
          </div>


          <div className="SecOneBottom">

            <div className="SecOneBottomLeft">

              <div className="AboutMeFirstSquare">

                <div className="AboutMeSecondSquare">

                  <div className="AboutMeThirdSquare">

                    <div className="AboutMeContainer">
                      <div className='AboutMe'> <b>AGE: </b><div>24</div></div>
                      <div className='AboutMe'> <b>NATIONALITY: </b><div> Poland</div></div>
                      <div className='AboutMe'> <b>LANGUAGES: </b> <div>Polish, English, PJM</div></div>
                      <div className='AboutMe'> <b>EDUCATION: </b><div> Bachelor of Acoustics: Noise Protection and Hearing Care; Master of Acoustics (in progress)</div> </div>
                    </div>

                  </div>

                </div>

              </div>


            </div>

            <div className="SecOneBottomRight">

              <div className="SecOneBottomRight">

                <div className="SkillsFirstSquare">

                  <div className="SkillsSecondSquare">

                    <div className="SkillsThirdSquare">

                      <div className="SkillsContainer">

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



            </div>

          </div>

        </div>





      </div>



      <div className="SectionTwoContainer">

        <div className="EmptySpaceProject"></div>

        <div className="SliderContainer">
          <swiper-container
            speed="200"
            loop="true"
            grab-cursor="true"
            effect="cube"
            auto-play="200"
          >

            <swiper-slide onClick={() => Board()}>
              <div className="CubeContainer">
                <div className="CubeContent">
                  <div className="CubeTop"><img src={require("./Asety/GifBoard.gif")} alt='KraftGif' /></div>
                  <div className="CubeMedium">Fully customizable notes dashboard</div>
                  <div className="CubeBottom">
                    <div className="Border">HTML</div>
                    <div className="Border">CSS</div>
                    <div className="Border">JS</div>
                    <div className="Border">React</div>
                    <div className="Border">Application</div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide onClick={() => Kraft()}>
              <div className="CubeContainer">
                <div className="CubeContent">
                  <div className="CubeTop"><img src={require("./Asety/GifKraft.gif")} alt='KraftGif' /></div>
                  <div className="CubeMedium">Website for carpentry company</div>
                  <div className="CubeBottom">
                    <div className="Border">HTML</div>
                    <div className="Border">CSS</div>
                    <div className="Border">JS</div>
                    <div className="Border">React</div>
                    <div className="Border">Website</div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide onClick={() => Visual()}>
              <div className="CubeContainer">
                <div className="CubeContent">
                  <div className="CubeTop"><img src={require("./Asety/GifVisual.gif")} alt='VisualGif' /></div>
                  <div className="CubeMedium">Software to conduct visual perception tests</div>
                  <div className="CubeBottom">
                    <div className="Border">HTML</div>
                    <div className="Border">CSS</div>
                    <div className="Border">JS</div>
                    <div className="Border">Application</div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide onClick={() => Weather()}>
              <div className="CubeContainer">
                <div className="CubeContent">
                  <div className="CubeTop"><img src={require("./Asety/GifWeather.gif")} alt='WeatherGif' /></div>
                  <div className="CubeMedium">Application to check actual weather</div>
                  <div className="CubeBottom">
                    <div className="Border">HTML</div>
                    <div className="Border">CSS</div>
                    <div className="Border">JS</div>
                    <div className="Border">React</div>
                    <div className="Border">Application</div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide onClick={() => Pace()}>
              <div className="CubeContainer">
                <div className="CubeContent">
                  <div className="CubeTop"><img src={require("./Asety/GifPace.gif")} alt='TranslatorGif' /></div>
                  <div className="CubeMedium">Software to conduct pace test detection</div>
                  <div className="CubeBottom">
                    <div className="Border">HTML</div>
                    <div className="Border">CSS</div>
                    <div className="Border">JS</div>
                    <div className="Border">Application</div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide onClick={() => Translator()}>
              <div className="CubeContainer">
                <div className="CubeContent">
                  <div className="CubeTop"><img src={require("./Asety/GifTranslator.gif")} alt='TranslatorGif' /></div>
                  <div className="CubeMedium">Translator from Polish to PJM</div>
                  <div className="CubeBottom">
                    <div className="Border">HTML</div>
                    <div className="Border">CSS</div>
                    <div className="Border">JS</div>
                    <div className="Border">React</div>
                    <div className="Border">Application</div>
                  </div>
                </div>
              </div>
            </swiper-slide>



          </swiper-container>



        </div>

        <div className="RotateIco"><p>⤾ Rotate ⤿</p></div>

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



