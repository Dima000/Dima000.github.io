import React, {Component} from 'react';
import './App.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/w3.css';
import '../assets/css/custom.css';

import {GeneralInfo} from "./general-info/GeneralInfo";

class App extends Component {
  render() {
    return (
        <div className="App w3-light-grey">
          <div className="w3-content w3-margin-top">

            {/*<!-- The Grid -->*/}
            <div className="w3-row-padding">
              {/*<!-- Left Column -->*/}
              <div className="w3-third">

                <GeneralInfo/>

                <div className="w3-container w3-card-4 w3-white w3-text-grey">
                  {/*// <!-- Education -->*/}
                  <br/>
                  <p className="w3-large w3-text-theme">
                    <b><i className="fa fa-graduation-cap fa-fw w3-margin-right w3-text-teal"/>Education</b>
                  </p>

                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Technical University of Cluj-Napoca</b></h5>
                    <h6 className="w3-text-teal"><i
                        className="fa fa-calendar fa-fw w3-margin-right"/>2012 - 2016</h6>
                    <p>Computer Science / *Bachelor Degree</p>
                    <p><i>
                      <small>* Did not get my diploma at present time</small>
                    </i></p>
                  </div>


                  {/*// <!-- Side projects -->*/}
                  <p className="w3-large w3-text-theme">
                    <b><i className="fa fa-laptop fa-fw w3-margin-right w3-text-teal"/>Other
                      Projects</b>
                  </p>
                  {/*// <!-- Gearbox -->*/}
                  <div className="w3-container gearbox">
                    <h5 className="w3-opacity">
                      <b>Gearbox website</b>&nbsp&nbsp
                      <a href="http://www.cutiivitezenapoca.ro/" target="_blank">
                        <i className="fa fa-link fa-fw w3-margin-right w3-hover-opacity w3-text-teal"/>
                      </a>
                      <b>/ &nbsp ConturSoft</b>
                    </h5>
                    <p>Technology Stack:</p>
                    <div className="flex-container">
                      <div className="flex-child-1">
                        <ul className="custom-ul">
                          <li>HTML/CSS</li>
                          <li>jQuery</li>
                        </ul>
                      </div>
                      <div className="flex-child-2 padding-left-10">
                        <ul className="custom-ul">
                          <li>Google Search Console</li>
                          <li>Bootstrap</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  {/*// <!-- Diploma project -->*/}
                  <div className="w3-container diploma-project">
                    <h5 className="w3-opacity">
                      <b>StudShare</b>
                      <span className="w3-tag w3-teal w3-round pull-right">In progress</span>
                    </h5>
                    <p>Diploma project; a platform for students to store and organize their
                      course materials.</p>
                    <p>Technology Stack:</p>
                    <div className="flex-container">
                      <div className="flex-child-1">
                        <ul className="custom-ul">
                          <li><b>M</b>ongoDb</li>
                          <li><b>E</b>xpress</li>
                          <li><b>A</b>ngularJS</li>
                          <li><b>N</b>odeJS</li>
                        </ul>
                      </div>
                      <div className="flex-child-1">
                        <ul className="custom-ul">
                          <li>HTML/CSS</li>
                          <li>Bootstrap</li>
                          <li>Gulp</li>
                          <li>Amazon S3</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>


                {/*<!-- End Left Column -->*/}
              </div>
              {/*<!-- Right Column -->*/}
              <div className="w3-twothird">

                {/*<!-- About Me -->*/}
                <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey padding-16-top">
                    <i className="fa fa-universal-access fa-fw w3-margin-right w3-xxlarge w3-text-teal"/>
                    About Me
                  </h2>
                  <div className="w3-container">
                    <p>Hi there! My name is Dumitru(Dima) Moțpan and I have been working as a web
                      developer for 2 years.
                      I'm passionate about User Interfaces, Front End technologies and I keep a
                      special place in my
                      hearth for JavaScript.
                    </p>
                    <p>I prefer to work in a team and get thrilled when faced with challenging tasks.
                      I believe work must have a meaning and bring value to the one who requested it.
                    </p>
                    <p>If I may be of help to you, contact me via email or phone.</p>

                    <hr/>
                    <p>P. S. My hobbies and a song I like!</p>
                    <div className="w3-row">
                      <div className="w3-col s6">
                        <div className="w3-panel leftbar">
                          <p className="w3-large">
                            <i>Reading, salsa, chess<br/>ping-pong,
                              anime, volleyball</i></p>
                        </div>
                      </div>
                      <div className="w3-col s6">
                        <p className="pull-right">
                          <iframe className="w3-greyscale-max"
                                  src="https://www.youtube.com/embed/deqOizceN1I"
                                  frameBorder="0"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/*<!-- Skills -->*/}
                <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey padding-16-top">
                    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"/>
                    Skills
                  </h2>
                  <div className="w3-container">
                    <img className="img-skills" src="../assets/images/logos2.svg"/>
                  </div>
                </div>

                {/*<!-- Experience -->*/}
                <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey padding-16-top">
                    <i className="fa fa-laptop fa-fw w3-margin-right w3-xxlarge w3-text-teal"/>
                    Valar Dohaeris! <span className="pull-right">2+ years</span>
                  </h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Web Developer / Endava</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"/>
                      May 2017 - <span className="w3-tag w3-teal w3-round">Current</span>
                    </h6>
                    <p>I made the transition to full Front End/AngularJS developer and started working
                      on a new
                      project.</p>
                    <p>Worked together with a designer and was responsible for the behavioral part of
                      the interface and
                      communication with Back End.</p>
                    <p>Meanwhile ISDC was acquired by Endava.</p>
                    <hr/>
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Java Web Developer / ISDC</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"/>Oct
                      2016 - Apr 2017
                    </h6>
                    <p>Was promoted to Developer position after 1 year. I continued working on the same
                      project, but in
                      a smaller team.</p>
                    <ul>
                      <li>Write code and discuss development strategies with colleagues</li>
                      <li>Perform code review</li>
                    </ul>
                    <hr/>
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity"><b>Junior Java Web Developer / ISDC</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"/>July
                      2015 - Sep 2016
                    </h6>
                    <p>After internship I entered a Java Spring/AngularJS project with a team of 7.</p>
                    <ul>
                      <li>Write Java End Points and SQL queries all with Unit Tests</li>
                      <li>Write FE views using AngularJS, HTML/CSS</li>
                      <li>Work using Agile Methodology</li>
                    </ul>
                  </div>

                </div>
                {/*<!-- End Grid -->*/}
              </div>
              {/*// <!-- End Page Container -->*/}
            </div>

            <footer className="w3-container w3-teal w3-center w3-margin-top">
              <span>Find me on social media.</span> &nbsp
              <a href="https://www.linkedin.com/in/dumitru-motpan-1b76038b/" target="_blank">
                <i className="fa fa-linkedin w3-hover-opacity"/></a>
              <a href="https://github.com/dima000" target="_blank">
                <i className="fa fa-github w3-hover-opacity"/></a>
              <a href="https://www.facebook.com/dumitru.motpan" target="_blank">
                <i className="fa fa-facebook-official w3-hover-opacity"/></a>
              <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
              </p>
            </footer>
          </div>
        </div>
    );
  }
}

export default App;
