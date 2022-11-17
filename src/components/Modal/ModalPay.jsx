import { Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./Modal.module.scss";
function ModalSubs({ modal, setModal, modalClose }) {
  const modalBody = (
    <div className={styles.modal}>
      <div align="center">
        <h2>Tu aventura comienza</h2>
        <p>Listo para descubrir un nuevo conocimiento</p>
      </div>

      {/* <div align="right">
        <TextField label="Correo" className={styles.textfield}></TextField>
        <br />
        <TextField
          label="Número de tarjeta"
          className={styles.textfield}
        ></TextField>
        <br />
        <TextField label="CV" className={styles.textfield}></TextField>
        <br />
        <TextField
          label="Fecha de expiración"
          className={styles.textfield}
        ></TextField>
        <br />
      </div> */}
      <Button color="primary">Pagar</Button>
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
