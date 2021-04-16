import React from "react";

// Components
import Input from "./input";
import Select from "./select";
import CheckBox from "./checkBox";
import Textarea from "./textarea";

const Element = ({ allFields, formFields, disable }) => {
  return (
    <>
      {allFields.map((field, index) => {
        if (formFields.indexOf(field.name) !== -1) {
          switch (field.input_type) {
            case "input":
              return (
                <Input
                  key={index}
                  name={field.name}
                  type={field.type_attribute}
                  label={field.label}
                  isRequired={field.is_required}
                  isDisabled={disable}
                />
              );

            case "select":
              return (
                <Select
                  key={index}
                  url={field.options_url}
                  name={field.name}
                  label={field.label}
                  requeird_data={field.requeird_data}
                  is_required={field.is_required}
                />
              );

            case "checkbox":
              return (
                <CheckBox
                  key={index}
                  url={field.options_url}
                  name={field.name}
                  label={field.label}
                  requeird_data={field.requeird_data}
                />
              );

            case "textarea":
              return (
                <Textarea
                  key={index}
                  name={field.name}
                  label={field.label}
                  is_required={field.is_required}
                />
              );

            default:
              return null;
          }
        }
        return null;
      })}
    </>
  );
};

export default Element;
