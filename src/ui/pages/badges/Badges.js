import React from "react";

import header from "../../shared/images/badge-header.svg";
import "./Badges.css";
import BadgesList from "../../components/badges-list/BadgesList";
import {Redirect, Link} from "react-router-dom";
import ApiBadgeRepository from "../../../repository/ApiBadgeRepository";
import Skeleton from "react-loading-skeleton";

class Badges extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            error: null,
            loading: true,
            data: undefined
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.setState({loading: true, error: null})

        const repository = new ApiBadgeRepository();

        repository.findAll()
            .then(data => this.setState({loading: false, data: data, error: null}))
            .catch(reason => this.setState({loading: false, error: reason}))
    }

    validateView() {
        const error = this.state.error;
        const loading = this.state.loading;
        const data = this.state.data;

        if (error) {
            return <Redirect to="/error/503" />;
        }

        if (loading) {
            return (
                <React.Fragment>
                    <Skeleton count={10}/>
                </React.Fragment>
            );
        }

        return <BadgesList className="" items={data}/>;
    }

    render() {
        return (
            <React.Fragment>
                <div className="badges">
                    <div className="badges-hero">
                        <div className="badges-container">
                            <img className="badges-conf-logo" src={header} alt="Logo conference"/>
                        </div>
                    </div>
                    <div className="badges-container">
                        <div className="badges-buttons">
                            <Link to="/badges/new" className="btn btn-primary">Add</Link>
                        </div>

                        {
                            this.validateView()
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges