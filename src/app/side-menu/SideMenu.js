import React, {Component} from 'react';
import './style.css';

import avatar from '../../assets/images/avatar2.jpeg';

export class SideMenu extends Component {
  render() {
    return (
        <div className="side-menu">
          <img className="avatar" src={avatar} alt="Avatar"/>
          <div className="name-area">
            <h2>Dumitru Moțpan</h2>
            <p>Front End Developer</p>
          </div>

          <div className="nav-area">
            <ul>
              <li>About me</li>
              <li>Skills</li>
              <li>Work</li>
              <li>Education</li>
              <li>contact</li>
            </ul>
          </div>
        </div>
    );
  }
}
