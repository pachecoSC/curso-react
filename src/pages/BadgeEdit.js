//librerias
import React, { Component } from "react";
//imagenes
import header from "../images/platziconf-logo.svg";
//componentes
import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm.js";
import PageLoading from "../components/PageLoading.js";
import api from '../api';

class BadgeEdit extends Component {
  state = {
    loading:true,
    error:null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      social: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = async e => {
    this.setState({loading:true,error:null})
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({loading:false, error:null, form:data});
    } catch (error) {
      this.setState({loading:false, error:error});
    }
  };

  handleChange = (e) => {

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });

  };

  handleSubmit = async (e)=> {
    e.preventDefault();

    try {
      await api.badges.update(this.props.match.params.badgeId,this.state.form);
      this.setState({loading:false})

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({loading:false,error:error})
    }
  };

  render() {
    if(this.state.loading){
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero--image img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                nombre={this.state.form.firstName || 'Nombre'}
                apellido={this.state.form.lastName || 'Apellido'}
                trabajo={this.state.form.jobTitle|| 'trabajo'}
                social={this.state.form.social || 'social'}
                email={this.state.form.email || 'email'}
              />
            </div>
            <div className="col-6">
            <h1>Edición Usuario</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error ={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
