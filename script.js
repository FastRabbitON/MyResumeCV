
const Backgrounde = document.getElementById("background");
const squarees = document.getElementById("square")
const NavBar = document.getElementById("nav-section");
const NavBurgerContainer = document.getElementById("burgermenu-container");
const BurgerMenu = document.getElementById("burgermenu");
const NavBarMobile = document.getElementById("nav-section-mobile");
const root = document.documentElement;

const colorOne = document.getElementById("color-one-mark")
const colorTwo = document.getElementById("color-two-mark")

const colorOneMobile = document.getElementById("color-one-mark-mob")
const colorTwoMobile = document.getElementById("color-two-mark-mob")

const projectBackground = document.getElementById("skill-background");
const contactBackground = document.getElementById("contact-background");

const projectBackgroundMobile = document.getElementById("skill-background-mobile");

function ColorOne(){

    colorOne.style.pointerEvents = "none";
    colorTwo.style.pointerEvents = "none";
    colorOneMobile.style.pointerEvents = "none";
    colorTwoMobile.style.pointerEvents = "none";

    setTimeout(function(){
        root.style.setProperty("--accent-color", "#000000");
        root.style.setProperty("--main-color", "#1f1e1f");
        root.style.setProperty("--font-color", "white");
        root.style.setProperty("--button-underline-color", "linear-gradient(white, white)");
        root.style.setProperty("--background-color", "linear-gradient(-60deg, #33ccff, #ff33cc)");
        root.style.setProperty("--mid-square-color", "linear-gradient(#33ccff, #ff33cc)");
        root.style.setProperty("--dot-color", "linear-gradient(#33ccff, #ff33cc)") 
        projectBackground.style.filter = "brightness(60%) grayscale(0%)"
        projectBackgroundMobile.style.filter = "brightness(60%) grayscale(0%)"
        contactBackground.style.filter = "brightness(60%) grayscale(0%)"
    }, 1500); 

    squarees.classList.toggle("on");
    setTimeout(function(){
        squarees.classList.remove("on");
        colorOne.style.pointerEvents = "all";
        colorTwo.style.pointerEvents = "all";
        colorOneMobile.style.pointerEvents = "all";
        colorTwoMobile.style.pointerEvents = "all";
    }, 3000);


    window.addEventListener("scroll", function(){
    
        if(window.scrollY < 50){
            NavBar.style.backgroundColor = "transparent";
            NavBurgerContainer.style.backgroundColor = "transparent";
            root.style.setProperty("--button-underline-color", "linear-gradient(white, white)")
        }
    
        if(window.scrollY >= 50){
            NavBar.style.backgroundColor = "rgb(31, 30, 31)";
            NavBurgerContainer.style.backgroundColor = "rgb(31, 30, 31)";
            root.style.setProperty("--button-underline-color", "linear-gradient(90deg, #33ccff, #ff33cc)")
        }
    
        console.log(window.scrollY)
    })
}

function ColorTwo(){

    colorOne.style.pointerEvents = "none";
    colorTwo.style.pointerEvents = "none";
    colorOneMobile.style.pointerEvents = "none";
    colorTwoMobile.style.pointerEvents = "none";

    setTimeout(function(){
        root.style.setProperty("--accent-color", "#000000");
        root.style.setProperty("--main-color", "#1f1e1f");
        root.style.setProperty("--font-color", "white");
        root.style.setProperty("--button-underline-color", "linear-gradient(white, white)");
        root.style.setProperty("--background-color", "linear-gradient(#232526, #414345)");
        root.style.setProperty("--mid-square-color", "linear-gradient(#5500AB, #5500AB");
        root.style.setProperty("--dot-color", "linear-gradient(#5500AB, #5500AB)") 
        projectBackground.style.filter = "brightness(60%) grayscale(100%)"
        projectBackgroundMobile.style.filter = "brightness(60%) grayscale(100%)"
        contactBackground.style.filter = "brightness(60%) grayscale(100%)"
    }, 1500);

    squarees.classList.toggle("on");

    setTimeout(function(){
        squarees.classList.remove("on");
        colorOne.style.pointerEvents = "all";
        colorTwo.style.pointerEvents = "all";
        colorOneMobile.style.pointerEvents = "all";
        colorTwoMobile.style.pointerEvents = "all";
    }, 3000);  

    window.addEventListener("scroll", function(){
    
        if(window.scrollY < 50){
            NavBar.style.backgroundColor = "transparent";
            NavBurgerContainer.style.backgroundColor = "transparent";
            root.style.setProperty("--button-underline-color", "linear-gradient(white, white)")
        }
    
        if(window.scrollY >= 50){
            NavBar.style.backgroundColor = "rgb(31, 30, 31)";
            NavBurgerContainer.style.backgroundColor = "rgb(31, 30, 31)";
            root.style.setProperty("--button-underline-color", "linear-gradient(white, white)")
        }
    
        console.log(window.scrollY)
    })
}


