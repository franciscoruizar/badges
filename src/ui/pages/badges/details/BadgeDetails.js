import React from "react";
import header from "../../../shared/images/badge-header.svg";
import "./BadgeDetails.css";
import Badge from "../../../components/badge/Badge";
import ApiBadgeRepository from "../../../../repository/ApiBadgeRepository";
import Loader from "../../../components/loader/Loader";
import {Link} from "react-router-dom";

class BadgeDetails extends React.Component {

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
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const id = this.props.match.params.id;

        this.setState({loading: true, error: null})

        const repository = new ApiBadgeRepository();

        repository.findById(id)
            .then(value => {
                this.setState({
                    loading: false,
                    error: null,
                    form: value
                })
            })
            .catch(reason => {
                this.setState({loading: false, error: reason})
            });
    }

    handleClick() {
        alert("Eliminar?");
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
                    <Badge firstName={this.state.form.firstName}
                           lastName={this.state.form.lastName}
                           email={this.state.form.email}
                           jobTitle={this.state.form.jobTitle}
                           twitter={this.state.form.twitter}
                           avatarUrl={this.state.form.avatarUrl}/>
                </div>
                <div className="col-sm">
                    <h2>Actions: </h2>
                    <div className="btn-group">
                        <Link to={`/badges/${this.props.match.params.id}/edit`} className="btn btn-warning mb-4 text-white">
                            Edit
                        </Link>
                        <button onClick={this.handleClick} className="btn btn-danger">Delete</button>
                    </div>

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

export default BadgeDetails;