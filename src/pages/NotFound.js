import React from 'react';
import {Link} from 'react-router-dom';

import NotFoundImg from '../images/404.svg';

function NotFound(){
  return (
    <div className="pagNotFound">
      <div className="pagNotFound__izquierda">
        <p className="pagNotFound__titulo"> Lo sentimos!!</p>
        <p className="pagNotFound__descripcion"> Esta página no esta disponible porfavor regresa al <Link className="pagNotFound__enlace" to="/">Inicio</Link></p>
      </div>
      <div className="pagNotFound__derecha">
        <img className="pagNotFound__imagen" src={NotFoundImg} alt="Oops"/>
      </div>
    </div>
  );
}

export default NotFound