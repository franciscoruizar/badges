import React from "react";
import NavBar from "../navbar/NavBar";

function Layout(props) {
    return(
        <React.Fragment>
            <NavBar/>
            {props.children}
        </React.Fragment>
    );
}

export default Layout;