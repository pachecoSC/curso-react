import React from "react";
import confLogo from "../images/badge-header.svg";
// import avatar from "../images/avatar.png";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    //declaracion de props
    const { nombre, apellido, trabajo, social, email} = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className="Badge__section-name">
          {/* <img className="Badge__avatar" src={avatarUrl} alt="Avatar" /> */}
          <Gravatar className="Badge__avatar" email={email} alt="Avatar" />
          <h1>
            {nombre} <br /> {apellido}
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>{trabajo}</p>
          <p>@{social}</p>
        </div>
      </div>
    );
  }
}

export default Badge;
