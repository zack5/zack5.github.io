
import XEmbed from "./XEmbed";

export default function Fortnite() {
  return (
    <article className="portfolio" aria-labelledby="fortnite-heading">
      <h2 id="fortnite-heading">Fortnite</h2>
      <p>
        The Fortnite Player Journey team is responsible for the flows getting a player from launch into gameplay. My focus is on providing clear signs and feedback for matchmaking. Below are some the main features I've worked on. 
      </p>
      <h4 className="portfolio-subheading">Tile Streamlining</h4>
      <p>
        After years of operation, the Fortnite main menu became cluttered with many tiles on the main menu representing slight varients of similar game modes. I worked on the UI component of the refactor to consolidate these variants into a single tile, developing the architecture for a new settings screen to configure options and adding support for the new data format from the backend.
      </p>
      <figure className="portfolio-images" role="group" aria-label="Fortnite Tile Streamlining Twitter post">
        <XEmbed url="https://x.com/FortniteStatus/status/2018777513892499483" />
      </figure>
    </article>
  )
}