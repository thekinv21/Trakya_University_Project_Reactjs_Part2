import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const FormControls = ({ title, children, paddingTop }) => {
  return (
    <React.Fragment>
      <FormControl pt={paddingTop}>
        <FormLabel fontWeight="400" fontSize="12px">
          {title}
        </FormLabel>
        {children}
      </FormControl>
    </React.Fragment>
  );
};

export default FormControls;
