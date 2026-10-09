
import { Tweet } from 'react-tweet';
import BackButton from "./BackButton";

export default function Fortnite() {
  return (
    <article className="portfolio" aria-labelledby="fortnite-heading">
      <h1 id="fortnite-heading">Fortnite</h1>
      <p>
        The Fortnite Ecosystem Experience team is responsible for the flows that get a player from launch to gameplay. Below are some the main features I've worked on. 
      </p>

      <section id="DiscoverRedesign" data-toc-title="Discover Redesign">
        <h2 className="portfolio-subheading">Discover Redesign</h2>
        <p>
          The Discover menu is the first thing players see when they launch the game. Our updated design helps players find what they want to play faster, while exposing a greater degree of flexibility in thumbnail options.
        </p>
        <figure className="portfolio-images" role="group" aria-label="Fortnite Discover Redesign Twitter post">
          <Tweet id="2107155301376078275" />
        </figure>
      </section>

      <section id="TileStreamlining" data-toc-title="Tile Streamlining">
        <h2 className="portfolio-subheading">Tile Streamlining</h2>
        <p>
          After years of operation, the Fortnite main menu became cluttered with many tiles on the main menu representing slight variants of similar game modes. This refactor consolidates these into a single tile and introduces a new settings screen to select which variant you'd like to play.
        </p>
        <figure className="portfolio-images" role="group" aria-label="Fortnite Tile Streamlining Twitter post">
          <Tweet id="2018777513892499483" />
        </figure>
      </section>
      <BackButton />
    </article>
  )
}