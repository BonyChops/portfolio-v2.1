import whiteIcon from "../../resources/icon_new2_white_trans_middle.png"
import { Link, withRouter } from "react-router-dom"

const menu = [
    {
        title: "Works",
        link: "/works"
    },
    {
        title: "WIP",
        link: "/wip"
    },
    {
        title: "Socials",
        link: "/socials"
    },
    {
        title: "Blog",
        link: "https://blog.b7s.dev",
        external: true
    },
    {
        title: "v1",
        link: "/v1"
    }
]

const Header = () => {
    return (
        <div className="fixed top-0 h-16 z-30 bg-white w-full rounded-b-xl xl:px-64 md:px-28 px-4 md:justify-start justify-center py-1 flex sm:flex-wrap backdrop-filter backdrop-blur-lg bg-opacity-30 overflow-hidden">
            {/* <img className="h-full" src={darkLogo}/> */}
            <Link className="" to="/" style={{ width: "64px" }}><img src={whiteIcon} width="64px" height="64px" className="items-center" alt="logo" /></Link>
            <div className="flex overflow-x-auto ml-2 w-9/12">
                {menu.map((item, k) => item.external ? <a
                    key={k}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:mx-8 mx-4 rounded-xl text-white hover:text-yellow-700 text-2xl font-normal content-center flex flex-wrap">
                    <span className="">{item.title}</span>
                </a> : <Link
                    key={k}
                    to={item.link}
                    className="sm:mx-8 mx-4 rounded-xl text-white hover:text-yellow-700 text-2xl font-normal content-center flex flex-wrap">
                    <span className="">{item.title}</span>
                </Link>)}
            </div>
        </div>
    )
}
export default withRouter(Header);