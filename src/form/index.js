import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CCard,
  CCardHeader,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CContainer,
  CButton,
  CAlert,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { postFormData } from "../dataManager/actions";

// Components
import Element from "./element";
import TicketMessage from "./ticketMessage";

// Form Config
import config from "../config/dynamicFormConfig.json";

// Form Component
const Form = () => {
  // const [showForm, setShowForm] = useState(false);
  // const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();
  const formData = useSelector((state) => state.formDataReducer);
  const res = useSelector((state) => state.resData);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (URLs.indexOf(location) !== -1) {
  //     setShowForm(true);
  //   }
  // }, []);

  useEffect(() => {
    console.log(res);
  }, [res]);

  let URLs = Object.keys(config);

  // Get the path without "/form" & "/"
  let location = history.location.pathname
    .replace("/form/", "")
    .replace("/", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postFormData(formData, `/${location}/`));
    history.push("/form/ticket-message");
  };

  return (
    <>
      <CCard>
        <CCardHeader>فرم داینامیک</CCardHeader>
      </CCard>
      <CContainer>
        <CRow>
          <CCol sm="12">
            {location === "form" ? (
              <div>
                <CButton
                  size="lg"
                  color="primary"
                  className={`m-3 px-4`}
                  onClick={() => history.push("/form/ticketing")}
                >
                  ورود به بخش تیکتینگ
                </CButton>
              </div>
            ) : URLs.indexOf(location) !== -1 ? (
              <CForm action="" method="post" onSubmit={(e) => handleSubmit(e)}>
                <CFormGroup>
                  {
                    <Element
                      allFields={config[location].fields}
                      formFields={config[location].form_fields}
                    />
                  }
                </CFormGroup>
                <CButton
                  type="submit"
                  size="lg"
                  color="primary"
                  className={`m-3 px-4`}
                >
                  ثبت
                </CButton>
                <CButton type="reset" size="lg" color="danger" className="m-3">
                  انصراف
                </CButton>
              </CForm>
            ) : location === "ticket-message" ? (
              <TicketMessage />
            ) : (
              <div>
                <CAlert color="info">فرم مورد نظر یافت نشد!</CAlert>
                <CButton
                  size="lg"
                  color="primary"
                  className={`m-3 px-4`}
                  onClick={() => history.push("/form/ticketing")}
                >
                  ورود به بخش تیکتینگ
                </CButton>
              </div>
            )}
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Form;
