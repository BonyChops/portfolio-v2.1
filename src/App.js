import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import ReactDefaultPage from './components/ReactDefaultPage/ReactDefaultPage';
import './App.css';
import LoginAnimation from './components/LoginAnimation/LoginAnimation';
import React from 'react';
import Top from "./components/Top/Top";
import Socials from "./components/Socials/Socials";
import Works from "./components/Works/Works";
import RedirectToV1 from "./components/RedirectToV1/RedirectToV1";
import WIP from "./components/WIP/WIP";
import Cookies from "js-cookie";
import ReactGA from "react-ga4";
import NotFound from "./components/NotFound/NotFound";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      callReactDefault: false,
      defaultAnimateFinished: false
    }
  }

  componentDidMount() {
    console.log(process.env.REACT_APP_GTAG)
    ReactGA.initialize(process.env.REACT_APP_GTAG);
  }



  accessor = (state) => {
    this.setState(state);
  }

  render = () => {
    const isTop = (window.location.pathname === "/");
    return (
      <div className="App">
        {/* <ReactDefaultPage /> */}
        {isTop && Cookies.get("loginAnimatePlayed") !== 'true' && <LoginAnimation accessor={this.accessor} />}
        {isTop && (this.state.callReactDefault) && Cookies.get("loginAnimatePlayed") !== 'true' ? <ReactDefaultPage accessor={this.accessor} /> : null}
        {isTop && !this.state.defaultAnimateFinished && Cookies.get("loginAnimatePlayed") !== 'true' && <div className="bg-white z-30 w-screen h-screen fixed top-0 left-0"></div>}
        <div className="">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Top} />
              <Route path="/socials" component={Socials} />
              <Route path="/works" component={Works} />
              <Route path="/v1" component={RedirectToV1} />
              <Route path="/wip" component={WIP} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }

}

export default (App);
