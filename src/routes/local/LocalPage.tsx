import { RouteComponentProps } from "react-router-dom";
import React, { Fragment } from "react";
import { IAM } from "../../Layout";

export type LocalPageProps = RouteComponentProps<{}>;

declare global {
  interface Window {
    FB:any;
  }
}
let FB = window.FB;

const ClientID = '25e40720af524919ab40dc55fdfbfaf5';
const ClientSecret = 'd44f04d5b03b4ce8bcf6f2ce403baadf';

export class LocalPage extends React.Component<LocalPageProps> {

  componentDidMount() {

  }

  checkLoginState = () => {
    FB.getLoginStatus(function(response) {
      console.log(response);
    });
  }

  loginFB = () => {
    window.FB.getLoginStatus(function(response) {
      console.log(response);
      // statusChangeCallback(response);
    });
  };

  render() {
    return (
      <Fragment>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
          <div className="container">
            <a
              className="navbar-brand"
              href="/"
              target="_blank"
            >
              <strong><span className="text-danger">Hangout</span>.Moscow</strong>
            </a>
            <IAM active="local" />

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/#experiences"
                  >
                    Experiences
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/#locations"
                  >
                    Locations
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/local"
                  >
                    I am local!
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <a
                    href="https://www.facebook.com/mdbootstrap"
                    className="nav-link"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://twitter.com/MDBootstrap"
                    className="nav-link"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link border border-light rounded"
                  >
                    Subscribe for events
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="view full-page-intro"
          style={{
            backgroundImage: "url('/logo.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row wow fadeIn">
                <div className="col-lg-7 mb-4 white-text text-center text-md-left">
                  <h1 className="display-4 font-weight-bold">
                    <span style={{ color: "red" }}>Любишь концерты?</span> Изучаешь иностранный язык?
                  </h1>

                  <hr className="hr-light" />

                  <h2>
                    <strong>Помоги преодолеть языковой барьер с&nbsp;помощью музыки!</strong>
                  </h2>

                  <p className="mb-4 d-none d-md-block">
                    <h4>
                      Ты можешь выступить в качестве проводника в мир российской музыки
                      для иностранных туристов
                    </h4>
                  </p>

                  {/* <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" className="btn btn-indigo btn-lg">Start free tutorial
              <i className="fas fa-graduation-cap ml-2"></i>
            </a>*/}
                </div>

                <div className="col-lg-5 col-xl-5 mb-4">
                  <div className="_card">
                    <div className="_card-body">

{/*<div className="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="true"></div>*/}

                      <button
                        className="btn btn-indigo btn-lg"
                        onClick={this.loginFB}
                      >
                        <i className="fab fa-facebook-f"></i>&nbsp; Login with
                        Facebook
                      </button>

                      <button
                        className="btn btn-success btn-lg"
                        onClick={this.loginFB}
                      >
                        <i className="fab fa-spotify"></i>&nbsp; Login with
                        Spotify
                      </button>

                      {/*<form name="">
                  <h3 className="dark-grey-text text-center">
                    <strong>Write to us:</strong>
                  </h3>
                  <hr/>

                  <div className="md-form">
                    <i className="fas fa-user prefix grey-text"></i>
                    <input type="text" id="form3" className="form-control"/>
                    <label>Your name</label>
                  </div>
                  <div className="md-form">
                    <i className="fas fa-envelope prefix grey-text"></i>
                    <input type="text" id="form2" className="form-control"/>
                    <label>Your email</label>
                  </div>

                  <div className="md-form">
                    <i className="fas fa-pencil-alt prefix grey-text"></i>
                    <textarea id="form8" className="md-textarea"></textarea>
                    <label>Your message</label>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-indigo">Send</button>
                    <hr/>
                    <fieldset className="form-check">
                      <input type="checkbox" className="form-check-input" id="checkbox1"/>
                      <label className="form-check-label dark-grey-text">Subscribe me to the newsletter</label>
                    </fieldset>
                  </div>

                </form>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
