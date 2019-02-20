import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './skills.scss';

export class Skills extends Component {
  render() {
    return <section className="skills-section" id="skills">
      <h2 className="title-area">
        <span>{this.props.title}</span>
        <i className="fa fa-certificate mr-3"/>
      </h2>

      <div className="section-content row">
        <div className="col-md-12 mb-5 skill-group">
          <h4>{this.props.workingKnowledge}</h4>
          <div className="d-flex skill-list">
            {this.props.workingItems.map((item, index) =>
                <span key={index} className="skill-item">{item}</span>
            )}
          </div>
        </div>

        <div className="col-md-12 mb-5 skill-group">
          <h4>{this.props.basicKnowledge}</h4>
          <div className="d-flex skill-list">
            {this.props.basicItems.map((item, index) =>
                <span key={index} className="skill-item">{item}</span>
            )}
          </div>
        </div>

        <div className="col-md-12 skill-group">
          <h4>{this.props.toolsKnowledge}</h4>
          <div className="d-flex skill-list">
            {this.props.toolsItems.map((item, index) =>
                <span key={index} className="skill-item">{item}</span>
            )}
          </div>
        </div>

      </div>
    </section>;
  }
}

Skills.propTypes = {
  title: PropTypes.string
};

Skills.defaultProps = {
  title: "Skills",
  workingKnowledge: "Working Knowledge",
  basicKnowledge: "Basic Knowledge",
  toolsKnowledge: "Tools",

  workingItems: [
    "React",
    "Angular 4",
    "AngularJs",
    "Bootstrap",
    "Sass",
    "Java",
    "SQL",
    "jQuery"
  ],
  basicItems: [
    "Node.js",
    "Express",
    "Mongo DB"
  ],
  toolsItems: [
    "Git",
    "Webpack",
    "Jira",
    "Trello"
  ]
};
