import React, {Component} from 'react';
import PropTypes from 'prop-types';

import codinImg from '../../../assets/images/codingame-logo.png';
import inImg from '../../../assets/images/in-logo.png';
import gitbuhImg from '../../../assets/images/github-logo.png';
import './contact.css';

export class Contact extends Component {
  render() {
    return <section id="contact" className="contact-section">
      <h2 className="title-area">
        <span>{this.props.title}</span>
        <i className="fa fa-address-card"/>
      </h2>

      <div className="section-content row">
        <div className="col-12 col-sm-6 icons-section">
          <p><a href={`mailto:${this.props.email}`}>
            <i className="fa fa-envelope"/>{this.props.email}
          </a></p>
          <p><a href={this.props.phoneHref}>
            <i className="fa fa-phone"/>{this.props.phone}
          </a></p>
          <p className="item-website"><a href={this.props.websiteHref}>
            <i className="fa fa-globe"/>{this.props.website}
          </a></p>
        </div>

        <div className="col-12 col-sm-6 icons-section">
          <p><i className="fa fa-home"/>{this.props.city}</p>
          <p><i className="fa fa-flag"/>{this.props.nationality}</p>
        </div>

        <div className="col-12 icons-section social-icons">
          <a href={this.props.codinGame} rel="noopener noopener">
            <img src={codinImg} alt="codingame"/>
          </a>

          <a href={this.props.github} rel="noopener noopener">
            <img src={gitbuhImg} alt="github"/>
          </a>

          <a href={this.props.linkedIn} rel="noopener noopener">
            <img src={inImg} alt="linkedIn"/>
          </a>
        </div>

      </div>
    </section>;
  }
}

Contact.propTypes = {
  title: PropTypes.string
};

Contact.defaultProps = {
  title: "Contact",
  email: "dumitru.motpan@gmail.com",
  phone: "(+40) 751 524 368",
  phoneHref: "tel:+40751524368",
  website: "https://dima000.github.io",
  websiteHref: "https://dima000.github.io/",
  city: "Cluj-Napoca",
  nationality: "Romanian, Moldavian",
  linkedIn: "https://www.linkedin.com/in/dumitru-motpan-1b76038b/",
  github: "https://github.com/Dima000",
  codinGame: "https://www.codingame.com/profile/8d1d5b47adad9549278882e069953e283825911"
};
