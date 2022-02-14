import v2icon from "../../resources/icon_new2_white_circle.png"
import v1icon from "../../resources/youtube_icon.jpg"
import RightArrow from "../../resources/right";
import Warn from "../../resources/warn";
import { useLocation } from "react-router";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const RedirectToV1 = (props) => {
    useEffect(() => {
        ReactGA.send("pageview");

        return () => { }
    }, []);

    const search = useLocation().search;

    const query2 = new URLSearchParams(search);
    const redirectQuery = query2.get("redirect");
    return (<div className="text-white bg-black pt-16 min-h-full font-bold h-screen">
        <div className="py-16 xl:px-72 md:px-36 sm:px-16 px-4 xl:mx-36 md:mx-16">
            <h1 className="text-center text-4xl mb-2">旧サイト(v1)に移動します</h1>
            <p className="text-center text-xl mb-8">昔の創作物とかはここにまとめてあります</p>
            <div className="flex justify-center items-center mb-8">
                <img src={v2icon} width="50px" className="mr-2" alt="v2_icon" /> {RightArrow} <img src={v1icon} width="50px" className="ml-2 rounded-full" alt="v1_icon" />
            </div>
            <div className="flex items-center justify-center mb-4">{Warn} <span>アーカイブプロジェクトのため，一部情報が古かったり，レイアウトが崩れている可能性があります</span></div>
            <a href={`https://v1.bonychops.com${redirectQuery !== null ? redirectQuery : ""}`} target="_blank" rel="noreferrer" className="text-2xl bg-green-500 hover:bg-green-300 rounded-2xl py-2 px-4">移動</a>
        </div>
    </div>);
}

export default RedirectToV1;