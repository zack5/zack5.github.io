import BackButton from "./BackButton";
import BorderButton from "./BorderButton";

import paperPrototype from '../assets/mta/prototype.jpeg'
import reference from '../assets/mta/reference.jpeg'
import hardware from '../assets/mta/hardware.jpeg'
import result from '../assets/mta/result.jpeg'
import Figma1 from '../assets/mta/Figma 1 - Board Previs.png'
import Figma2 from '../assets/mta/Figma 2 - Board improvements.png'
import Figma3 from '../assets/mta/Figma 3 - Mobile base.png'
import Figma4 from '../assets/mta/Figma 4 - Mobile Options.png'
import Figma5 from '../assets/mta/Figma 5 - Alerts.png'

export default function MTAStationBoardDesign() {
  return (
    <article className="portfolio" aria-labelledby="mta-station-board-design-heading">
      <h1 id="mta-station-board-design-heading">Subway Arrivals Board</h1>
      <p>
        I love getting around the city on public transit, but I don't love narrowly missing trains. It's always been a dream of mine to have a station board permanently in my own apartment to optimize my trips.
      </p>

      <section id="PaperPrototypes" data-toc-title="Paper Prototypes">
        <h2 className="portfolio-subheading">Paper Prototypes</h2>
        <p>
          Some quick coardboard cutouts helped validate that I was designing for the correct size for the space.
        </p>
        <figure className="portfolio-images">
          <img src={paperPrototype} className="portfolio-image-capped" />
        </figure>
      </section>

      <section id="References" data-toc-title="References">
        <h2 className="portfolio-subheading">References</h2>
        <p>
          The MTA started refreshing its arrivals boards with a <a href="https://boingboing.net/2025/05/22/nyc-subway-arrival-boards-get-user-friendly-redesign.html">new design in 2025</a>. I wanted my arrivals board to echo this style.
        </p>
        <figure className="portfolio-images">
          <img src={reference} className="portfolio-image-capped" />
        </figure>
      </section>

      <section id="FigmaPrototypes" data-toc-title="Figma Prototypes">
        <h2 className="portfolio-subheading">Figma Prototypes</h2>
        <figure className="portfolio-images">
          <img src={Figma1} className="no-bottom-margin portfolio-image-capped-2" />
          <span>
            I quickly came to prefer a landscape orientation with rows representing each station platform. I optimized the sizing to fit well for my local station with four platforms.
            The tiles matinain parity with the existing MTA style, with the ones peeking out below representing future trains. Rounded corners and a subtle shadowing helps sell the "stacking" effect.
          </span>
        </figure>
        <figure className="portfolio-images">
          <img src={Figma2} className="no-bottom-margin portfolio-image-capped-2" />
        </figure>
        <span>
          Some final tweaks to the upcoming trains section helped generalize the design for other stations where multiple routes may arrive on the same platform. I reduced their opacity further to highlight the current train as the focus of the visual hierarchy.
        </span>
      </section>

      <section id="Hardware" data-toc-title="Hardware">
        <h2 className="portfolio-subheading">Hardware</h2>
        <figure className="portfolio-images">
          <img src={hardware} className="no-bottom-margin portfolio-image-capped" />
          <p>
            I ordered a Raspberry Pi with a 7" Touch Display 2 and a display stand. After programming the React App and connecting it to the MTA feeds, I wrote a script to launch it as well as an NPM server at boot in kiosk mode.
          </p>
        </figure>
        <figure className="portfolio-images">
          <img src={result} className="" />
        </figure>
        <p>
          I love seeing it on my shelf!
        </p>
      </section>

      <section id="MobileExploration" data-toc-title="Mobile Exploration">
        <h2 className="portfolio-subheading">Mobile Exploration</h2>
        <p>
          While developping the app for the display, I found myself actually using it while riding the subway at times when a station board wasn't within view. This inspired me to iterate more on a layout optimized for mobile.
        </p>
        <figure className="portfolio-images">
          <img src={Figma3} className="no-bottom-margin portfolio-image-capped-3" />
        </figure>
        <span>
          This time, I knew I wanted to show the full destination for <em>all</em> upcoming trains. There are edge cases where this matters—not all A trains go to JFK airport, for example—in addition to making the system more robust to service changes.
        </span>
        <figure className="portfolio-images">
          <img src={Figma4} className="no-bottom-margin portfolio-image-capped-2" />
        </figure>
        <span>
          I explored a few options for how to allow the user to see all upcoming trains. The approach I landed on after implementing a few options to get a feel for them is letting the user horizontally scroll to see upcoming times. The upcoming trains peek off the right side of the screen, cluing the user into seeing that there is more data beyond the fold.
        </span>
        <figure className="portfolio-images">
          <img src={Figma5} className="no-bottom-margin portfolio-image-capped-2" />
        </figure>
        <span>
          I also wanted to surface alerts provided by the MTA to the users. Providing an unobtrusive yet clear call to action for the user to read more about the alerts proved challenging. I landed on using the first approach depcited here, with a button in line with the header text that opens a modal. Some rudimentary text parsing helped me classify and sort alerts according to severity given its description.
        </span>
      </section>
      <BorderButton ariaLabel="Mobile Demo" to="https://mta-station-board.netlify.app/station/611" ><span>Mobile Demo</span></BorderButton>
      <BorderButton ariaLabel="Display Demo" to="https://mta-station-board.netlify.app/stationdisplay/611" ><span>Display Demo</span></BorderButton>
      <BackButton />
    </article>
  )
}