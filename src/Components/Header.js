import React, { Component } from "react";

class Header extends Component {
  render() {

    // renderiza los siguientes datos tomados del .json ResumeData
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      //var description = this.props.data.description;
      //var jobDescription = this.props.data.jobDescription;
      //var employer = this.props.data.employer;
      //var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Inicio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">

                Acerca de
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resumen
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
              Mis trabajos
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
              Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Soy {name}.</h1>
            <h3>
             {/*Soy  <span>{city}</span> based */} <span>{occupation}</span>{/**{description}<span>{employer}</span> where I <span> {jobDescription}</span>. */}
              
              
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
