import React from "react";
import { Label } from "reactstrap";
import Select, { components } from "react-select";
import { Controller } from "react-hook-form";

export default function FormSelect({ label, control, register, placeholder, name, isClearable, isMulti, isSearchable, sideArrow, change, isRequire, ...props }) {
  return (
    <>
      <Label for="input-title" className="label-input">
        {label}
        {isRequire ? " *" : ""}
      </Label>

      <div className="">
        <FormattedMessage
          {...messages[placeholder || label]}
          children={(msg) => {
            return (
              <Controller
                name={name}
                control={control}
                ref={register}
                render={({ onChange, value }) => {
                  function handleChange(params) {
                    change && change(params);
                    onChange(params);
                  }
                  return (
                    <Select
                      // components={{ DropdownIndicator }}
                      // className="basic-single input-style"
                      classNamePrefix="select"
                      isClearable={isClearable}
                      isSearchable={isSearchable}
                      isMulti={isMulti}
                      onChange={handleChange}
                      value={value}
                      placeholder={msg}
                      {...props}
                    />
                  );
                }}
              />
            );
          }}
        />
      </div>
    </>
  );
}
