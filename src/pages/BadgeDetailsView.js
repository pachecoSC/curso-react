import React from "react";
import { Link } from "react-router-dom";

import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

import confLogo from "../images/platziconf-logo.svg";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if(count > max){
    setCount(0);
  }
  return [count, setCount];
}

export default function BadgeDetailsView(props) {
  const [count, setCount] = useIncreaseCount(4);
  const badge = props.data;

  return (
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              nombre={badge.firstName}
              apellido={badge.lastName}
              trabajo={badge.jobTitle}
              email={badge.email}
              social={badge.social}
            />
          </div>
          <div className="col">
            <h2>Acciones</h2>
            <div>
              <button onClick={() => {
                setCount(count +1)
              }} className="btn btn-primary mr-4 mb-4"> Increase Count: {count}</button>
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${badge.id}/edit`}
              >
                Editar
              </Link>
            </div>
            <div>
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Eliminar
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//export default BadgeDetailsView();
