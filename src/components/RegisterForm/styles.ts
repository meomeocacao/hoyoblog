import { SxProps } from "@mui/system";
import { FONT_TEXT } from "../../core/style-constants";

export const MODAL_STYLE: SxProps = {
  display: "flex",
  flexDirection: "column",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export const FORM_STYLE: SxProps = {
  margin: 2,
  padding: 1,
};

export const BUTTON_REGISTER_STYLE: SxProps = {
  backgroundColor: "#657ef8",
  color: "primary.contrastText",
  ":hover": {
    backgroundColor: "primary.dark",
  },
  padding: 1,
  margin: 1,
  fontWeight: "bold",
};

export const TEXT_STYLE: SxProps = {
  fontSize: 14,
  font: FONT_TEXT,
};

export const TITlE_STYLE: SxProps = {
  fontSize: 32,
  textAlign: "center",
  zIndex: 1,
  fontFamily: "Montserrat, sans-serif",
  color: "white",
  fontWeight: "bold",
};
