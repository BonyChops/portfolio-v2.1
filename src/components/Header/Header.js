import darkLogo from "../../resources/new_header2_no_back_white.png"
import darkIcon from "../../resources/icon_new2_trans.png"

const menu = [
    {
        title: "Works"
    },
    {
        title: "WIP"
    },
    {
        title: "Socials"
    }
]

const Header = () => {
    return(
        <div class="absolute top-0 h-16 bg-white w-full rounded-b-xl xl:px-64 md:px-32 md:justify-start justify-center py-1 flex sm:flex-wrap backdrop-filter backdrop-blur-lg bg-opacity-30">
            {/* <img class="h-full" src={darkLogo}/> */}
            <img class="h-full" src={darkIcon}/>
            {menu.map((item, k) => <div key={k} class="mx-8 rounded-xl text-white hover:text-gray-600 text-2xl font-bold content-center flex flex-wrap"><span class="">{item.title}</span></div>)}
        </div>
    )
}
export default Header;