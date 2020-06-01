import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
        <div id="experience">
            <div className="exp_header">Experience</div><br/>
            <div className="worked">I have worked as a(n)...</div><br/>
            <div className="card_container">
              <div className="card card_left">
                <div className="container">
                  <h4>Teaching Assistant</h4> 
                  <h5>January 2020 - May 2020</h5>
                  <div className="work_deets"><span>&#x1F4BB;</span> Collaborated with a faculty member to deliver a comprehensive understanding of data structures to students</div><br/>
                  <div className="work_deets"><span>&#x1F4BB;</span> Promoted interactive and personalized learning experience for students during office hours</div><br/>
                  <div className="work_deets"><span>&#x1F4BB;</span> Helped design object-oriented programming assignments and recitation problems that use a wide variety of data structures</div><br/>
                </div>
              </div>
              <div className="card card_right">
                <div className="container">
                  <h4>Intern at Brooklyn Navy Yard</h4>
                  <h5>June 2019 - August 2019</h5>
                  <h5>June 2018 - August 2018</h5>
                  <div className="work_deets"><span>&#x1F4BB;</span> Wrote simple scripts using PowerShell to automate basic tasks</div><br/>
                  <div className="work_deets"><span>&#x1F4BB;</span> Managed the corporation’s users in various systems as system administrator</div><br/>
                  <div className="work_deets"><span>&#x1F4BB;</span> Worked as a help desk technician and helped resolve hardware, software, or connectivity issues</div><br/>
                  <div className="work_deets"><span>&#x1F4BB;</span> Created a live network map detailing network connection between buildings, status and location of each device</div><br/>
                  <div className="work_deets"><span>&#x1F4BB;</span> Assisted the IT department in launching and testing a new visitor management system</div><br/>
                </div>
              </div>
            </div>
        </div>
    );
  };
}

export default Experience;