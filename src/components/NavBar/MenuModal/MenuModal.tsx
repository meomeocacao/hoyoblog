import styles from "./MenuModal.module.scss";
import React from "react";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  //   handleOpenRegister: () => void;
}
export const MenuModal = (props: Props) => {
  return props.isOpen ? (
    <Box className={styles.MenuModal}>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Box>
        <Typography>System Setting</Typography>
        <Box>
          <Typography>Change language</Typography>
          <Typography>Display Setting</Typography>
        </Box>
        <Box onClick={props.handleOpen}>Login</Box>
      </Box>
    </Box>
  ) : null;
};
