import { SxProps } from "@mui/system";

export const MODAL_STYLE: SxProps = {
  display: "flex",
  flexDirection: "column",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const FORM_STYLE: SxProps = {
  margin: 5,
  padding: 5,
};
