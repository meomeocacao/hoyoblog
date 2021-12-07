import {
  Box,
  Button,
  Input,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./CreatePost.module.scss";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CloseIcon from "@mui/icons-material/Close";
import { CREATE_POST_FORM } from "../../../core";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

export const CreatePostButton = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [urlImg, setUrlImg] = React.useState("");
  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setUrlImg("");
  };
  const styleModal = () => {
    if (openModal) {
      return styles.BGModal;
    }
  };

  const styleForm = () => {
    if (urlImg) {
      return styles.CreatePostModal;
    }
    return styles.BasePostModal;
  };

  const handleClearImage = () => {
    setUrlImg("");
  };
  const onChangeImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = function () {
    //   if (typeof reader.result === "string") {
    //     setUrlImg(reader.result);
    //   }
    // };
    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") {
        setUrlImg(reader.result.toString());
      }
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div>
      <Box className={styles.TitleCreate} onClick={handleClick}>
        <DriveFileRenameOutlineIcon />
        {/* <Typography>Create</Typography> */}
      </Box>

      <Box className={styleModal()}>
        {openModal ? (
          <Box>
            <Box className={styleForm()}>
              <Box className={styles.IconClose} onClick={handleClose}>
                <CloseIcon />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ marginTop: "30px", marginRight: "20px" }}>
                  {urlImg ? (
                    <Box sx={{ display: "flex" }}>
                      <img src={urlImg} alt="" width="200" height="200" />
                      <CloseIcon
                        sx={{ color: "gray" }}
                        onClick={handleClearImage}
                      />
                    </Box>
                  ) : null}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {CREATE_POST_FORM.map((item) => {
                    return (
                      <Input
                        className={styles.InputStyle}
                        placeholder={item.placeholder}
                        name={item.name}
                      />
                    );
                  })}
                  <TextareaAutosize className={styles.TextArea} />
                  <Box>
                    <input
                      // className={styles.FileButton}
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={onChangeImage}
                      style={{ display: "none" }}
                    />
                    <label htmlFor="icon-button-file">
                      <Button
                        component="span"
                        className={styles.BaseCustomFile}
                      >
                        <DriveFolderUploadIcon />
                        <Typography>Upload Image</Typography>
                      </Button>
                    </label>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};
