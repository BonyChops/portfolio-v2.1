import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import logo from './logo.svg';
import Typist from 'react-typist';
import Cookies from "js-cookie";
const ReactDefaultPage = (props) => {
    const [screenUp, setScreenUp] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setScreenUp(true);
        }, 0);
        setTimeout(() => {
            setScreenUp(false);
            props.accessor({
                defaultAnimateFinished: true
            });
            Cookies.set('loginAnimatePlayed', true);
        }, 2800);

    }, [])
    console.log(screenUp)
    return (
        <div className="header fixed top-0 left-0 w-screen z-40" style={{ "overflow": "hidden" }}>

            <CSSTransition

                in={screenUp}
                timeout={700}
                classNames="windows-animation"
                onExited={() => setScreenUp(false)}
                unmountOnExit
            >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>

                        <Typist delayGenerator={(mean, std, current) => {
                            if (current.lineIdx <= 2) {
                                return 10;
                            } else {
                                return 20;
                            }
                        }}>
                            <span> Edit <code>src/App.js</code> and save to reload. </span>
                            <Typist.Backspace count={36} delay={500} />
                            <span> Developed! </span>
                        </Typist>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                   {/*  <button onClick={() => setScreenUp(false)}>delete</button> */}
                </header>
            </CSSTransition>
        </div>
    )
}

export default ReactDefaultPage;