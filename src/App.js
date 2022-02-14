import { BrowserRouter as Router, Route } from "react-router-dom";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      callReactDefault: false
    }
  }

  accessor = (state) => {
    this.setState(state);
  }

  render = () => {
    return (
      <div className="App">
        {/* <ReactDefaultPage /> */}
        {/* <LoginAnimation accessor={this.accessor} /> */}
        {/* {(this.state.callReactDefault) ? <ReactDefaultPage /> : null} */}
        <div className="">
          <Router>
            <Header />
            <Route exact path="/" component={Top} />
            <Route path="/socials" component={Socials} />
            <Route path="/works" component={Works} />
            <Route path="/v1" component={RedirectToV1} />
            <Route path="/wip" component={WIP} />
          </Router>
        </div>
      </div>
    );
  }

}

export default App;
