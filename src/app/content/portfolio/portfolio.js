import React, { Component } from 'react';
import portfolioImg from '../../../assets/images/portfolio1.png';
import './portfolio.css';

export class Portfolio extends Component {
  render() {
    return <section className="portfolio-section" id="portfolio">
      <h2 className="title-area">
        <span>{this.props.title}</span>
        <i className="fa fa-check-square mr-3"/>
      </h2>

      <div className="section-content row">

        <div className="col-lg-5 mb-5">
          <h4>
            {this.props.projectType}
            <a href={this.props.websiteUrl}>{'website'}</a>
          </h4>
          <p>{this.props.description}</p>
        </div>

        <div className="col-lg-7 mb-5">
          <div className="image-container">
            <img src={portfolioImg} alt="portfolio"/>
          </div>
        </div>

        <div className="col-md-5 col-sm-12 group mb-4">
          <h5>{this.props.techStack.title}</h5>
          <ul>
            {this.props.techStack.items.map((item, index) =>
              <li key={index} className="">{item}</li>
            )}
          </ul>
        </div>

        <div className="col-md-7 col-sm-12 group">
          <h5>{this.props.projectFeatures.title}</h5>
          <ul>
            {this.props.projectFeatures.items.map((item, index) =>
              <li key={index} className="">{item}</li>
            )}
          </ul>
        </div>
      </div>
    </section>;
  }
}

Portfolio.defaultProps = {
  title: 'Portfolio',
  projectType: 'Small \nbusiness\n',
  websiteUrl: 'http://traducator-portugheza.ro/en/main',
  websitePretty: 'traducator-portugheza.ro',

  description: 'My friend wanted a website to promote her services, authorized translations. ' +
    'I handled the full development of the project, including the design and deployment',
  techStack: {
    title: 'Technologies',
    items: [
      'React',
      'Bootstrap',
      'CPanel deployment'
    ]
  },
  projectFeatures: {
    title: 'Project features',
    items: [
      'Eye catchy design & Responsive Layout',
      'Localization in 3 languages',
      'Ability to send email from the website',
      'SEO friendly via Google Search Console'
    ]
  }
};
