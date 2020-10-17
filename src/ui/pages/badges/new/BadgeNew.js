import React from "react";

import Badge from "../../../components/badge/Badge";
import BadgeForm from "../../../components/badge-form/BadgeForm";

import header from "../../../shared/images/badge-header.svg";
import "./BadNew.css";
import ApiBadgeRepository from "../../../../repository/ApiBadgeRepository";
import Loader from "../../../components/loader/Loader";


class BadgeNew extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            error: null,
            loading: false,
            form: {
                firstName: "",
                lastName: "",
                email: "",
                jobTitle: "",
                twitter: "",
                avatarUrl: ""
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const nextForm = this.state.form;
        nextForm[event.target.name] = event.target.value;
        this.setState({
            form: nextForm
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({loading: true, error: null})

        const repository = new ApiBadgeRepository();

        repository.create(this.state.form)
            .then(() => {
                this.setState({loading: false, error: null})
                this.props.history.push("/badges");
            })
            .catch(reason => {
                this.setState({loading: false, error: reason})
            })
    }

    validateView() {
        const error = this.state.error;
        const loading = this.state.loading;

        if (error) {
            this.props.history.push("/error/503")
        }

        if (loading) {
            return <Loader/>;
        }

        return (
            <React.Fragment>
                <div className="col">
                    <Badge firstName={this.state.form.firstName || 'Firstname'}
                           lastName={this.state.form.lastName || 'Lastname'}
                           email={this.state.form.email || 'email@email.com'}
                           jobTitle={this.state.form.jobTitle || 'Developer'}
                           twitter={this.state.form.twitter || 'youtwitter'}
                           avatarUrl={this.state.form.avatarUrl || 'https://www.gravatar.com/avatar/4f164ea9a61e8d28e6b83a356d3ff5ae?d=identicon'}/>
                </div>
                <div className="col">
                    <h1>New Attendant</h1>
                    <BadgeForm onChange={this.handleChange} onSubmit={this.handleSubmit}
                               formValues={this.state.form}/>
                </div>
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className="badge-new-hero">
                    <img className="img-fluid" src={header} alt="Hero"/>
                </div>

                <div className="container">
                    <div className="row">
                        {
                            this.validateView()
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;