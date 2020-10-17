import React from "react";

class BadgeForm extends React.Component {
    render() {
        return(
            <form action="" onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={this.props.formValues.firstName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={this.props.formValues.lastName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="email"
                        name="email"
                        value={this.props.formValues.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Job</label>
                    <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Twitter</label>
                    <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="twitter"
                        value={this.props.formValues.twitter}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Avatar</label>
                    <input
                        onChange={this.props.onChange}
                        className="form-control"
                        type="text"
                        name="avatarUrl"
                        value={this.props.formValues.avatarUrl}/>
                </div>
                <button className="btn btn-primary">Save</button>
            </form>
        );
    }
}

export default BadgeForm;