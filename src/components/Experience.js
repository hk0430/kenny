import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
        <div id="experience">
          <div className="left_exp">
            <div className="intro">
              <div className="i_am">I have worked as a(n)...</div>
              <div className="work">
                Data Structures Teaching Assistant<p className="ink">Stony Brook University, Jan 2020 - May 2020</p>
                <p className="description">
                ●Collaborated with faculty members to deliver a comprehensive understanding of data structures to students<br/>
                ●Promoted an interactive and personalized learning experience for students during office hours and recitations<br/>
                ● Helped design object-oriented programming problems that utilize a variety of data structures
                </p>
              </div>
              <div className="work">
                Technology Intern<p className="ink">Brooklyn Navy Yard Development Corporation, Jun 2019 - Aug 2019 / Jun 2018 - Aug 2018</p>
                <p className="description">
                ●Wrote scripts to automate basic tasks<br/>
                ●Worked with JAMF to supervise the corporation’s iOS devices<br/>
                ●Managed the corporation’s users in various systems as system administrator<br/>
                ●Worked as a help desk technician and resolved hardware, software, and connectivity issues<br/>
                ●Created a live network map detailing network connection between buildings, status and location of each device
                </p>
              </div>
              <div className="work">
                HR Intern<p className="ink">NYC Dept. of Education, Jul 2017 - Aug 2017</p>
              </div>
              <div className="work">
                Summer Camp Volunteer<p className="ink">Chinese-American Planning Council, Jul 2016 - Aug 2016</p>
              </div>
            </div>
          </div>
          <div className="right_exp">
            <div className="intro">
              <div className="i_am">I have worked on...</div>
              <div className="work">
                <a className="project_links" href={"https://ta-py.herokuapp.com/"} target="_blank" rel="noopener noreferrer">Technical Analysis App</a>
              </div>
              <div className="work">
                <a className="project_links" href={"https://github.com/hk0430/stonks-webapp"} target="_blank" rel="noopener noreferrer">Options Flow Web App</a>
              </div>
              <div className="work">
                PiggyBank Android Mobile App
                <p className="ink">2019 SBUHacks Hackathon Project</p>
              </div>
              <div className="work">
                Education Web App
                <p className="ink">2019 HackNYU Hackathon Project</p>
              </div>
            </div>
          </div>
        </div>
    );
  };
}

export default Experience;