import React, { useState } from "react";
import styles from "./RegisterForm.module.scss";
import { Box, Button, Input, Modal, Typography } from "@mui/material";
import { RegisterState } from "../../types";
import {
  BUTTON_REGISTER_STYLE,
  FORM_STYLE,
  MODAL_STYLE,
  TEXT_STYLE,
  TITlE_STYLE,
} from ".";
import {
  LETTER_AND,
  POLICY_TEXT,
  PRIVACY_POLICY,
  PRIVACY_POLICY_URL,
  REGISTER_FORM,
  RETURN_LOGIN,
  SOCIAL_MEDIAL,
  TERMS_OF_SERVICE_URL,
  TERM_OF_SERVICE,
} from "../../core";
import { InputForm } from "..";
import Checkbox from "@mui/material/Checkbox";
import {
  DIALOG_IMAGE,
  ERROR_TEXT,
  REGEX_EMAIL,
  REGISTER_SUCCESS,
  URL_IMAGE,
} from "../../core/img-url.constants";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import DialogImage from "../../asset/images/dialog.png";
import PaimonMuscle from "../../asset/images/paimonmuscle.png";
interface Props {
  open: boolean;
  ani: boolean;
  handleClose: () => void;
}

export const RegisterForm = (props: Props) => {
  const [urlPaimon, setUrlPaimon] = useState(URL_IMAGE.PAIMON_2);
  const state: RegisterState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [infor, setInfor] = useState(state);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const newInfor = { ...infor, [e.target.name]: e.target.value };
    setInfor(newInfor);
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [text, setText] = useState("");
  const submitRegister = () => {
    const validate = ValidateInformation();
    setOpenDialog(true);
    setText(validate);
    if (validate === REGISTER_SUCCESS.TITLE) {
      setUrlPaimon(PaimonMuscle);
    } else {
      setUrlPaimon(URL_IMAGE.PAIMON);
    }
  };

  const ValidateInformation = (): string => {
    if (infor.username.length < 1) {
      return ERROR_TEXT.USERNAME_INVALID;
    }
    if (infor.email.length < 1) {
      return ERROR_TEXT.EMAIL_INVALID;
    }
    if (!REGEX_EMAIL.test(infor.email)) {
      return ERROR_TEXT.REGEX_EMAIL_INVALID;
    }
    if (infor.password.length < 6) {
      return ERROR_TEXT.PASSWORD_INVALID;
    }
    if (infor.password !== infor.confirmPassword) {
      return ERROR_TEXT.PASSWORD_CONFIRM;
    }

    return REGISTER_SUCCESS.TITLE;
  };
  const onCloseModal = () => {
    props.handleClose();
    setOpenDialog(false);
    setText("");
    setUrlPaimon(URL_IMAGE.PAIMON_2);
  };
  return (
    <Modal
      open={props.open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={MODAL_STYLE} className={props.ani ? styles.ani : ""}>
        <Box className={styles.CloseButton} onClick={onCloseModal}>
          <CloseIcon />
        </Box>
        <Typography sx={TITlE_STYLE} className={styles.RegisterImage}>
          Register Form
        </Typography>
        <Box>
          <img src={urlPaimon} className={styles.ImageContent} alt="" />
          {openDialog ? (
            <img src={DialogImage} className={styles.ImageDialog} alt="" />
          ) : null}
          <Typography className={styles.TextDialog}>{text}</Typography>
        </Box>
        {REGISTER_FORM.map((item) => {
          return (
            <InputForm
              style={FORM_STYLE}
              onChange={handleChange}
              placeholder={item.placeholder}
              name={item.name}
            />
          );
        })}
        <Box sx={{ display: "flex" }}>
          <Checkbox {...label} defaultChecked />
          <Typography
            variant="body2"
            color="textSecondary"
            className={styles.Priorty}
          >
            {POLICY_TEXT}
            <a target="_blank" rel="noreferrer" href={TERMS_OF_SERVICE_URL}>
              {TERM_OF_SERVICE}
            </a>
            {LETTER_AND}
            <a target="_blank" rel="noreferrer" href={PRIVACY_POLICY_URL}>
              {PRIVACY_POLICY}
            </a>
          </Typography>
        </Box>
        <Button onClick={submitRegister} sx={BUTTON_REGISTER_STYLE}>
          Register
        </Button>
        <Typography className={styles.SmallTitle}>{SOCIAL_MEDIAL}</Typography>
        <Box className={styles.ToLogin}>
          <Typography className="loginTitle">{RETURN_LOGIN}</Typography>
          <ArrowForwardIosIcon />
        </Box>
      </Box>
    </Modal>
  );
};
