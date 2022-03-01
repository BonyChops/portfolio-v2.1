import { Link, withRouter } from "react-router-dom";

const NotFound = (props) => {
    return(
        <div className="text-white bg-black pt-16 min-h-full font-bold h-screen">
        <div className="py-16 xl:px-72 md:px-36 sm:px-16 px-4 xl:mx-36 md:mx-16">
            <h1 className="text-center text-4xl mb-2">NotFound</h1>
            <p className="text-center text-xl mb-4">ページが見つかりませんでした．</p>
            <p className="text-center text-base mb-8">もしかして: <Link to={`/v1?redirect=${encodeURIComponent(window.location.pathname)}`} className="text-blue-400">旧サイト</Link></p>
        </div>
    </div>
    )
}

export default withRouter(NotFound);