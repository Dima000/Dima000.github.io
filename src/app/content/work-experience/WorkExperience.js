import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './work-experience.css';

export class WorkExperience extends Component {
  render() {
    const { entries } = this.props;

    return <section className="work-section" id="work">
      <h2 className="title-area">
        <span>{this.props.title}</span>
        <i className="fa fa-laptop mr-3 color-main"/>
      </h2>

      <div className="section-content">
        {entries.map((entry, index) =>
          <div key={index} className={`job-entry ${entries.length - 1 !== index ? 'mb-5' : ''}`}>

            <h4 className="opacity job-title mb-2">
              <span>{entry.position}</span>
              <span> @</span>
              <a href={entry.companyLink} className="bold">{entry.company}</a>
            </h4>

            <h5 className="color-main job-period mb-4">
              <i className="fa fa-calendar mr-3"/>
              <span>{entry.start}</span>
              <span> - </span>
              <span>{entry.end}</span>
            </h5>

            <div className="milestones">
              <h6>{entry.milestones.title}</h6>
              <ul>
                {entry.milestones.items.map((text, key) =>
                  <li key={key}>{ReactHtmlParser(text)}</li>
                )}
              </ul>
            </div>

            <div className="special-skills">
              <h6>{entry.specialSkills.title}</h6>
              <ul>
                {entry.specialSkills.items.map((text, key) =>
                  <li key={key}>{ReactHtmlParser(text)}</li>
                )}
              </ul>
            </div>

            {entry.remark && <p className="remark">{entry.remark}</p>}
          </div>
        )}
      </div>
    </section>;
  }
}

WorkExperience.defaultProps = {
  title: 'Work Experience',
  startDate: 'July 2015',
  entries: [
    {
      company: 'BinarCode',
      companyLink: 'https://www.linkedin.com/company/binar-code/',
      position: 'React Freelancer',
      start: 'July 2018',
      end: 'Present',
      milestones: {
        title: 'Milestones',
        items: [
          'Started working remotely on a project related to video streaming',
          'A team of 5 Front End developers, working in Sprints under the Agile Methodology'
        ],
      },
      specialSkills: {
        title: 'Special project skills',
        items: [
          '<b>React-Redux</b> project ecosystem',
          'The project is a rewrite of a website servicing thousands of users',
          'Integration with multiple API providers'
        ]
      }
    },
    {
      company: 'Digital1',
      companyLink: 'https://www.linkedin.com/company/digital1-gmbh/',
      position: 'Front End Developer',
      start: 'Oct 2017',
      end: 'June 2018',
      milestones: {
        title: 'Milestones',
        items: [
          'Started working with <b>Angular4</b> on an outsourcing project on retail',
          'Active collaboration with german colleagues and 1 more person in our office',
          'In February switched to <a href=\'https://www.visitor-analytics.io\'>Visitor Analytics</a> project and worked with <b>React</b>, <b>Redux</b> in a local team',
        ],
      },
      specialSkills: {
        title: 'Special project skills',
        items: [
          'Asynchronous flows with <a href=\'https://redux-saga.js.org\'><b>redux-saga</b></a>',
          'Development of cross-platform email templates',
          'Interaction with designer tools such as <a href=\'https://www.invisionapp.com\'>InVision</a> and <a href=\'https://zeplin.io\'>Zeplin</a>'
        ]
      }
    },
    {
      company: 'ISDC | Endava',
      companyLink: 'https://www.linkedin.com/company/endava/',
      position: 'Full Stack Java Developer',
      start: 'July 2015',
      end: 'Sep 2017',
      milestones: {
        title: 'Milestones',
        items: [
          'After internship, I entered a project about the stock market index in a team of 7 people',
          'Worked under Agile Methodology with monthly sprints and code review',
          'Got comfortable with <b>Java Spring</b>, <b>SQL</b>, <b>AngularJs</b> and <b>jQuery</b>',
          'Was promoted to Developer position after 1 year. I continued working on the same project, but in a smaller team.',
          'After 6 months switched project and started working as a full Front End developer in <b>AngularJs</b>'
        ]
      },
      specialSkills: {
        title: 'Special project skills',
        items: [
          'A complex project with a huge amount of functionality',
          'Write extensive queries using SQL',
          'Strict respect of the Agile Methodology'
        ]
      },
      remark: '*ISDC was bought by Endava at the beginning of 2017'
    }
  ]
};
