import React from "react";
import { CModal, CModalHeader, CModalTitle, CModalBody } from "@coreui/react";
import { useSelector } from "react-redux";

const Modal = () => {
  const show = useSelector((state) => state.messageModalReducer);
  console.log(show);
  return (
    <CModal show={show}>
      <CModalHeader closeButton>
        <CModalTitle>پیام شما ثبت گردید</CModalTitle>
      </CModalHeader>
      <CModalBody>ممنون از توجه شما!</CModalBody>
    </CModal>
  );
};

export default Modal;
