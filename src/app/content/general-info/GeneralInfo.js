import React, {Component} from 'react';
import './style.css';

import avatar from '../../../assets/images/avatar.jpg';
import flagRo from '../../../assets/images/ro.svg';
import flagEn from '../../../assets/images/gb.svg';
import flagRu from '../../../assets/images/ru.svg';
import flagEs from '../../../assets/images/es.svg';

export class GeneralInfo extends Component {
  render() {
    return (
        <div className="w3-white w3-text-grey w3-card-4 w3-margin-bottom">
          <div className="w3-display-container">
            <img className="w3-padding avatar" src={avatar} alt="Avatar"/>
            <div className="w3-container"><h2>Dumitru Moțpan</h2></div>
          </div>
          <div className="w3-container padding-19-bottom">
            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"/>Web Developer</p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"/>Cluj-Napoca</p>
            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"/>dumitru.motpan@gmail.com</p>
            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"/>(+40) 751 524 368</p>

            <br/>

            <p className="w3-large w3-text-theme">
              <b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"/>Languages</b>
            </p>
            <div className="language-group">
              <div className="language-title"><img src={flagRo}/> Romanian</div>
              <div className="language-stars">
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
              </div>
            </div>
            <div className="language-group">
              <div className="language-title">
                <img src={flagEn}/> English
              </div>
              <div className="language-stars">
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right"/>
              </div>
            </div>
            <div className="language-group">
              <div className="language-title">
                <img src={flagRu}/> Russian
              </div>
              <div className="language-stars">
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right"/>
              </div>
            </div>
            <div className="language-group">
              <div className="language-title">
                <img src={flagEs}/> Spanish
              </div>
              <div className="language-stars">
                <i className="fa fa-star fa-fw w3-margin-right w3-text-teal"/>
                <i className="fa fa-star fa-fw w3-margin-right"/>
                <i className="fa fa-star fa-fw w3-margin-right"/>
                <i className="fa fa-star fa-fw w3-margin-right"/>
                <i className="fa fa-star fa-fw w3-margin-right"/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
