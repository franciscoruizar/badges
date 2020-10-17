import React from "react";
import ApiBadgeRepository from "../../../../repository/ApiBadgeRepository";
import Loader from "../../../components/loader/Loader";
import Badge from "../../../components/badge/Badge";
import BadgeForm from "../../../components/badge-form/BadgeForm";
import header from "../../../shared/images/badge-header.svg";
import "./BadgeEdit.css";

class BadgeEdit extends React.Component{
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

    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
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

        repository.update(this.props.match.params.id, this.state.form)
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
                    <Badge firstName={this.state.form.firstName}
                           lastName={this.state.form.lastName}
                           email={this.state.form.email}
                           jobTitle={this.state.form.jobTitle}
                           twitter={this.state.form.twitter}
                           avatarUrl={this.state.form.avatarUrl}/>
                </div>
                <div className="col">
                    <h1>Edit Attendant</h1>
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

export default BadgeEdit;