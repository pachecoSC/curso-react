import React from "react";

import Modal from "./Modal";

export default function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteBadgeModal">
        <h1>Estas seguro?</h1>
        <p>Se va eliminar el item de manera permanente</p>
        <div>
          <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Eliminar
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
}
