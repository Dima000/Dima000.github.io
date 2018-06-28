import React, {Component} from 'react';
import './App.css';

import {SideMenu} from "./side-menu/SideMenu";
import {AboutMe} from "./content/about-me/AboutMe";
import {Skills} from "./content/skills/Skills";
import {WorkExperience} from "./content/work-experience/WorkExperience";
import {Contact} from './content/contact/Contact';
import {Portfolio} from './content/portfolio/portfolio';

export default class App extends Component {
  render() {
    return (
        <div className="App">
          <SideMenu/>
          <div className="content">
            <Contact/>
            <AboutMe/>
            <Skills/>
            <WorkExperience/>
            <Portfolio/>
          </div>

        </div>
    );
  }
}