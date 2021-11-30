import React, { useState } from "react";
import styles from "./RegisterForm.module.scss";
import { Box, Button, Input, Modal, Typography } from "@mui/material";
import { RegisterState } from "../../types";
import { FORM_STYLE, MODAL_STYLE } from ".";
import { PLACEHOLDER_REGISTER } from "../../core";
import { InputForm } from "..";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export const RegisterForm = (props: Props) => {
  const state: RegisterState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [infor, setInfor] = useState(state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={MODAL_STYLE}>
        <InputForm
          style={FORM_STYLE}
          onChange={handleChange}
          placeholder={PLACEHOLDER_REGISTER.USERNAME}
          value={infor.username}
        />
        <Button>Register</Button>
      </Box>
    </Modal>
  );
};
