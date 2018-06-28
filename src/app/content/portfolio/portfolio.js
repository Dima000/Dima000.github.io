import React, {Component} from 'react';
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

        <div className="col-md-12 mb-4">
          <h4>{this.props.projectType}</h4>
          <p className="item-website">
            <a href={this.props.websiteUrl}>
              <i className="fa fa-globe"/>{this.props.websiteUrl}
            </a>
          </p>
        </div>

        <div className="col-lg-6 col-md-12 mb-4">
          <div className="image-container">
            <img src={portfolioImg} alt="portfolio"/>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 mb-4">
          <p>{this.props.description}</p>
        </div>

        <div className="col-md-6 col-sm-12 group mb-4">
          <h5>{this.props.techStack.title}</h5>
          <ul>
            {this.props.techStack.items.map((item, index) =>
                <li key={index} className="">{item}</li>
            )}
          </ul>
        </div>

        <div className="col-md-6 col-sm-12 group">
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
  title: "Portfolio",
  projectType: "Website to promote business",
  websiteUrl: "http://traducator-portugheza.ro",

  description: "My friend wanted a website to promote her services, authorized translations. I build the website, handled the design and deployment of the project.",
  techStack: {
    title: "Technologies",
    items: [
      "React",
      "Bootstrap",
      "CPanel deployment"
    ]
  },
  projectFeatures: {
    title: "Project features",
    items: [
      "Eye catchy design",
      "3 languages",
      "Responsive layout",
      "Send email from website"
    ]
  }
};
