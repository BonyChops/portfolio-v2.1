import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import mountainImage from "../../resources/notfree/mountains.jpeg"
import Icon from "../../resources/icon_new2_white.png"
import { TypeAnimation } from 'react-type-animation';

const LoginAnimation = (props) => {
    const [screenUp, setScreenUp] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setScreenUp(true);
        }, 500);
    }, [])
    return (
        <div className="fixed top-0 left-0 z-50" style={{ "overflow": "hidden" }}>

            <CSSTransition

                in={screenUp}
                timeout={700}
                classNames="login-animation"
                onExited={() => setScreenUp(false)}
                unmountOnExit
            >
                <div>
                    <div className="place-content-center w-screen h-screen bg-cover bg-center" style={{ backgroundImage: `url(${mountainImage})` }}>
                        <div className="w-full h-full bg-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-40 py-48">
                            <img className="mx-auto left-0 right-0 w-48 rounded-full" src={Icon} alt="" />
                            <p className="text-6xl my-14 text-gray-200">Bony_Chops</p>
                            {/* <p className="text-3xl my-8 text-gray-200">{screenUp ? null : "Welcome"}</p> */}
                            <div className="bg-white h-12 w-80 mx-auto left-0 right-0 border-2 border-gray-200 text-3xl text-left">
                                <TypeAnimation
                                    sequence={[
                                        500,
                                        '●●●●●●●●',
                                        500,
                                        () => {
                                            setScreenUp(false);
                                            props.accessor({ callReactDefault: true })
                                        }
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )

}
export default LoginAnimation;