import React from "react";
import "./BadgetItem.css";

class BadgetItem extends React.Component{
    render() {
        return(
            <div className="item row">
                <div className="col-md-auto">
                    <img className="item-avatar" src={this.props.avatarUrl} alt={"Avator"} />
                </div>
                <div className="col">
                    <h3>{this.props.fistName}</h3>
                    <a href={"https:\\twitter.com/" + this.props.twitter}>@{this.props.twitter}</a>
                    <h6>{this.props.jobTitle}</h6>
                </div>
            </div>
        );
    }
}

export default BadgetItem;