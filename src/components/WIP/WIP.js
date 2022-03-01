import { useEffect, useState } from "react";
import Clipboard from "../../resources/clipboard";
import axios from "axios";
import moment from "moment";
import Refresh from "../../resources/refresh";
import Locked from "../../resources/locked";
import RightArrow from "../../resources/right";
import MenuClosed from "../../resources/menuClosed";
import MenuOpened from "../../resources/menuOpened";
import Checked from "../../resources/checked";
import ReactGA from "react-ga4";

const WIP = () => {
    const [wipData, setWipData] = useState(Array.from({ length: 3 }).map((v) => ({ loading: true })));
    const [completedData, setCompletedData] = useState(Array.from({ length: 3 }).map((v) => ({ loading: true })));
    const [openMenuList, setOpenMenuList] = useState([]);
    const [completedOpened, setCompletedOpened] = useState(false);
    const fetchWipData = async () => {
        const d = await axios("https://asia-northeast1-bony-portfolio-v2-1.cloudfunctions.net/api/wip");
        setWipData(d.data);
    }
    const fetchCompletedData = async () => {
        const d = await axios("https://asia-northeast1-bony-portfolio-v2-1.cloudfunctions.net/api/completed");
        setCompletedData(d.data);
    }

    const openCompletedTab = () => {
        setCompletedOpened(true);
        if (completedData[0].loading) {
            fetchCompletedData();
        }
    }

    const openWipTab = () => {
        setCompletedOpened(false);
    }

    const addMenuList = (v) => {
        if (v.subtasks === undefined || v.subtasks.length <= 0) {
            return;
        }
        setOpenMenuList(openMenuList.concat([v.id]));
    }
    const deleteMenuList = (v) => {
        if (v.subtasks.length <= 0) {
            return;
        }
        setOpenMenuList(openMenuList.filter(va => va !== v.id));
    }
    useEffect(() => {
        (async () => {
            fetchWipData();
        })();
        ReactGA.send({ hitType: "pageview", page: "/wip" });
        return () => { };
    }, []);
    wipData.sort((a, b) => moment(a.due) - moment(b.due));


    return (
        <div className="text-white bg-gray-900 pt-16 min-h-full font-bold min-h-screen h-full">
            <div className="py-16 xl:px-72 md:px-36 sm:px-16 px-4 xl:mx-36 md:mx-16 text-left bg-gray-900">
                <div className="flex py-4 border-b-2 border-gray-700 mb-6">
                    <button onClick={() => openWipTab()} className={`border-b-2 w-min mr-4 font-bold ${completedOpened ? 'hover:border-gray-400 hover:text-gray-400 hover:border-current border-transparent' : 'border-purple-400 text-purple-400'}`}>
                        WIP
                    </button>
                    <button onClick={() => openCompletedTab()} className={`border-b-2 w-min mr-4 font-bold ${!completedOpened ? 'hover:border-gray-400 hover:text-gray-400 hover:border-current border-transparent' : 'border-purple-400 text-purple-400'}`}>
                        Completed
                    </button>
                </div>
                {completedOpened ? <p className="mb-4">過去1週間までのタスクが表示されます．</p> : <p className="mb-4">現在Bony_Chopsが抱え持つタスクです．</p>}

                {(completedOpened ? completedData : wipData).map((v, i) => <button className={`w-full rounded-xl bg-gray-700 py-4 px-5 mb-2 text-left font-bold ${v.subtasks === undefined || v.subtasks?.length <= 0 ? `cursor-default` : "hover:bg-gray-800"}`} onClick={e => openMenuList.includes(v.id) ? deleteMenuList(v) : addMenuList(v)}>
                    <div className="flex">
                        <div className="my-auto mr-4">
                            {v.loading ? <div className="w-8 h-8 rounded-xl bg-gray-800 animate-spin" /> : (completedOpened ? Checked : (v.subtasks !== undefined && v.subtasks.length > 0 ? (openMenuList.includes(v.id) ? MenuOpened : MenuClosed) : (v.recurring ? Refresh : (v.private ? Locked : Clipboard))))}
                        </div>
                        {v.loading ?
                            <div className="relative w-full">
                                <div className="h-6 w-48 rounded-xl bg-gray-800 animate-pulse mb-2"></div>
                                <div className="h-6 w-48 rounded-xl bg-gray-800 animate-pulse"></div>
                            </div> :
                            <div className={`relative w-full text-left `}>
                                <p className={`text-xl ${v.private ? "text-gray-400" : ""}`}>{v.title} <span className="text-gray-400">#{v.id}</span></p>
                                {v.completedDate && <p className="text-xl font-normal">Done on {moment(v.completedDate).locale("ja").format("MMM DD(ddd), YYYY \\a\\t hh:mm A")}</p>}
                                {v.due && <p className="text-xl font-normal">{(v.description !== undefined && v.description !== "" && !v.private) && `${v.description}・`}Due {moment(v.due).locale("ja").format("MMM DD(ddd), \\a\\t YYYY hh:mm A")}</p>}
                                {v.due !== undefined && <p className={`relative md:absolute md:right-0 md:bottom-0 w-auto ml-auto md:mr-0 ${moment(v.due) < moment() ? "text-red-600" : "text-purple-400"}`}>{moment(v.due) < moment() && "Past due"}{moment(v.due).format("YYYYMMDD") === moment().format("YYYYMMDD") && "Due today"}{moment(v.due).format("YYYYMMDD") === moment().add(1, "days").format("YYYYMMDD") && "Due tomorrow"}</p>}
                                {v.subtasks !== undefined && v.subtasks?.length > 0 && (<div className="flex">
                                    <div className="w-1/12 mr-4">{Math.round((v.subtasks.filter(v => v.completed).length * 100 / v.subtasks.length))}%</div>
                                    <div className="w-8/12 relative bg-gray-900 rounded-xl h-2 my-auto">
                                        <div className="w-1/2 bg-blue-600 rounded-xl h-2" style={{ width: `${Math.round((v.subtasks.filter(v => v.completed).length * 100 / v.subtasks.length))}%` }}></div>
                                    </div>
                                </div>)}
                            </div>}
                    </div>
                    {openMenuList.includes(v.id) && <div className="mt-4 border-t-2">
                        {v.subtasks.map(vs => <div className="flex mt-2">
                            <div className="mr-4 my-auto">
                                {vs.completed ? Checked : Clipboard}
                            </div>
                            <div className="my-auto align-middle">
                                {vs.title}
                            </div>
                        </div>)}
                    </div>}

                </button>)}

            </div>
        </div>
    )
}

export default WIP;