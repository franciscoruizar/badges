import React from "react";

import "./Badge.css";
import confLogo from "../../shared/images/badge-header.svg";

class Badge extends React.Component{
    render() {
        return(
            <div className="badge">
                <div className="badge-header">
                    <img src={confLogo} alt="Logo of conference" />
                </div>

                <div className="badge-section-name">
                    <img
                        className="badge-avatar"
                        src={this.props.avatarUrl}
                        alt="Avatar of profile"/>

                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>

                <div className="badge-section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <p>@{this.props.twitter}</p>
                </div>

                <div className="badge-footer">#Hola</div>
            </div>

        );
    }
}

export default Badge;