window.addEventListener("scroll", function(){
    
    if(window.scrollY < 50){
        NavBar.style.backgroundColor = "transparent";
        NavBurgerContainer.style.backgroundColor = "transparent";
        root.style.setProperty("--button-underline-color", "linear-gradient(white, white)")
    }

    if(window.scrollY >= 50){
        NavBar.style.backgroundColor = "rgb(31, 30, 31)";
        NavBurgerContainer.style.backgroundColor = "rgb(31, 30, 31)";
        root.style.setProperty("--button-underline-color", "linear-gradient(90deg, #33ccff, #ff33cc)")
    }

    console.log(window.scrollY)
})



const About = document.getElementById("nav-button-about");
const Skills = document.getElementById("nav-button-skills");
const Projects = document.getElementById("nav-button-projects");
const Contact = document.getElementById("nav-button-contact");
const Git = document.getElementById("nav-button-github");

const AboutMobile = document.getElementById("nav-button-about-mobile");
const SkillsMobile = document.getElementById("nav-button-skills-mobile");
const ProjectsMobile = document.getElementById("nav-button-projects-mobile");
const ContactMobile = document.getElementById("nav-button-contact-mobile");
const GitMobile = document.getElementById("nav-button-github-mobile");


About.onclick = function(){
    window.location='#about';
}

Skills.onclick = function(){
    window.location='#skills';
}

Projects.onclick = function(){
    window.location='#projects';
}

Contact.onclick = function(){
    window.location='#contact';
}



AboutMobile.onclick = function(){
    window.location='#about';
}

SkillsMobile.onclick = function(){
    window.location='#skills';
}

ProjectsMobile.onclick = function(){
    window.location='#projects';
}

ContactMobile.onclick = function(){
    window.location='#contact';
}


BurgerMenu.onclick = function(){
    BurgerMenu.classList.toggle("open");
    NavBarMobile.classList.toggle("open");
}


const KraftThree = document.getElementById("KraftThree");
const KraftTwo = document.getElementById("KraftTwo");
const KraftOne = document.getElementById("KraftOne");

const SayColorThree = document.getElementById("SayColorThree");
const SayColorTwo = document.getElementById("SayColorTwo");
const SayColorOne = document.getElementById("SayColorOne");

const TranslatorThree = document.getElementById("TranslatorThree");
const TranslatorTwo = document.getElementById("TranslatorTwo");
const TranslatorOne = document.getElementById("TranslatorOne");

KraftThree.onclick = function(){
    window.open("https://meblekraft.com.pl", '_blank').focus();
}
KraftTwo.onclick = function(){
    window.open("https://meblekraft.com.pl", '_blank').focus();
}
KraftOne.onclick = function(){
    window.open("https://meblekraft.com.pl", '_blank').focus();
}

SayColorThree.onclick = function(){
    window.open("Projects/SayColor/index.html", '_blank').focus();
}
SayColorTwo.onclick = function(){
    window.open("Projects/SayColor/index.html", '_blank').focus();
}
SayColorOne.onclick = function(){
    window.open("Projects/SayColor/index.html", '_blank').focus();
}

TranslatorThree.onclick = function(){
    window.open("Projects/Translator/index.html", '_blank').focus();
}
TranslatorTwo.onclick = function(){
    window.open("Projects/Translator/index.html", '_blank').focus();
}
TranslatorOne.onclick = function(){
    window.open("Projects/Translator/index.html", '_blank').focus();
}