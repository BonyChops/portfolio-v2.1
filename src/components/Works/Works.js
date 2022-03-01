import React from "react";
import { workInfo } from "../../resources/works";
import axios from "axios";
import Star from "../../resources/star";
import Fork from "../../resources/fork";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import ExLink from "../../resources/ex-link";
import ReactGA from "react-ga4";

const worksInfoURI = 'https://gist.githubusercontent.com/BonyChops/c54f243d81666a38187df774a1a71f88/raw/works.json';

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workBoxes: [],
            worksInfo: []
        };
    }

    componentDidMount = async () => {
        const worksInfo = (await axios.get(worksInfoURI)).data;
        this.setState({
            worksInfo
        });
        this.updateWorkBoxes();
        ReactGA.send({ hitType: "pageview", page: "/works" });
    }

    updateWorkBoxes = () => {
        const workBoxes = this.getWorkBoxes();
        this.setState({
            workBoxes
        });
    }

    getApi = (uri) => {
        if (this.state[uri] === false || (this.state[uri] !== false && this.state[uri] !== undefined)) return;
        this.setState({ [uri]: false });
        axios.get(uri).then((response) => {
            this.setState({ [uri]: response.data });
            this.updateWorkBoxes();
        });
        return null;
    }

    chunkArray = (myArray, chunk_size) => {
        const arrayLength = myArray.length;
        const tempArray = [];

        for (let index = 0; index < arrayLength; index += chunk_size) {
            const myChunk = myArray.slice(index, index + chunk_size);
            // Do something if you want with the group
            tempArray.push(myChunk);
        }

        return tempArray;
    }

    getWorkBoxes = () => this.state.worksInfo.map(item => <div className={`xl:w-1/3 w-full  mx-2 h-56 ${item.img !== undefined ? "" : "bg-gray-800"} rounded-xl shadow-xl text-left py-4 px-2 relative`} style={item.img !== undefined ? { backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${item.img})`, backgroundSize: "cover" } : {}}>
        <h3 className="text-2xl mb-5 h-14 drop-shadow-lg">{item.title}</h3>
        <p className="text-base mb-5 h-18 font-medium">{item.description}</p>
        {item.repoApi !== undefined ? this.getApi(item.repoApi) : null}
        <div className="flex bottom-4 absolute">
            {(this.state[item.repoApi]?.stargazers_count !== undefined && this.state[item.repoApi]?.stargazers_count > 0)
                ? <span className="flex mr-2">{Star}<span className="ml-2">{this.state[item.repoApi]?.stargazers_count}</span></span> : null}
            {(this.state[item.repoApi]?.forks_count !== undefined && this.state[item.repoApi]?.forks_count > 0)
                ? <span className="flex mr-2">{Fork}<span className="ml-2">{this.state[item.repoApi]?.forks_count}</span></span> : null}
            {(this.state[item.repoApi]?.html_url !== undefined)
                ? <a className="flex mr-2 text-blue-400" href={this.state[item.repoApi]?.html_url} target="_blank" rel="noreferrer">{ExLink}<span className="ml-2">GitHub</span></a> : null}
            {![undefined, null, ""].some(c => c === this.state[item.repoApi]?.homepage)
                ? <a className="flex mr-2 text-blue-400" href={this.state[item.repoApi]?.homepage} target="_blank" rel="noreferrer">{ExLink}<span className="ml-2">ページ</span></a> : null}

            {/* {item.links !== undefined && item.links.map(v => (
                <a className="flex mr-2 text-blue-400" href={v.link} target="_blank" rel="noreferrer">{ExLink}<span className="ml-2">{v.title}</span></a>
            ))} */}
        </div>
    </div>)

    render() {
        return (
            <div className="text-white bg-black pt-16 min-h-screen h-full font-bold">
                <div className="py-16 xl:px-32 sm:px-8 px-4 xl:mx-36 md:mx-16">
                    <h2 className="text-4xl text-left text-yellow-500 mb-5">Highlighted Works</h2>

                    {<div className="hidden md:block">{this.chunkArray(this.state.workBoxes, 3).map(chunk => <div className="flex mb-5">
                        {chunk}
                    </div>)}</div>}
                    <div className="block md:hidden">{this.chunkArray(this.state.workBoxes, 1).map(chunk => <div className="flex mb-5">
                        {chunk}
                    </div>)}</div>
                    {this.state.workBoxes.length <= 0 && <p className="text-left">Loading...</p>}


                    <h2 className="text-4xl text-left mb-5 text-green-400 font-bold mt-6">Other Works</h2>
                    <p className="text-left">See <a href={"https://github.com/BonyChops?tab=repositories&q=&type=&language=&sort=stargazers"} target="_blank" rel="noreferrer" className="text-blue-400">GitHub</a>.</p>

                    <h2 className="text-4xl text-left mb-5 text-gray-300 font-bold mt-6">Old Works</h2>
                    <p className="text-left">AviUtl Project Transferなどの過去作品は<Link to={`/v1?redirect=${encodeURIComponent("/downloads/")}`} className="text-blue-400">Bony_Chops v1サイト</Link>へ.</p>


                </div>
            </div>
        )
    }

}
export default Works;