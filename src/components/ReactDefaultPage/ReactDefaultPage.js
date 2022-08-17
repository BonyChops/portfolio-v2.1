import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import logo from './logo.svg';
import { TypeAnimation } from 'react-type-animation';
import Cookies from "js-cookie";
const ReactDefaultPage = (props) => {
    const [screenUp, setScreenUp] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setScreenUp(true);
        }, 0);
        /* setTimeout(() => {
            setScreenUp(false);
            props.accessor({
                defaultAnimateFinished: true
            });
            Cookies.set('loginAnimatePlayed', true);
        }, 2800); */

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
                        <TypeAnimation
                            sequence={[
                                'Edit src/App.js and save to reload.',
                                1000,
                                'Developed!',
                                500,
                                () => {
                                    setScreenUp(false);
                                    props.accessor({
                                        defaultAnimateFinished: true
                                    });
                                    Cookies.set('loginAnimatePlayed', true);
                                }
                            ]}
                            speed={75}
                            wrapper="span"
                            cursor={true}
                        />
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