import React, {Component} from 'react';
import './App.css';

import {SideMenu} from "./side-menu/SideMenu";
import {AboutMe} from "./content/about-me/AboutMe";
import {Skills} from "./content/skills/Skills";
import {WorkExperience} from "./content/work-experience/WorkExperience";
import {Contact} from './content/contact/Contact';
import {Portfolio} from './content/portfolio/portfolio';

export default class App extends Component {
  render() {
    return (
        <div className="App">
          <SideMenu/>
          <div className="content">
            <Contact/>
            <AboutMe/>
            <Skills/>
            <WorkExperience/>
            <Portfolio/>
          </div>

        </div>
    );
  }
}

{/*<div className="w3-content">*/}

  {/*/!*<!-- The Grid -->*!/*/}
  {/*<div className="w3-row-padding">*/}
    {/*/!*<!-- Left Column -->*!/*/}
    {/*<div className="w3-third">*/}

      {/*<GeneralInfo/>*/}

      {/*<div className="w3-container w3-card-4 w3-white w3-text-grey">*/}
        // {/*/!*// <!-- Education -->*!/*/}
        {/*<br/>*/}
        {/*<p className="w3-large w3-text-theme">*/}
          {/*<b><i className="fa fa-graduation-cap fa-fw w3-margin-right w3-text-teal"/>Education</b>*/}
        {/*</p>*/}

        {/*<div className="w3-container">*/}
          {/*<h5 className="w3-opacity"><b>Technical University of Cluj-Napoca</b></h5>*/}
          {/*<h6 className="w3-text-teal"><i*/}
              {/*className="fa fa-calendar fa-fw w3-margin-right"/>2012 - 2016</h6>*/}
          {/*<p>Computer Science / *Bachelor Degree</p>*/}
          {/*<p><i>*/}
            {/*<small>* Did not get my diploma at present time</small>*/}
          {/*</i></p>*/}
        {/*</div>*/}


        // {/*/!*// <!-- Side projects -->*!/*/}
        {/*<p className="w3-large w3-text-theme">*/}
          {/*<b><i className="fa fa-laptop fa-fw w3-margin-right w3-text-teal"/>Other*/}
            {/*Projects</b>*/}
        {/*</p>*/}
        // {/*/!*// <!-- Gearbox -->*!/*/}
        {/*<div className="w3-container gearbox">*/}
          {/*<h5 className="w3-opacity">*/}
            {/*<b>Gearbox website</b>&nbsp&nbsp*/}
            {/*<a href="http://www.cutiivitezenapoca.ro/" target="_blank">*/}
              {/*<i className="fa fa-link fa-fw w3-margin-right w3-hover-opacity w3-text-teal"/>*/}
            {/*</a>*/}
            {/*<b>/ &nbsp ConturSoft</b>*/}
          {/*</h5>*/}
          {/*<p>Technology Stack:</p>*/}
          {/*<div className="flex-container">*/}
            {/*<div className="flex-child-1">*/}
              {/*<ul className="custom-ul">*/}
                {/*<li>HTML/CSS</li>*/}
                {/*<li>jQuery</li>*/}
              {/*</ul>*/}
            {/*</div>*/}
            {/*<div className="flex-child-2 padding-left-10">*/}
              {/*<ul className="custom-ul">*/}
                {/*<li>Google Search Console</li>*/}
                {/*<li>Bootstrap</li>*/}
              {/*</ul>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<hr/>*/}
        // {/*/!*// <!-- Diploma project -->*!/*/}
        {/*<div className="w3-container diploma-project">*/}
          {/*<h5 className="w3-opacity">*/}
            {/*<b>StudShare</b>*/}
            {/*<span className="w3-tag w3-teal w3-round pull-right">In progress</span>*/}
          {/*</h5>*/}
          {/*<p>Diploma project; a platform for students to store and organize their*/}
            {/*course materials.</p>*/}
          {/*<p>Technology Stack:</p>*/}
          {/*<div className="flex-container">*/}
            {/*<div className="flex-child-1">*/}
              {/*<ul className="custom-ul">*/}
                {/*<li><b>M</b>ongoDb</li>*/}
                {/*<li><b>E</b>xpress</li>*/}
                {/*<li><b>A</b>ngularJS</li>*/}
                {/*<li><b>N</b>odeJS</li>*/}
              {/*</ul>*/}
            {/*</div>*/}
            {/*<div className="flex-child-1">*/}
              {/*<ul className="custom-ul">*/}
                {/*<li>HTML/CSS</li>*/}
                {/*<li>Bootstrap</li>*/}
                {/*<li>Gulp</li>*/}
                {/*<li>Amazon S3</li>*/}
              {/*</ul>*/}
            {/*</div>*/}
          {/*</div>*/}

        {/*</div>*/}
      {/*</div>*/}


      {/*/!*<!-- End Left Column -->*!/*/}
    {/*</div>*/}
    {/*/!*<!-- Right Column -->*!/*/}
    {/*<div className="w3-twothird">*/}



      {/*</div>*/}
      {/*/!*<!-- End Grid -->*!/*/}
    {/*</div>*/}
    // {/*/!*// <!-- End Page Container -->*!/*/}
  {/*</div>*/}

  {/*<footer className="w3-container w3-teal w3-center w3-margin-top">*/}
    {/*<span>Find me on social media.</span> &nbsp*/}
    {/*<a href="https://www.linkedin.com/in/dumitru-motpan-1b76038b/" target="_blank">*/}
      {/*<i className="fa fa-linkedin w3-hover-opacity"/></a>*/}
    {/*<a href="https://github.com/dima000" target="_blank">*/}
      {/*<i className="fa fa-github w3-hover-opacity"/></a>*/}
    {/*<a href="https://www.facebook.com/dumitru.motpan" target="_blank">*/}
      {/*<i className="fa fa-facebook-official w3-hover-opacity"/></a>*/}
    {/*<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>*/}
    {/*</p>*/}
  {/*</footer>*/}
{/*</div>*/}