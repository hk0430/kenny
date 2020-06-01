import React, { Component } from 'react';
import profile from '../images/linkedin.jpg';
import Facebook from '../images/fbicon.png';
import GitHub from '../images/githubicon.png';
import Instagram from '../images/igicon.png';
import LinkedIn from '../images/linkedinicon.png';

class About extends Component {
  render() {
    return (
        <div id="about">
          <div className="left">
            <div className="intro">
              <div className="i_am">I am a...</div>
              <div className="who_i_am">Stony Brook Seawolf</div>
              <div className="who_i_am">Software Developer</div>
              <div className="who_i_am">Fitness Ethusiast</div>
              <div className="who_i_am">Options Trader</div><br/>
              <div className="i_am">I am interested in...</div>
              <div className="who_i_am">Software Development</div>
              <div className="who_i_am">Artificial Intelligence</div>
              <div className="who_i_am">Cybersecurity</div>
              <div className="who_i_am">FinTech</div>
            </div>
          </div>
          <div className="right">
            <img id="profilepic" alt={"profile"} src={profile} /><br/><br/>
            <h2>Kenny Hu</h2>
            <h4>Stony Brook University</h4>
            <h5>Class of 2021</h5>
            <h5>Computer Science, B.S.</h5>
            <h5>Applied Mathematics and Statistics, B.S.</h5><br/><br/>
            <h4>Contact Me</h4>
            <h5>kenny.hu.kh@gmail.com</h5>
            <a href={"https://www.facebook.com/hk0430"} target="_blank" rel="noopener noreferrer">
              <img alt={"fb"} src={Facebook} />
            </a>
            <a href={"https://www.instagram.com/hk_0430"} target="_blank" rel="noopener noreferrer">
              <img alt={"ig"} src={Instagram} />
            </a>
            <a href={"https://www.linkedin.com/in/kenny-hu-91b97116a"} target="_blank" rel="noopener noreferrer">
              <img alt={"li"} src={LinkedIn} />
            </a>
            <a href={"https://github.com/hk0430"} target="_blank" rel="noopener noreferrer">
              <img alt={"gh"} src={GitHub} />
            </a>
          </div>
        </div>
    );
  };
}

export default About;