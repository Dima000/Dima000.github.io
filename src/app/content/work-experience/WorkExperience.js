import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './work-experience.scss';

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

            {entry.milestones.map((category, key) => (
              <div key={key}>
                <h6>{category.title}</h6>
                <ul>
                  {category.items.map((text, key) =>
                    <li key={key}>{ReactHtmlParser(text)}</li>
                  )}
                </ul>
              </div>
            ))}

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
      position: 'Front End Developer',
      start: 'July 2018',
      end: 'Present',
      milestones: [{
        title: 'Special Remarks',
        items: [
          'Developed and took active role in the architecture of a website builder implemented in ' +
          '<a href="https://vuejs.org/">Vue.js</a> and <a href="https://nuxtjs.org/">Nuxt.js</a> for the server side rendering',
          'The builder is something similar to <a href="https://squarespace.com">Squarespace</a>, but targets websites for job posting',
          'Also, worked for 4 months on a enterprise React project related to video streaming'
        ],
      }]
    },
    {
      company: 'Digital1',
      companyLink: 'https://www.linkedin.com/company/digital1-gmbh/',
      position: 'Front End Developer',
      start: 'Oct 2017',
      end: 'June 2018',
      milestones: [{
        title: 'Special Remarks',
        items: [
          'Worked for 3 months together with colleagues from Germany on a <b>Angular4</b> project about real estate rental',
          'In February switched to <a href=\'https://www.visitor-analytics.io\'>Visitor Analytics</a> project and worked in the <b>React</b> - <b>Redux</b> tech stack',
          'Developed asynchronous flows using <a href=\'https://redux-saga.js.org\'><b>redux-saga</b></a>',
          'Interacted with designer tools such as <a href=\'https://www.invisionapp.com\'>InVision</a> and <a href=\'https://zeplin.io\'>Zeplin</a>'
        ],
      }]
    },
    {
      company: 'ISDC | Endava',
      companyLink: 'https://www.linkedin.com/company/endava/',
      position: 'Full Stack Java Developer',
      start: 'July 2015',
      end: 'Sep 2017',
      milestones: [{
        title: 'Special Remarks',
        items: [
          'After internship, I entered a project about the stock market index(DJSI) in a team of 7 people',
          'Got comfortable with <b>Java Spring</b>, <b>SQL</b>, <b>AngularJs</b> and <b>jQuery</b> across 2 projects from the same client',
          'Wrote extensive queries in SQL as per the business requirements',
        ]
      }],
      remark: '*ISDC was bought by Endava at the beginning of 2017'
    }
  ]
};
