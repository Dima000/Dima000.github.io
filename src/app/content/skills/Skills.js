import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './skills.css';

export class Skills extends Component {
  render() {
    return <section className="skills-section" id="skills">
      <h2 className="title-area color-main">
        <span className="mr-3">{this.props.title}</span>
        <i className="fa fa-certificate mr-3"/>
      </h2>

      <div className="section-content row">
        <div className="col-md-4">
          <h4>{this.props.workingKnowledge}</h4>
          {this.props.workingItems.map((item, index) =>
              <p key={index}>{item}</p>
          )}
        </div>

        <div className="col-md-4">
          <h4>{this.props.basicKnowledge}</h4>
          {this.props.basicItems.map((item, index) =>
              <p key={index}>{item}</p>
          )}
        </div>

        <div className="col-md-4">
          <h4>{this.props.toolsKnowledge}</h4>
          {this.props.toolsItems.map((item, index) =>
              <p key={index}>{item}</p>
          )}
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
      "Angular 4 / AngularJs",
      "Bootstrap",
      "Sass / Less",
      "Java"
  ],
  basicItems: [
      "Node.js",
      "Express",
      "jQuery",
      "SQL",
      "Mongo DB"
  ],
  toolsItems: [
      "Git",
      "Webpack",
      "Jira",
      "Trello"
  ]
};
