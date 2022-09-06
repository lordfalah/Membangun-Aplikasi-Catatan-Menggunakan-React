import React, { Fragment } from "react";
import CatatanAktif from "./CatatanAktif";

const Arsip = ({ catatan, moveNotes, updateCatatan, deleteCatatan }) => {
  return (
    <Fragment>
      <CatatanAktif
        deleteCatatan={deleteCatatan}
        catatan={catatan}
        moveNotes={moveNotes}
        updateCatatan={updateCatatan}
      >
        Arsipkan
      </CatatanAktif>
    </Fragment>
  );
};

export default Arsip;
