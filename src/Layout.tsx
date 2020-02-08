import React, { Fragment, Component } from "react";

import Backendless from 'backendless';

import {Map} from "./components/Map/Map"
import {BottomCardBlock} from "./fragments/BottomCardBlock"
import {Header, HeaderTitle, HeaderTitleColored, HeaderSub, SocialBlock} from "./components/Header/Header"



Backendless.initApp('5491463D-49B2-248C-FF2E-E755E025FF00', '9BD34E37-604C-44CD-80E2-F1F76DC6D66F');

class Layout extends Component {


  loginFB = () => {
    const stayLoggedIn = true;
    Backendless.UserService.loginWithFacebookSdk( { email: 'email' },
                                              stayLoggedIn,
                                                /*options*/ ) 
   .then( function( result ) {
      console.log(result);
    })
   .catch( function( error ) {
      console.error(error);
    });
  }

    render() {
    return (
<Fragment>
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    <div className="container">

      <a className="navbar-brand" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
        <strong>MDB</strong>
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://mdbootstrap.com/docs/jquery/" target="_blank">About MDB</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank">Free download</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">Free tutorials</a>
          </li>
        </ul>

        <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <a href="https://www.facebook.com/mdbootstrap" className="nav-link" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://twitter.com/MDBootstrap" className="nav-link" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="nav-link border border-light rounded"
              target="_blank">
              <i className="fab fa-github mr-2"></i>MDB GitHub
            </a>
          </li>
        </ul>

      </div>

    </div>
  </nav>

  <div className="view full-page-intro" style={{
    backgroundImage: "url('/logo.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>

    <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

      <div className="container">

        <div className="row wow fadeIn">

          <div className="col-md-6 mb-4 white-text text-center text-md-left">

            <h1 className="display-4 font-weight-bold">
              <span style={{ color: 'red' }}>#hangout</span>likealocal
            </h1>

            <hr className="hr-light"/>

            <h2>
              <strong>Overcome the language barrier through music</strong>
            </h2>

            <p className="mb-4 d-none d-md-block">
              <strong>Pick experiences, choose concerts near you, find locals to attend events together.</strong>
            </p>

           {/* <a target="_blank" href="https://mdbootstrap.com/education/bootstrap/" className="btn btn-indigo btn-lg">Start free tutorial
              <i className="fas fa-graduation-cap ml-2"></i>
            </a>*/}

          </div>

          <div className="col-md-6 col-xl-5 mb-4">

            <div className="card">

              <div className="card-body">

                <button className="btn btn-indigo btn-lg" onClick={this.loginFB}>
                  <i className="fab fa-facebook-f"></i>&nbsp;
                  Login with Facebook
                </button>

                <button className="btn btn-success btn-lg" onClick={this.loginFB}>
                  <i className="fab fa-spotify"></i>&nbsp;
                  Login with Spotify
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

  <main>

    
  <Map width="100%" height="327px" />

  <div className="container">
  <BottomCardBlock />
  </div>

    <div className="container">

      <section className="mt-5 wow fadeIn">

        <div className="row">

          <div className="col-md-6 mb-4">

            <img src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg" className="img-fluid z-depth-1-half" alt=""/>

          </div>

          <div className="col-md-6 mb-4">

            <h3 className="h3 mb-3">Material Design for Bootstrap</h3>
            <p>This template is created with Material Design for Bootstrap (
              <strong>MDB</strong> ) framework.</p>
            <p>Read details below to learn more about MDB.</p>

            <hr/>

            <p>
              <strong>400+</strong> material UI elements,
              <strong>600+</strong> material icons,
              <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.
              <strong>Free for personal and commercial use.</strong>
            </p>

            <a target="_blank" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" className="btn btn-indigo btn-md">Download
              <i className="fas fa-download ml-1"></i>
            </a>
            <a target="_blank" href="https://mdbootstrap.com/docs/jquery/components/" className="btn btn-indigo btn-md">Live demo
              <i className="far fa-image ml-1"></i>
            </a>

          </div>

        </div>

      </section>

      <hr className="my-5"/>

      <section>

        <h3 className="h3 text-center mb-5">About MDB</h3>

        <div className="row wow fadeIn">

          <div className="col-lg-6 col-md-12 px-4">

            <div className="row">
              <div className="col-1 mr-3">
                <i className="fas fa-code fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Bootstrap 4</h5>
                <p className="grey-text">Thanks to MDB you can take advantage of all feature of newest Bootstrap 4.</p>
              </div>
            </div>

            <div style={{height:'30px'}}></div>

            <div className="row">
              <div className="col-1 mr-3">
                <i className="fas fa-book fa-2x blue-text"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Detailed documentation</h5>
                <p className="grey-text">We give you detailed user-friendly documentation at your disposal. It will help you to implement your ideas
                  easily.
                </p>
              </div>
            </div>

            <div style={{height:'30px'}}></div>

            <div className="row">
              <div className="col-1 mr-3">
                <i className="fas fa-graduation-cap fa-2x cyan-text"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Lots of tutorials</h5>
                <p className="grey-text">We care about the development of our users. We have prepared numerous tutorials, which allow you to learn
                  how to use MDB as well as other technologies.</p>
              </div>
            </div>

          </div>

          <div className="col-lg-6 col-md-12">

            <p className="h5 text-center mb-4">Watch our "5 min Quick Start" tutorial</p>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/cXTThxoywNQ" ></iframe>
            </div>
          </div>

        </div>

      </section>

      <hr className="my-5"/>

      <section>

        <h2 className="my-5 h3 text-center">Not enough?</h2>

        <div className="row features-small mb-5 mt-3 wow fadeIn">

          <div className="col-md-4">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Free for personal and commercial use</h6>
                <p className="grey-text">Our license is user-friendly. Feel free to use MDB for both private as well as commercial projects.
                </p>
                <div style={{height:'15px'}}></div>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">400+ UI elements</h6>
                <p className="grey-text">An impressive collection of flexible components allows you to develop any project.
                </p>
                <div style={{height:'15px'}}></div>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">600+ icons</h6>
                <p className="grey-text">Hundreds of useful, scalable, vector icons at your disposal.</p>
                <div style={{height:'15px'}}></div>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Fully responsive</h6>
                <p className="grey-text">It doesn't matter whether your project will be displayed on desktop, laptop, tablet or mobile phone. MDB
                  looks great on each screen.</p>
                <div style={{height:'15px'}}></div>
              </div>
            </div>
          </div>

          <div className="col-md-4 flex-center">
            <img src="https://mdbootstrap.com/img/Others/screens.png" alt="MDB Magazine Template displayed on iPhone" className="z-depth-0 img-fluid"/>
          </div>

          <div className="col-md-4 mt-2">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">70+ CSS animations</h6>
                <p className="grey-text">Neat and easy to use animations, which will increase the interactivity of your project and delight your visitors.
                </p>
                <div style={{height:'15px'}}></div>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Plenty of useful templates</h6>
                <p className="grey-text">Need inspiration? Use one of our predefined templates for free.</p>
                <div style={{height:'15px'}}></div>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Easy installation</h6>
                <p className="grey-text">5 minutes, a few clicks and... done. You will be surprised at how easy it is.
                </p>
                <div style={{height:'15px'}}></div>
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Easy to use and customize</h6>
                <p className="grey-text">Using MDB is straightforward and pleasant. Components flexibility allows you deep customization. You will
                  easily adjust each component to suit your needs.</p>
                <div style={{height:'15px'}}></div>
              </div>
            </div>
          </div>

        </div>

      </section>

      <hr className="mb-5"/>

      <section>

        <h2 className="my-5 h3 text-center">...and even more</h2>

        <div className="row features-small mt-5 wow fadeIn">

          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="fab fa-firefox fa-2x mb-1 indigo-text" aria-hidden="true"></i>
              </div>
              <div className="col-10 mb-2 pl-3">
                <h5 className="feature-title font-bold mb-1">Cross-browser compatibility</h5>
                <p className="grey-text mt-2">Chrome, Firefox, IE, Safari, Opera, Microsoft Edge - MDB loves all browsers; all browsers love MDB.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-level-up-alt fa-2x mb-1 indigo-text" aria-hidden="true"></i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Frequent updates</h5>
                <p className="grey-text mt-2">MDB becomes better every month. We love the project and enhance as much as possible.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-comments fa-2x mb-1 indigo-text" aria-hidden="true"></i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Active community</h5>
                <p className="grey-text mt-2">Our society grows day by day. Visit our forum and check how it is to be a part of our family.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-code fa-2x mb-1 indigo-text" aria-hidden="true"></i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">jQuery 3.x</h5>
                <p className="grey-text mt-2">MDB is integrated with newest jQuery. Therefore you can use all the latest features which come along with
                  it.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row features-small mt-4 wow fadeIn">

          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-cubes fa-2x mb-1 indigo-text" aria-hidden="true"></i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Modularity</h5>
                <p className="grey-text mt-2">Material Design for Bootstrap comes with both, compiled, ready to use libraries including all features as
                  well as modules for CSS (SASS files) and JS.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-question fa-2x mb-1 indigo-text" aria-hidden="true"></i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Technical support</h5>
                <p className="grey-text mt-2">We care about reliability. If you have any questions - do not hesitate to contact us.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-th fa-2x mb-1 indigo-text" aria-hidden="true"></i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">Flexbox</h5>
                <p className="grey-text mt-2">MDB fully supports Flex Box. You can forget about alignment issues.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="row">
              <div className="col-2">
                <i className="far fa-file-code fa-2x mb-1 indigo-text" aria-hidden="true"></i>
              </div>
              <div className="col-10 mb-2">
                <h5 className="feature-title font-bold mb-1">SASS files</h5>
                <p className="grey-text mt-2">Arranged and well documented .scss files can't wait until you compile them.</p>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  </main>

  <footer className="page-footer text-center font-small mt-4 wow fadeIn">

    <div className="pt-4">
      <a className="btn btn-outline-white" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank" role="button">Download MDB
        <i className="fas fa-download ml-2"></i>
      </a>
      <a className="btn btn-outline-white" href="https://mdbootstrap.com/education/bootstrap/" target="_blank" role="button">Start free tutorial
        <i className="fas fa-graduation-cap ml-2"></i>
      </a>
    </div>

    <hr className="my-4"/>

    <div className="pb-4">
      <a href="https://www.facebook.com/mdbootstrap" target="_blank">
        <i className="fab fa-facebook-f mr-3"></i>
      </a>

      <a href="https://twitter.com/MDBootstrap" target="_blank">
        <i className="fab fa-twitter mr-3"></i>
      </a>

      <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank">
        <i className="fab fa-youtube mr-3"></i>
      </a>

      <a href="https://plus.google.com/u/0/b/107863090883699620484" target="_blank">
        <i className="fab fa-google-plus-g mr-3"></i>
      </a>

      <a href="https://dribbble.com/mdbootstrap" target="_blank">
        <i className="fab fa-dribbble mr-3"></i>
      </a>

      <a href="https://pinterest.com/mdbootstrap" target="_blank">
        <i className="fab fa-pinterest mr-3"></i>
      </a>

      <a href="https://github.com/mdbootstrap/bootstrap-material-design" target="_blank">
        <i className="fab fa-github mr-3"></i>
      </a>

      <a href="http://codepen.io/mdbootstrap/" target="_blank">
        <i className="fab fa-codepen mr-3"></i>
      </a>
    </div>

    <div className="footer-copyright py-3">
      © 2019 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank"> MDBootstrap.com </a>
    </div>

  </footer>

</Fragment>

)
}
};

export default Layout;