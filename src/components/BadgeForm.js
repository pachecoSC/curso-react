import React, { Component } from "react";

class BadgeForm extends Component {

  handleClick = (e) => {
    console.log("Presionado click");
  };
  /* handleSubmit = (e) => {
    e.preventDefault();
    console.log("formuario enviado");
    console.log(this.props.formValues);
   };*/

  render() {
    const {onSubmit, onChange, error} = this.props;
    const {firstName,lastName,email,jobTitle,social} = this.props.formValues;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={onChange}
              className="form-control"
              type="text"
              name="firstName"
							value={firstName}
            />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
							value={lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
							value={email}
            />
          </div>
          <div className="form-group">
            <label>Trabajo</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
							value={jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Social</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="social"
							value={social}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>
          {error && (<p className="text-danger">{error.message}</p>)}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
