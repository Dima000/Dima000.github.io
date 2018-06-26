import React, {Component} from 'react';
import './work-experience.css';

export class WorkExperience extends Component {
  render() {
    const {entries} = this.props;

    return <div className="work-section" id="work">
      <h2 className="title-area">
        <span className="mr-3">{this.props.title}</span>
        <i className="fa fa-certificate mr-3 color-main"/>
      </h2>

      <div className="section-content">
        {entries.map((entry, key) =>
            <div key={key} className="job-entry">

              <h4 className="opacity job-title mb-2">
                <span>{entry.position}</span>
                <span> @</span>
                <span className="bold">{entry.company}</span>
              </h4>

              <h5 className="color-main job-period mb-3">
                <i className="fa fa-calendar mr-3"/>
                <span>{entry.start}</span>
                <span> - </span>
                <span>{entry.end}</span>
              </h5>

              <ul className="job-bullet-points">
                {entry.bullets.map((text, key) =>
                    <li key={key}>{text}</li>
                )}
              </ul>

              {entry.remark && <p className="remark">{entry.remark}</p>}
            </div>
        )}
      </div>
    </div>;
  }
}

WorkExperience.defaultProps = {
  title: "Work Experience",
  startDate: "July 2015",
  entries: [
    {
      company: "Digital1",
      position: "Front End Developer",
      start: "Oct 2017",
      end: "June 2018",
      bullets: [
        "After internship I entered a project about stock market index in a team of 7 people",
        "Worked under Agile Methodology with monthly sprints and code review",
        "Got comfortable with Java Spring, SQL, AngularJs and some jQuery",
        "Was promoted to Developer position after 1 year. I continued working on the same project, but in a smaller team.",
        "After 1,5 years switched project and started working as full Front-End developer in AngularJs"
      ],
      remark: "*ISDC was bought by Endava in the beginning of 2017"
    },
    {
      company: "ISDC | Endava",
      position: "Full Stack Java Developer",
      start: "July 2015",
      end: "Sep 2017",
      bullets: [
        "After internship I entered a project about stock market index in a team of 7 people",
        "Worked under Agile Methodology with monthly sprints and code review",
        "Got comfortable with Java Spring, SQL, AngularJs and some jQuery",
        "Was promoted to Developer position after 1 year. I continued working on the same project, but in a smaller team.",
        "After 1,5 years switched project and started working as full Front-End developer in AngularJs"
      ],
      remark: "*ISDC was bought by Endava in the beginning of 2017"
    }
  ]
};
