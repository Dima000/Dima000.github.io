import React, {Component} from 'react';
import './style.css';

import skillsImg from '../../../assets/images/logos2.svg'

export class Skills extends Component {
  render() {
    const data = {
      title: "Skills",
      text1: "Hi there! My name is Dumitru(Dima) Moțpan and I have been working as a web developer for 2 years. I'm passionate about User Interfaces, Front End technologies and I keep a special place in my hearth for JavaScript.",
      text2: "I prefer to work-experience in a team and get thrilled when faced with challenging tasks. I believe work-experience must have a meaning and bring value to the one who requested it.",
      text3: "If I may be of help to you, contact me via email or phone.",
      hobbiesTitle: "P. S. My hobbies and a song I like!",
      hobbiesList: "Reading, volleyball, ping-pong, anime, sports",
      songUrl: "https://www.youtube.com/embed/deqOizceN1I"
    };

    return (
        <div className="content__section">
          <h2 className="title-area color-main">
            <i className="fa fa-certificate mr-3"/>
            {data.title}
          </h2>
          <div className="w3-container">
            <img className="img-skills" src={skillsImg}/>
          </div>
        </div>
    );
  }
}
