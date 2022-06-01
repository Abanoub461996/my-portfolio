import {Typewriter} from 'react-simple-typewriter';
// import "react-simple-typewriter/dist/index.css";
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import "./HeroSection.css"
// components



function HeroSection() {
  const { text, count } = useTypewriter({
    /* Config */
    words: ["Work With React and Angular."],
    typeSpeed:80,
  })
  return (
    <header class="home_section">
    <div class="section_outer">
    <div class="header_top-tags">
      <p class="tags">&lt;html&gt;</p>
      <p class="tags body">&lt;body&gt;</p>
      <p class="tags h1-open">&lt;h1&gt;</p>
    </div>

    <div class="section_inner">
      <div class="header_text-zone">
        <h1>HI,</h1>
        <h1>I'M <span class="name_initial">A</span>BANOUB,
          A FRONT END WEB DEVELOPER
          <p class="tags">&lt;/h1&gt;</p>
        </h1>
        <h4 class="header_text-extended">
          <p class="tags">&lt;p&gt;</p>
          {text}
          <Cursor />
          <p class="tags">&lt;/p&gt;</p>
        </h4>
      </div>
    </div>
    <button class="header_contact-me btn" type="button">
      <span>CONTACT ME!</span>
    </button>
  </div>
  </header>
  );
}

export default HeroSection;