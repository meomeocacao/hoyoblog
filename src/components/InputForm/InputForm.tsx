import { Input } from "@mui/material";
import { SxProps } from "@mui/system";
import React from "react";
import styles from "./InputForm.module.scss";

interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style: SxProps;
  name: string;
}

export const InputForm = (props: Props) => (
  <Input
    placeholder={props.placeholder}
    onChange={props.onChange}
    sx={props.style}
    name={props.name}
  />
);
