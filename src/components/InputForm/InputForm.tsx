import { Input } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import styles from "./InputForm.module.scss";

interface Props {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style: SxProps;
}

export const InputForm = (props: Props) => (
  <Input
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    sx={props.style}
  />
);
