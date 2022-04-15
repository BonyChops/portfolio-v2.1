import { useEffect, useState } from "react"
import writeIcon from "../../resources/icon_new2_white.png"
import ReactGA from "react-ga4";
import ExLink from "../../resources/ex-link";
const lang = "ja"
const profile = {
    Name: "Sota Suzuki",
    Age: 19,
    Birthday: "2002-07-30",
    School: "National Institute of Technology, Nagano College",
    Department: "Electronics and Computer Science",
}

const profileDetails = {
    /*"Favorite Artists": ["HIKAKIN", "Omega Sisters", "Avicii", "TheFatRat", "Galantis"].join(", "), */
    License: <span class="">{["Driver's license", "英検 2級", <a className="flex text-blue-400" href="https://twitter.com/BonyChops/status/1503567078699462659?s=20&t=tPdrA4blpItQQJG4FeiTAw" target="_blank" rel="noopener">{ExLink} {"TOEIC L&R 860"}</a>].map(v => <p className="mr-2">{v}</p>)}</span>,
    Supporting: <a className="text-blue-400 flex" href="https://github.com/b-editor/BeUtl" target="_blank" rel="noopener">{ExLink}BeUtl</a>,
    "Dog or Cat": "Cat"
}

const skills = {
    Frontend: [
        "PHP", "HTML5", "CSS"
    ],
    Backend: [
        "Python", "Java", "Ruby"
    ],
    "Native App": [
        "HSP", "C"
    ],
    Docs: [
        "LaTeX"
    ],
    Tools: [
        "AviUtl"
    ]
}

const history = [
    {
        "title": "爆誕",
        "date": "July 30, 2002",
        "color": "bg-yellow-600"
    },
    {
        title: "Scratchで遊び始める",
        "date": "2012",
        "color": "bg-green-500"
    },
    {
        title: "HSPを使い始める",
        "date": "2013",
        "color": "bg-green-500"
    },
    {
        title: "【HSP】文化祭劇のSE再生ソフトを開発",
        date: "2017",
        tag: ["HSP"],
        "color": "bg-green-500"
    },
    {
        title: "長野高専 入学",
        date: "April 01, 2018",
        color: "bg-yellow-600"
    },
    /*{
        title: "とある問題行動により，寮務主事に叱られる",
        description: "皮肉にも，この出来事がWebデベロッパーを目指すきっかけとなる",
        date: "2018",
        color: "gray-500"
    },*/
    {
        title: "文化祭クラス企画でプリクラを開発",
        date: "2019",
        description: "これのためにPHPを習得．プログラミングを本格的にはじめたのはここから．",
        tag: ["HSP", "PHP"],
        color: "bg-green-500"
    },
    {
        title: "JSを使い始める",
        description: "以降ずっとメイン言語",
        color: "bg-green-500",
        date: "April 2020",
    },
    {
        title: "Web×IoT メイカーズチャレンジ 2020-21 in 信州: Team Jambiで特別賞受賞",
        color: "bg-yellow-600",
        date: "Oct 7 - Oct 28, 2020",
    },
    /*{
        title: "インターン: エプソンアヴァシス上田事業所",
        color: "yellow-600",
        date: "2021",
    }*/
]

const mainSkills = {
    Frontend: [
        "JavaScript", "Node.js", "React.js"
    ],
    Backend: [
        "Node.js"
    ],
    Tools: [
        "GitHub", "Firebase", "GCP", "VSCode"
    ]
}

const learnNext = {
    Frontend: [
        "Dart / Flutter"
    ],
    Backend: [
        "Go"
    ],
    "Native App": [
        "Unity", "C#"
    ],
    Tools: [
        "GCP: Cloud Run", "Git LFS", "JetBrains"
    ]
}

const SkillTable = (obj) => <table className="table-auto">
    {Object.keys(obj).map(key => {
        const value = obj[key];
        console.log(value)
        return <tr className="text-2xl">
            <td className="text-right" >{key}</td>
            <td className="text-left pl-5">{value.join(", ")}</td>
        </tr>
    })}
