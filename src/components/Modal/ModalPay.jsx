import { Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import styles from "./Modal.module.scss";
function ModalSubs({ modal, setModal, modalClose, courseId }) {
  const navigate = useNavigate();
  const modalBody = (
    <div className={styles.modal}>
      <div align="center">
        <h2>Tu aventura comienza</h2>
        <p>Listo para descubrir un nuevo conocimiento</p>
      </div>
      <Button onClick={() => navigate(`/courseTake/${courseId}`)} color="primary">
        Pagar
      </Button>
      <Button onClick={modalClose} color="primary">
        Cancelar
      </Button>
    </div>
  );
  return (
    <div>
      <Modal open={modal} onClose={() => setModal(false)}>
        {modalBody}
      </Modal>
    </div>
  );
}

export default ModalSubs;
