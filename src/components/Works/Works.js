import React from "react";
import { workInfo } from "../../resources/works";
import axios from "axios";
import Star from "../../resources/star";
import Fork from "../../resources/fork";

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getApi = (uri) => {
        if (this.state[uri] === false || (this.state[uri] !== false && this.state[uri] !== undefined)) return;
        this.setState({ [uri]: false });
        axios.get(uri).then((response) => {
            console.log(response.data)
            this.setState({ [uri]: response.data });
        })
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

    workBoxes = () =>  workInfo.map(item => <div className="xl:w-1/3 w-full  mx-2 h-56 bg-gray-800 rounded-xl shadow-xl text-left py-4 px-2 relative">
        <h3 className="text-2xl mb-5 h-14">{item.title}</h3>
        <p className="text-base mb-5 h-18">{item.description}</p>
        {item.repoApi !== undefined ? this.getApi(item.repoApi) : null}
        <div className="flex bottom-4 absolute">
            {(this.state[item.repoApi]?.stargazers_count !== undefined && this.state[item.repoApi]?.stargazers_count > 0)
                ? <span className="flex mr-2">{Star}<span className="ml-2">{this.state[item.repoApi]?.stargazers_count}</span></span> : null}
            {(this.state[item.repoApi]?.forks_count !== undefined && this.state[item.repoApi]?.forks_count > 0)
                ? <span className="flex">{Fork}<span className="ml-2">{this.state[item.repoApi]?.forks_count}</span></span> : null}
        </div>
    </div>)

    render() {
        return (
            <div className="text-white bg-black pt-16 min-h-full font-thin">
                <div className="py-16 xl:px-64 md:px-36 sm:px-16 px-4 xl:mx-36 md:mx-16">
                    <h2 className="text-4xl text-left text-yellow-500 mb-5 text-green-400font-bold">Highlighted Works</h2>

                    {<div className="hidden xl:block">{this.chunkArray(this.workBoxes(), 3).map(chunk => <div className="flex mb-5">
                        {chunk}
                    </div>)}</div>}
                    <div className="block xl:hidden">{this.chunkArray(this.workBoxes(), 1).map(chunk => <div className="flex mb-5">
                        {chunk}
                    </div>)}</div>


                </div>
            </div>
        )
    }

}
export default Works;