</table>

const Top = (props) => {
    const [showMoreProfile, setShowMoreProfile] = useState(false);
    const toggleShowMore = () => { setShowMoreProfile(!showMoreProfile) }

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/" });

        return () => { }
    }, []);

    return (
        <div className="text-white font-thin bg-gray-700">
            <div className="bg-gray-800 md:flex sm:block block pt-28 md:pb-16 xl:px-48 md:px-16 px-4 rounded-3xl shadow-2xl border-b-2 border-gray-900">
                <div className="md:w-1/2 w-full h-24 overflow-hidden">
                    <div className="my-auto flex ml-auto right-0">
                        <img className="rounded-full xl:w-24 xl:h-24 md:w-24 w-12 md:h-24 h-12" src={writeIcon} />
                        <div className="ml-5 mt-0 pt-0">
                            <span className=" xl:text-5xl text-4xl line-h h-24 leading-normal mt-0" >Bony_Chops<br />
                            </span>
                            <div className="flex-none xl:mt-2 ">
                                <p className="text-xl text-gray-300 text-left">Sota Suzuki</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 sm:w-full md:my-0 my-4 h-full md:text-4xl text-3xl leading-normal align-middle text-left mr-5 border-l-2 pl-5">
                    A Student Web Developer<br /><span className="text-xl">Hi there!</span>
                </div>
            </div>
            <div className="py-16 xl:px-72 md:px-36 sm:px-16 px-4 text-left">
                <h2 className="text-4xl text-left mb-5 text-green-400">Profile</h2>
                <table className="table-auto">
                    {Object.keys(profile).map(key => {
                        const value = profile[key];
                        return <tr className="text-2xl">
                            <td className="text-right">{key}</td>
                            <td className="text-left pl-5">{value}</td>
                        </tr>
                    })}
                    {showMoreProfile ? Object.keys(profileDetails).map(key => {
                        const value = profileDetails[key];
                        return <tr className="text-2xl">
                            <td className="text-right align-top">{key}</td>
                            <td className="text-left pl-5">{value}</td>
                        </tr>
                    }) : null}
                </table>
                <span onClick={toggleShowMore} className="text-blue-400 text-left left-0 mr-auto text-xl cursor-pointer">{showMoreProfile ? "Show less" : "Show more"}</span>
            </div>
            <div className="py-16 xl:px-72 md:px-36 sm:px-16 px-4 md:flex">
                <div className="md:w-1/2 w-full mb-12">
                    <h2 className="text-4xl text-left mb-5 text-yellow-400">Main Skills</h2>
                    {SkillTable(mainSkills)}
                </div>
                <div className="md:w-1/2 w-full">
                    <h2 className="text-4xl text-left mb-5 text-green-400">Skills</h2>
                    {SkillTable(skills)}
                </div>
            </div>
            <div className="py-16 xl:px-72 md:px-36 sm:px-16 px-4 ">
                <h2 className="text-4xl text-left mb-5 text-green-400">Learn Next</h2>
                {SkillTable(learnNext)}
            </div>
            <div className="py-16 xl:px-72 md:px-36 sm:px-16 px-4">
                <h2 className="text-4xl text-left mb-5 text-green-400">History</h2>
                <div className="container">
                    {history.map((item, k) => <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
                        <div className="flex md:contents">
                            <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                <div className={`${k === 0 ? "h-1/2 mt-16" : "h-full"} w-6 flex items-center justify-center`}>
                                    <div className={`h-full top-1/2 w-1 ${item.color} pointer-events-none`}></div>
                                </div>
                                <div className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full ${item.color} shadow text-center`}>
                                    <i className="fas fa-check-circle text-white"></i>
                                </div>
                            </div>
                            <div className={`${item.color} col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-left`}>
                                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                {item.description !== undefined ? <p className="font-semibold text-xs mb-1">{item.description}</p> : null}
                                <p className="leading-tight text-justify w-full font-normal">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
export default Top;
