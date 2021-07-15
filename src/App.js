import Header from './components/Header/Header';
import ReactDefaultPage from './components/ReactDefaultPage/ReactDefaultPage';
import './App.css';
import LoginAnimation from './components/LoginAnimation/LoginAnimation';
import React from 'react';

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
        <ReactDefaultPage />
        <LoginAnimation accessor={this.accessor} />
        {/* {(this.state.callReactDefault) ? <ReactDefaultPage /> : null} */}
        <Header />
      </div>
    );
  }

}

export default App;
