import React from "react";
import BadgetItem from "./BadgetItem";
import {Link} from "react-router-dom";

class BadgesList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: []
        }
    }

    render() {
        return (
            <ul className="list-unstyled">
                {
                    this.props.items.map(value => {
                        return (
                            <li key={value.id} className="list-">
                                <Link className="text-reset text-decoration-none" to={`/badges/${value.id}`}>
                                    <BadgetItem fistName={value.firstName}
                                                twitter={value.twitter}
                                                jobTitle={value.jobTitle}
                                                avatarUrl={value.avatarUrl}/>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default BadgesList;