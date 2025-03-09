import battlepass from "../assets/xdefiant/battlepass.png";
import challenges from "../assets/xdefiant/challenges.png";
import gameplay from "../assets/xdefiant/gameplay.gif";
import highFive from "../assets/xdefiant/highfive.gif";
import lobby from "../assets/xdefiant/lobby.png";
import mainMenu from "../assets/xdefiant/mainmenu.gif";
import playMenu from "../assets/xdefiant/playmenu.gif";

export default function XDefiant() {
  return (
    <div className="portfolio">
      <h2>XDefiant</h2>
      <p>
        XDefiant is a free-to-play first-person shooter developped by Ubisoft. Its launch in May 2024 drew over <a href="https://gamerant.com/xdefiant-11-million-players/">11 Million players</a> in the first two weeks.
      </p>
      <p>
        I was the main point of contact for UI Engineering on XDefiant. I worked primarily in C++ and Ubisoft’s Snowdrop engine to ensure that all UI elements functioned as intended and were optimized for performance on PC and consoles. I led internal workshops on best practices to create modular, scalable systems that maintained our high bar for <a href="https://toronto.ubisoft.com/how-xdefiant-flipped-the-script-to-give-arabic-players-a-tailored-experience/">accesibility and localization. </a>
      </p>
      <p>
        My primary areas of ownership were frontend state management, 3D asset display, and UI for progression systems. I was also a first responder for urgent live UI issues.
      </p>
      <img src={mainMenu} alt="XDefiant Main Menu" />
      <img src={playMenu} alt="XDefiant Play Menu" />
      <img src={gameplay} alt="XDefiant Gameplay" />
      <img src={highFive} alt="XDefiant High Five" />
      <img src={battlepass} alt="XDefiant Battlepass" />
      <img src={challenges} alt="XDefiant Challenges" />
      <img src={lobby} alt="XDefiant Lobby" />
    </div>
  )
}