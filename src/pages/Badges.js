//librerias
import logo from '../images/badge-header.svg';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//componentes
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
// import PageError from '../components/PageError';
import api from '../api';

class Badges extends Component{
  state = {
    loading:true,
    data:[],
    error:null,
  };

  componentDidMount (){
    // this.fetchCharacters();
    this.fetchData();
    // si queremos que se actualicen cada cierto tiempo tenemos que hacer un intervalo
    // this.intervalId = setInterval(this.fetchData,5000);
    // para que al cambiar de vista no haga problemas por q se sigue ejecuntando el intervalo debemos apagarlo en unmoun
  };

  componentWillUnmount(){
    // clearInterval();
  };

  fetchData = async() => {
    this.setState( { loading:true, error:null});
    try {
      const data= await api.badges.list();
      this.setState({loading:false, data:data});
    }catch(e){
      this.setState({loading:false, error:e});
    }
  }

  // fetchCharacters = async () => {
  //   console.log(this.state);
  //   this.setState({
  //     loading:true,
  //     error:null,
  //   });
  //   console.log(this.state);
  //   try{
  //     const response = await fetch('https://rickandmortyapi.com/api/character');
  //     const data = await response.json();
  //     this.setState({
  //       loading:false,
  //       data:data.results,
  //     });
  //   }catch(error){
  //     this.setState({
  //         loading:false,
  //         error:error,
  //     });
  //   }

  //   console.log(this.state);
  // }

  // componentWillUnmount(){
  //   clearTimeout(this.timeoutid);
  // }

  render() {
    if(this.state.loading === true){
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={logo} alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary"> New Badge</Link>
          </div>
        </div>
        <div className="Badges_list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} loading={this.state.loading} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
