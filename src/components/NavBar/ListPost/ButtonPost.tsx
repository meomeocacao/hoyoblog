import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { IconWhalea, IconWaveCloud } from "../../../asset";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "../ListPost/ListPost.module.scss";

interface Props {
  nameGroupIcon: string;
  nameIcon: string;
  nameIconVice: string;
  buttonText: string;
  iconComponent: JSX.Element;
  iconComponent2: JSX.Element;
  iconComponent3?: JSX.Element;
}

export const ButtonPost = (props: Props) => {
  return (
    <Box className={props.nameGroupIcon}>
      <Box className={props.nameIcon}>
        {props.iconComponent}
        {props.iconComponent3}
        <Box className={props.nameIconVice}>{props.iconComponent2}</Box>
      </Box>
      <Typography>{props.buttonText}</Typography>
      <ArrowForwardIosIcon className={styles.ArrowIcon} />
    </Box>
  );
};
