import youtube from "../../resources/socials/youtube.svg";
import twitter from "../../resources/socials/twitter.svg";
import github from "../../resources/socials/github.svg";
import zenn from "../../resources/socials/zenn.svg";
import qiita from "../../resources/socials/qiita.svg";
import nicha from "../../resources/socials/nicha.png";
import niconico from "../../resources/socials/niconico.svg";
import spotify from "../../resources/socials/spotify.svg";
import keybase from "../../resources/socials/keybase.svg";
import gmail from "../../resources/socials/gmail.svg";
import Key from "../../resources/key.svg";
import amazon from "../../resources/socials/amazon.svg"
import atcoder from "../../resources/notfree/socials/atcoder.png"
import { useEffect } from "react";
import ReactGA from "react-ga4";

const socialLinks = [
    {
        title: "Mail",
        name: "contact@bonychops.com",
        icon: gmail,
        color: "#EA4335",
        link: "mailto:contact@bonychops.com"
    },
    {
        title: "YouTube",
        name: "Bony_Chops - Archived",
        icon: youtube,
        color: "#FF0000",
        link: "https://youtube.com/Bony_Chops"
    },
    {
        title: "YouTube",
        name: "Bony_Chops v2",
        icon: youtube,
        color: "#FF0000",
        link: "https://www.youtube.com/channel/UCVtSxqezSf8yJb0LGFplpIw"
    },
    {
        title: "Twitter",
        name: "@BonyChops",
        icon: twitter,
        color: "#1DA1F2",
        link: "https://twitter.com/BonyChops"
    },
    {
        title: "GitHub",
        name: "BonyChops",
        icon: github,
        inverseColor: true,
        color: "#EEEEEE",
        link: "https://github.com/BonyChops"
    },
    {
        title: "Keybase",
        name: "bonychops",
        color: "#33A0FF",
        icon: keybase,
        link: "https://keybase.io/bonychops/sigs/U3wlm9JB0oB4TLeRiU5SWp0YBqhM8fg6hGuLVu5rpJM"
    },
    {
        title: "PGP Key",
        name: "2763 98BC 7EFF 6D86",
        color: "white",
        inverseColor: true,
        icon: Key,
        link: "https://keybase.io/bonychops/pgp_keys.asc"
    },
    {
        title: "Qiita",
        name: "BonyChops",
        icon: qiita,
        color: "#55C500",
        link: "https://qiita.com/BonyChops",
    },
    {
        title: "LAPRAS",
        name: "BonyChops",
        inverseColor: true,
        color: "#EEEEEE",
        bigIcon: true,
        icon: "https://social-icon-host.web.app/lapras.png",
        link: "https://lapras.com/public/FWS9AJP"
    },
    {
        title: "AtCoder",
        name: "Bony_Chops",
        inverseColor: true,
        bigIcon: true,
        icon: atcoder,
        color: "white",
        link: "https://atcoder.jp/users/bony_chops"
    },
    {
        title: "Zenn",
        name: "bony_chops",
        icon: zenn,
        color: "#3EA8FF",
        link: "https://zenn.dev/bony_chops"
    },
    /*{
        title: "Niconico",
        name: "ほねつきにく。",
        color: "#EEEEEE",
        inverseColor: true,
        icon: niconico,
        link: "https://www.nicovideo.jp/user/50869526/video"
    },*/
    {
        title: "Spotify",
        name: "bony_chops",
        color: "#1DB954",
        icon: spotify,
        link: "https://open.spotify.com/user/bony_chops?si=b5de1e352fad4eba"
    },
    {
        title: "Nicha",
        name: "Developing...",
        icon: nicha,
        notAvailable: true
    },
    {
        title: "Kicha",
        name: "Archived Project",
        icon: nicha,
        link: "https://github.com/BonyChops/simple-bbs",
        color: "#A0AE2E"
    },
    {
        title: "Amazon",
        name: "欲しい物リスト",
        color: "#FF9900",
        icon: amazon,
        link: "https://www.amazon.jp/hz/wishlist/ls/8FLZNBFCT3ZK?ref_=wl_share",
        inverseColor: true

    }
]

const Socials = (props) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/socials" });

        return () => { }
    }, []);
    return (
        <div className="text-white bg-black pt-16 min-h-full font-bold">
            <div className="py-16 xl:px-72 md:px-36 sm:px-16 px-4 xl:mx-36 md:mx-16">
                <h2 className="text-4xl text-left text-green-400 mb-5 text-green-400font-bold">Socials</h2>
                {socialLinks.map(item => <a href={item.link} target="_blank" rel="noopener noreferrer" className={`mx-auto sm:w-96 flex ${item.notAvailable ? "bg-gray-700" : " hover:opacity-30 "} rounded-xl shadow-sm py-5 text-left px-2 my-5 ${item.inverseColor ? "text-black" : ""}`} style={item.color !== undefined ? { backgroundColor: item.color } : {}}>
                    <div className="w-1/6 h-full my-auto">
                        {item.icon !== undefined ? <img src={item.icon} width={item.bigIcon ? "48px" : "32px"} class="mx-auto my-auto" /> : null}
                    </div>
                    <div className="w-5/6">
                        <p class="text-xl font-bold">{item.title}</p>
                        <p class="text-sm font-bold">{item.name}</p>
                    </div>
                </a>)}
                <h2 className="text-4xl text-left mb-5 text-green-400 font-bold">Icon</h2>
                <p className="text-left text-xl">Icon is from <a class="text-blue-400" href="https://simpleicons.org/" target="_blank" rel="noopener noreferrer">Simple Icons</a></p>
            </div>
        </div>
    )
}

export default Socials;