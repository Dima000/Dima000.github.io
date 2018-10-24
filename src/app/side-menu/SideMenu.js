import React, {Component} from 'react';
import './style.css';

import avatar from '../../assets/images/avatar2.jpeg';

export class SideMenu extends Component {
  render() {
    return (
        <div className="side-menu">
          <div className="relative-container">
            <img className="avatar" src={avatar} alt="Avatar"/>
            <div className="name-area">
              <h2>Dumitru Moțpan</h2>
              <p>Front End Developer</p>
            </div>

            <div className="nav-area s">
              <ul>
                <li><a href="#contact"><span>Contact</span></a></li>
                <li><a href="#about-me"><span>About me</span></a></li>
                <li><a href="#skills"><span>Skills</span></a></li>
                <li><a href="#work"><span>Work</span></a></li>
                <li><a href="#portfolio"><span>Portfolio</span></a></li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
