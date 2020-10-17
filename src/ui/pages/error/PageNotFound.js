import React from "react";
import {Link} from "react-router-dom";

import "./Error.css";

class PageNotFound extends React.Component{
    render() {
        return(
            <section className="error">
                <div className="error mx-auto" data-text="404">404</div>
                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                <p className="text-gray-500 mb-5">It looks like you found a glitch in the matrix...</p>
                <Link to="/" className="btn btn-primary">Go to home</Link>
            </section>

        );
    }
}

export default PageNotFound;