import React, {Component} from 'react';
import './style.css';

export class WorkExperience extends Component {
  render() {
    const data = {
      title: "Work Experience (Volar Doeheris)",
      startDate: "July 2015",
      periods: [
        {
          company: "ISDC | Endava*",
          position: "Full Stack Developer",
          start: "Oct 2016",
          end: "Sep 2017",
          points: [
            "I made the transition to full Front End/AngularJS developer and started working on a new project.",
            "Worked together with a designer and was responsible for the behavioral part of the interface and communication with Back End.",
            "Was promoted to Developer position after 1 year. I continued working on the same project, but in a smaller team.",
            "Write code and discuss development strategies with colleagues",
            "Perform code review"
          ],
          remark: "*ISDC was bought by Endava in the beginning of 2017"
        },
        {
          company: "ISDC",
          position: "Junior Full Stack Developer",
          start: "July 2015",
          end: "Sep 2016",
          points: [
            "After internship I entered a Java Spring/AngularJS project with a team of 7.",
            "Write Java End Points and SQL queries all with Unit Tests",
            "Write FE views using AngularJS, HTML/CSS",
            "Work using Agile Methodology"
          ]
        }
      ]
    };

    return (
        <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
          <h2 className="w3-text-grey padding-16-top">
            <i className="fa fa-laptop fa-fw w3-margin-right w3-xxlarge w3-text-teal"/>
            {data.title}
            <span className="pull-right">2+ years</span>
          </h2>
          {data.periods.map((item, index) => (
              <div key={index} className="w3-container">
                <h5 className="w3-opacity"><b>{item.company}</b></h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right"/>
                  {item.start} - <span className="w3-tag w3-teal w3-round">{item.end}</span>
                </h6>
                <ul>
                  {item.points.map((text, key) => <li key={key}>{text}</li>)}
                </ul>
                <hr/>
              </div>)
          )}
        </div>

    );
  }
}
