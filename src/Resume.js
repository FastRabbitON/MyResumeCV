import React, { useEffect, useState, useRef } from 'react';
import './ResumeStyle.css';
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';


function Resume() {

  document.title = "FastRabbitON"

  const github = () => {
    window.open("https://github.com/FastRabbitON", '_blank').focus();
  }
  const mail = () => {
    window.location = "mailto:fastrabbiton@gmail.com";
  }


  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };


  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    if (touch) {
      setMousePos({ x: touch.clientX, y: touch.clientY });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);




  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const skillsData = [
    { name: 'HTML', rating: 5 },
    { name: 'CSS', rating: 5 },
    { name: 'JavaScript', rating: 4 },
    { name: 'React', rating: 4 },
    { name: 'Python', rating: 2 },
    { name: 'MATLAB', rating: 3 },
    { name: 'AutoCAD', rating: 5 },
    { name: 'SoundPLAN', rating: 4 },
    { name: 'JASP', rating: 3 },
  ];

  const languageData = [
    { name: "Polish", rating: "C2", ratingBar: 100 },
    { name: "English", rating: "B1/B2", ratingBar: 75 },
    { name: "PJM", rating: "A1", ratingBar: 30 },
  ]

  const { ref: myRefOne, inView: isVisibleOne } = useInView({
    threshold: 0,
  });

  const { ref: myRefTwo, inView: isVisibleTwo } = useInView({
    threshold: 0,
  });

  const { ref: myRefThree, inView: isVisibleThree } = useInView({
    threshold: 0,
  });

  const { ref: myRefFour, inView: isVisibleFour } = useInView({
    threshold: 0,
  });

  const { ref: myRefFive, inView: isVisibleFive } = useInView({
    threshold: 0,
  });

  const { ref: myRefSix, inView: isVisibleSix } = useInView({
    threshold: 0,
  });

  const { ref: myRefSeven, inView: isVisibleSeven } = useInView({
    threshold: 0,
  });

  const { ref: myRefGhost, inView: isVisibleGhost } = useInView({
    threshold: 0.2,
  });


  const AnchorAboutMe = useRef();
  const AnchorPorftolio = useRef();
  const AnchorContact = useRef();

  const ScrollToAboutME = () => {
    window.scrollTo({ top: AnchorAboutMe.current.getBoundingClientRect().top })
  }

  const ScrollToPortfolio = () => {
    window.scrollTo({ top: AnchorPorftolio.current.getBoundingClientRect().top })

  }

  const ScrollToContact = () => {
    window.scrollTo({ top: AnchorContact.current.getBoundingClientRect().top })
  }

  const ScrollToTop = () => {
    window.scrollTo({ top: 0 })
  }


  return (

    <>

      <nav className='ResumeNav'>
        <div className="BtnContainer">
          <button onClick={ScrollToAboutME}>About ME</button>
          <button onClick={ScrollToPortfolio}> Portfolio </button>
          <button onClick={ScrollToContact}>Contact</button>
        </div>
      </nav>

      <header className="ParallaxContainer">
        <img
          className="ParallaxImage"
          src={require("./Parallax/FullX.png")}
          style={{
            left: "0px",
            bottom: "0px",
            zIndex: 1
          }}
          alt="Background"
        />
        <img
          className="ParallaxImage"
          src={require("./Parallax/Layer5_Trees.png")}
          style={{
            left: "0px",
            bottom: "0px",
            zIndex: 6
          }}
          loading='lazy'
          alt="Trees"
        />
        <img
          className="ParallaxImage "
          id="Mountains"
          src={require("./Parallax/Layer4_Mountain12.png")}
          style={{
            transform: `translate(${mousePos.x / 65}px, ${mousePos.y / 75}px)`,
            zIndex: 5
          }}
          loading='lazy'
          alt="Mountains"
        />
        <img
          className="ParallaxImage"
          src={require("./Parallax/Layer3_Cloud.png")}
          style={{
            transform: `translate(${-mousePos.y / 85}px, ${-mousePos.x / 80}px)`,
            right: "-20px",
            bottom: "0px",
            zIndex: 3
          }}
          loading='lazy'
          alt="Cloud"
        />
        <img
          className="ParallaxImage"
          id='Balloons'
          src={require("./Parallax/Layer4_Balloon12.png")}
          style={{
            transform: `translate(${-mousePos.x / 35}px, ${-mousePos.y / 25}px)`,
            zIndex: 4
          }}
          loading='lazy'
          alt="Balloons"
        />
        <h2 className='ParallaxText'
          style={{
            transform: `translate(${scrollTop < 500 ? (scrollTop * 0.8) : 500}px  , ${window.innerWidth <= 800 ? 50 : 0}px)`
          }}
        >
          <p> make </p>   <p>your dreams</p>   <p>come true</p>
        </h2>
      </header>

      <section className="AboutMeContainer">
        <img
          className="SkeletonOneImage"
          src={require("./Parallax/SkeletonOne.png")}
          style={{
            transform: `translate(${mousePos.x / 150}px, ${-mousePos.y / 90}px)`
          }}
          alt="Skeleton"
        />
        <img
          className="SkeletonTwoImage"
          src={require("./Parallax/SkeletonTwo.png")}
          style={{
            transform: `translate(${-mousePos.x / 90}px, ${mousePos.y / 140}px)`
          }}
          alt="Skeleton"
        />

        <div className="AboutMeContent">

          <div className="AboutMeSectionOne">
            <div className="PhotoContainer">
              <img ref={AnchorAboutMe} className="PhotoCV" src={require("./ResumeAssets/PhotoCV.png")} />
              <div className="PhotoTitle">Kacper Kwiek</div>
            </div>
          </div>

          <div className="AboutMeSectionTwo">
            <div className="SkillsContainer">
              <div className="SkillsFirstSquare">
                <div className="SkillsSecondSquare">
                  <div className="SkillsRateContainer">
                    {skillsData.map((skill, index) => (
                      <div className="AboutSkill" key={index}>
                        <div className="LabelSkill">{skill.name}</div>
                        <div className="RateSkill">
                          {Array.from({ length: 5 }, (_, i) => (
                            <div
                              className={`${i < Math.floor(skill.rating) ? 'FullDot' : 'EmptyDot'
                                }`}
                              key={i}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>


            <div className="LanguagesContainer">
              <div className="LanguagesFirstSquare">
                <div className="LanguagesSecondSquare">
                  {languageData.map((language, index) => (
                    <div className="LanguagesContent" key={index}>
                      <div className="LanguagesTitle">{language.name}</div>
                      <div className="LanguagesRate">
                        <div className="LanguagesRateTile">{language.rating}</div>
                        <div className="LanguagesRateBar">
                          <div className="BarOuter">
                            <div className="BarInner"
                              style={{
                                width: `${language.ratingBar}%`
                              }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="EducationContainer">
              <div className="EducationFirstSquare">
                <div className="EducationSecondSquare">
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
      </section>



      <section ref={myRefGhost} className="ProjectsSection">

        <div ref={AnchorPorftolio} className='AnchorP'></div>

        <img
          className={isVisibleGhost ? "GhostImage-on" : "GhostImage"}
          src={require("./Parallax/GhostOne.png")}
          style={{
            right: "-90px",
            top: "350px",
            zIndex: 1
          }}
          alt="Ghost"
        />


        <div ref={myRefOne} className={isVisibleOne ? "ProjectContainerB-on" : "ProjectContainerB"}>
          <Link className="LinkPortfolio" to="https://mynoteboard.pl/" target="_blank">
            <img className="ProjectIco" src={require("./ResumeAssets/IcoWeb.png")} alt='IcoWeb' />
            <div className="ClickMan">Click and check it out!</div>
            <div className="ProjectTitle">myNoteBoard</div>
            <div className="LeftType">
              <img src={require("./ResumeAssets/GifBoard.gif")} alt="" />
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
          </Link>
        </div>

        <div className="ProjectEmptySpace"></div>

        <div ref={myRefTwo} className={isVisibleTwo ? "ProjectContainerP-on" : "ProjectContainerP"}>
          <Link className="LinkPortfolio" to="https://meblekraft.com.pl/" target="_blank">
            <img className="ProjectIco" src={require("./ResumeAssets/IcoWeb.png")} alt='IcoWeb' />
            <div className="ClickMan">Click and check it out!</div>
            <div className="ProjectTitle">Website for carpentry company</div>
            <div className="RightType">
              <img src={require("./ResumeAssets/GifKraft.gif")} alt="" />
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
          </Link>

        </div>

        <div className="ProjectEmptySpace"></div>

        <div ref={myRefThree} className={isVisibleThree ? "ProjectContainerB-on" : "ProjectContainerB"}>
          <Link className="LinkPortfolio" to="translator" >
            <div className="ProjectTitle">Translator PJM</div>
            <img className="ProjectIco" src={require("./ResumeAssets/IcoWeb.png")} alt='IcoWeb' />
            <div className="ClickMan">Click and check it out!</div>
            <div className="LeftType">
              <img src={require("./ResumeAssets/GifTranslator.gif")} alt="" />
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
          </Link>

        </div>

        <div className="ProjectEmptySpace"></div>

        <div ref={myRefFour} className={isVisibleFour ? "ProjectContainerP-on" : "ProjectContainerP"}>
          <Link className="LinkPortfolio" to="legalfly" >
            <div className="ProjectTitle">LegalFLY</div>
            <img className="ProjectIco" src={require("./ResumeAssets/IcoWeb.png")} alt='IcoWeb' />
            <div className="ClickMan">Click and check it out!</div>
            <div className="LeftType">
              <img src={require("./ResumeAssets/GifLegal.gif")} alt="" />
              <div className="ProjectInfo">
                <div className="ProjectDescription">
                  Thanks to this application you will find out what you can legally transport by plane.
                  The application distinguishes what kind of item you can carry in which suitcase and under what conditions.
                </div>
                <div className="ProjectTech">
                  <div className="Tech">HTML</div>
                  <div className="Tech">CSS</div>
                  <div className="Tech">JS</div>
                  <div className="Tech">React</div>
                  <div className="Tech">Friendly user</div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="ProjectEmptySpace"></div>

        <div ref={myRefFive} className={isVisibleFive ? "ProjectContainerB-on" : "ProjectContainerB"}>
          <Link className="LinkPortfolio" to="weather" >
            <div className="ProjectTitle">Weather App</div>
            <img className="ProjectIco" src={require("./ResumeAssets/IcoWeb.png")} alt='IcoWeb' />
            <div className="ClickMan">Click and check it out!</div>
            <div className="RightType">
              <img src={require("./ResumeAssets/GifWeather.gif")} alt="" />
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
          </Link>
        </div>

        <div className="ProjectEmptySpace"></div>

        <div ref={myRefSix} className={isVisibleSix ? "ProjectContainerP-on" : "ProjectContainerP"}>
          <Link className="LinkPortfolio" to="https://github.com/FastRabbitON/VisualResolutionTest" >
            <div className="ProjectTitle">Psychophysical Experiments</div>
            <img className="ProjectIco" src={require("./ResumeAssets/IcoGithub.png")} alt='IcoGit' />
            <div className="LeftType">
              <img src={require("./ResumeAssets/GifVisual.gif")} alt="" />
              <div className="ProjectInfo">
                <div className="ProjectDescription">
                  A program that allows you to conduct various psychophysical experiments related to visual perception.
                </div>
                <div className="ProjectTech">
                  <div className="Tech">HTML</div>
                  <div className="Tech">CSS</div>
                  <div className="Tech">JS</div>
                  <div className="Tech">Vanilla</div>
                  <div className="Tech">Data export</div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="ProjectEmptySpace"></div>

        <Link className="LinkPortfolio" to="https://github.com/FastRabbitON">
          <div ref={myRefSeven} className={isVisibleSeven ? "ProjectContainerB-on" : "ProjectContainerB"}>
            <div className="ProjectTitle">Repository on Github</div>
            <img className="ProjectIco" src={require("./ResumeAssets/IcoGithub.png")} alt='IcoGit' />
            <div className="ProjectInfo">
              <div className="ProjectDescription">
                Check out the rest of the projects on Github with detailed code for each project
              </div>
            </div>
          </div>
        </Link>

      </section>




      <section ref={AnchorContact} className="SectionContactContainer">
        <div className="SectionContactContent">
          <div className="ContactFirstSquare">
            <div className="ContactSecondSquare">
              <div className="ContactContainer">
                <p onClick={() => github()}> <img src={require("./ResumeAssets/IcoGithub.png")} alt='IcoGit' /> github.com/FastRabbitON</p>
                <p onClick={() => mail()}> <img src={require("./ResumeAssets/IcoGmail.png")} alt='IcoMail' /> fastrabbiton@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className='ResumeFooter'>

        <div className="FooterLeft">
          <p><a target="_blank" href="https://www.freepik.com/free-vector/parallax-background-hot-air-balloons-flying-sky_21050286.htm#query=parallax%20baloon&position=1&from_view=search&track=ais">Image by upklyak on Freepik</a> </p>
          <p> <a target="_blank" href="https://www.freepik.com/free-vector/flat-halloween-animated-ghost-collection_5415564.htm#query=ghost&position=0&from_view=keyword&track=sph">Image by Freepik </a></p>
          <p><a target="_blank" href="https://icons8.com"> Icons by Icons8</a></p>
        </div>

        <div className="FooterRight">
          <p> <Link className="LinkContact" to="https://github.com/FastRabbitON"> github.com/FastRabbitON <img src={require("./ResumeAssets/IcoGithub.png")} alt='IcoGit' /> </Link> </p>
          <p onClick={() => mail()}>  fastrabbiton@gmail.com <img src={require("./ResumeAssets/IcoGmail.png")} alt='IcoMail' /></p>
        </div>

      </footer>

      <div onClick={ScrollToTop} className="ArrowToTop"
        style={{
          display: scrollTop >= 1000 ? "flex" : "none"
        }}
      >
        ↑
      </div>

    </ >
  );




}

export default Resume;



