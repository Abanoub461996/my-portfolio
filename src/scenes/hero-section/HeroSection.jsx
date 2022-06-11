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
    <header className="home_section">
    <div className="section_outer">
    <div className="header_top-tags">
      <p className="tags">&lt;html&gt;</p>
      <p className="tags body">&lt;body&gt;</p>
      <p className="tags h1-open">&lt;h1&gt;</p>
    </div>

    <div className="section_inner">
      <div className="header_text-zone">
        <h1>HI,</h1>
        <h1>I'M <span className="name_initial">A</span>BANOUB,
          A FRONT END WEB DEVELOPER
          <p className="tags">&lt;/h1&gt;</p>
        </h1>
        <h4 className="header_text-extended">
          <p className="tags">&lt;p&gt;</p>
          {text}
          <Cursor />
          <p className="tags">&lt;/p&gt;</p>
        </h4>
      </div>
    </div>
    {/* <button className="header_contact-me btn" type="button">
      <span>CONTACT ME!</span>
    </button> */}
  </div>
  </header>
  );
}

export default HeroSection;