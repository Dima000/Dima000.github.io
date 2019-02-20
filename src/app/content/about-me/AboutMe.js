import React, {Component} from 'react';
import ReactHtmlParser from "react-html-parser";
import './style.scss';

export class AboutMe extends Component {
  render() {
    return (
        <section className="about-me-section" id="about-me">
          <h2 className="title-area">
            <span>{this.props.title}</span>
            <i className="fa fa-universal-access"/>
          </h2>

          <div className="section-content">
            <p>{ReactHtmlParser(this.props.text1)}</p>
            <p>{this.props.text2}</p>
            <p>{this.props.text3}</p>
            <hr/>
            <p>{ReactHtmlParser(this.props.text4)}</p>
          </div>
        </section>
    );
  }
}

AboutMe.defaultProps = {
  title: "About Me",
  text1: "Hi there, my name is Dumitru(Dima) Moțpan.<br/>I am a software developer with a passion for web technologies and a soft spot for JavaScript.",
  text2: "I like building beautiful applications with a keen focus on user experience and scalability. My preferred work environment is a team where I can bring my commitment to the table." +
    " Both English and Russian are languages I can freely express myself in.",
  text3: "Alongside programming, I enjoy reading, playing volleyball and least but not last spending time with people dear to me.",
  text4: "If I may be of help to you, <a href='#contact'>contact me</a> via email or phone."
};
