import React from "react";
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

// Components
import Element from "./element";

// Form Config
import config from "../config/dynamicFormConfig.json";

const TicketMessage = () => {
  return (
    <>
      <CCard>
        <CCardHeader>فرم داینامیک</CCardHeader>
      </CCard>
      <CContainer>
        <CRow>
          <CCol sm="12">
            <CForm>
              <CFormGroup>
                {
                  <Element
                    allFields={config.ticketing.fields}
                    formFields={config.ticketing.message_fields}
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
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default TicketMessage;
