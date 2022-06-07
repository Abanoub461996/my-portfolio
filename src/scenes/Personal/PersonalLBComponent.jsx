import { useState } from "react";
import HobbyCard from "./HobbyCard/HobbyCard";
import "./PersonalRComponent.css";
// components

function PersonalLBComponent() {
  const [cardTitles, setCardTitles] = useState(["FootBall","BasketBall", "Anime"]);


  return (<>
      <div class="section_outer">
        <div class="personal_top-tags">
          <p class="tags">&lt;section&gt;</p>
        </div>
        <div class="section_inner section-flex">
          <div class="personal_content">
            <h2 class="personal_content-title">
                <p class="tags" style={{marginLeft:-50}}>&lt;h2&gt;</p>
                AWAY FROM CODING
                <p class="tags">&lt;/h2&gt;</p>
            </h2>
            <p class="tags" style={{marginLeft:-50}}>&lt;p&gt;</p>
            <p class="personal_content-details">
              If you like football, BasketBall and Japaniese Anime. Then let's drink a coffee and have a talk.
            </p>
            <p class="tags" style={{marginLeft:-50}}>&lt;/p&gt;</p>
            <p class="tags" style={{marginLeft:-50}}>
              &lt;div class="personal_macAnimation"&gt;
            </p>
            <div style={{height: 210}}>
              <div class="macbook">
                <div class="inner">
                  <div class="screen">
                    <div class="face-one">
                      <div class="camera"></div>
                      <div class="display">
                        <div class="shade"></div>
                      </div>
                      <span>MacBook Air</span>
                    </div>
                    <img
                      src="http://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white.svg"
                      class="logo" alt="macimg"
                    />
                  </div>
                  <div class="body">
                    <div class="face-one">
                      <div class="touchpad"></div>
                      <div class="keyboard">
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key space"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                        <div class="key f"></div>
                      </div>
                    </div>
                    <div class="pad one"></div>
                    <div class="pad two"></div>
                    <div class="pad three"></div>
                    <div class="pad four"></div>
                  </div>
                </div>
                <div class="shadow"></div>
              </div>
            </div>
          </div>

        </div>
        <div class="skills_bottom-tags">
          <p class="tags">&lt;/div&gt;</p>

          <p class="tags">&lt;/section&gt;</p>
        </div>
      </div>

  </>);
}

export default PersonalLBComponent;