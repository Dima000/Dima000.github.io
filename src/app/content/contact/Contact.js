import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './contact.css';

export class Contact extends Component {
  render() {
    return <section id="contact" className="contact-section">
      <h2 className="title-area color-main">
        <span className="mr-4">{this.props.title}</span>
        <i className="fa fa-address-card"/>
      </h2>

      <div className="section-content row">
        <div className="col-md-4 icons-section">
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

        <div className="col-md-4 icons-section">
          <p><i className="fa fa-home"/>{this.props.city}</p>
          <p><i className="fa fa-flag"/>{this.props.nationality}</p>
        </div>

        <div className="col-md-4 icons-section social-icons">
          <p><a href={this.props.linkedIn} rel="noopener noopener">
            <i className="fa fa-linkedin"/>
          </a></p>
          <p><a href={this.props.github} rel="noreferrer noopener">
            <i className="fa fa-github"/>
          </a></p>
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
  website: "dima000.github.io",
  websiteHref: "https://dima000.github.io/",
  city: "Cluj-Napoca",
  nationality: "Romanian, Moldavian",
  linkedIn: "https://www.linkedin.com/in/dumitru-motpan-1b76038b/",
  github: "https://github.com/Dima000"
};
