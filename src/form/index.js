import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  CCard,
  CCardHeader,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CContainer,
  CButton,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { postFormData } from "../dataManager/actions";

// Components
import Element from "./element";

// Form Config
import config from "../config/dynamicFormConfig.json";

// Form Component
const Form = () => {
  const history = useHistory();
  const formData = useSelector((state) => state.formDataReducer);
  const dispatch = useDispatch();

  let { slug } = useParams();
  console.log(slug);

  // Get the array of pathes without "/form" & "/"
  let location = history.location.pathname.split("/");
  let routes = location.filter((item) => item != false);
  routes.shift();

  const handleSubmit = (e) => {
    e.preventDefault();
    const API_Urls = routes.map((route) => config[route].API_URL);
    const requiredData = routes.map((route) => config[route].send_data);
    dispatch(postFormData(formData, API_Urls, requiredData));
  };

  const redirect = () => {
    history.push("/form");
    return null;
  };

  return (
    <>
      <CCard>
        <CCardHeader>فرم داینامیک</CCardHeader>
      </CCard>
      <CContainer>
        <CRow>
          <CCol sm="12">
            {routes.length !== 0 ? (
              <CForm onSubmit={(e) => handleSubmit(e)}>
                <CFormGroup className="d-flex flex-wrap justify-content-between">
                  {routes.map((route, i) =>
                    config[route] ? (
                      <Element
                        key={i}
                        allFields={config[route].fields}
                        formFields={config[route].form_fields}
                        disable={false}
                      />
                    ) : // redirect()
                    null
                  )}
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
            ) : (
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
            )}
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Form;
