import React, {Component} from 'react';
import './style.css';

export class AboutMe extends Component {
  render() {
    const aboutMe = {
      title: "About Me",
      text1: "Hi there! My name is Dumitru(Dima) Moțpan and I have been working as a web developer for 2 years. I'm passionate about User Interfaces, Front End technologies and I keep a special place in my hearth for JavaScript.",
      text2: "I prefer to work-experience in a team and get thrilled when faced with challenging tasks. I believe work-experience must have a meaning and bring value to the one who requested it.",
      text3: "If I may be of help to you, contact me via email or phone.",
      hobbiesTitle: "P. S. My hobbies and a song I like!",
      hobbiesList: "Reading, volleyball, ping-pong, anime, sports",
      songUrl: "https://www.youtube.com/embed/deqOizceN1I"
    };

    return (
        <section className="about-me-section" id="about-me">
          <h2 className="title-area">
            <span>{aboutMe.title}</span>
            <i className="fa fa-universal-access"/>
          </h2>

          <div className="section-content">
            <p>{aboutMe.text1}</p>
            <p>{aboutMe.text2}</p>
            <p>{aboutMe.text3}</p>

            <hr/>
            <p>{aboutMe.hobbiesTitle}</p>
            <div className="w3-row">
              <div className="w3-col s6">
                <div className="w3-panel leftbar">
                  <p className="w3-large">
                    <i>{aboutMe.hobbiesList}</i></p>
                </div>
              </div>
              <div className="w3-col s6">
              </div>
            </div>
          </div>
        </section>
    );
  }
}
