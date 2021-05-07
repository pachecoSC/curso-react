import React, { Component } from "react";
import api from "../api";

import PageLoading from "../components/PageLoading.js";
import PageError from "../components/PageError.js";

import BadgeDetailsView from "./BadgeDetailsView.js";

class BadgeDetailsController extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fechData();
  }

  fechData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };
  handleDeleteBadge =async e => {
    this.setState({loading:true, error:null});

    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({loading:false, error:null});
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({loading:false , error:error});
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeDetailsView
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        data={this.state.data}
      />
    );
  }
}

export default BadgeDetailsController;
