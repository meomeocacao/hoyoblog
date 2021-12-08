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
import { CreatePostType, CREATE_POST_FORM } from "../../../core";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import axios from "axios";
import { Host } from "../../../core/Apis/api";
import LinearProgress from "@mui/material/LinearProgress";

export const CreatePostButton = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [urlImg, setUrlImg] = React.useState("");
  const [activeButton, setActiveButton] = React.useState(false);
  const [post, setPost] = React.useState({
    title: "",
    content: "",
  });
  const [image, setImage] = React.useState("");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const submitData = async () => {
    setActiveButton(true);
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("content", post.content);
    formData.append("file", image);

    axios.post(`${Host}/post`, formData, {}).then((res) => {
      console.log(res);
      setActiveButton(false);
      setOpenModal(false);
      setImage("");
      handleClearImage();
      setPost({
        title: "",
        content: "",
      });
    });
  };

  const handleClearImage = () => {
    setUrlImg("");
  };
  const onChangeImage = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
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
      </Box>

      <Box className={styleModal()}>
        {openModal ? (
          <Box>
            <Box
              className={urlImg ? styles.CreatePostModal : styles.BasePostModal}
            >
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
                        onChange={handleChange}
                      />
                    );
                  })}
                  <TextareaAutosize className={styles.TextArea} />
                  <Box>
                    <input
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
                  <Button disabled={activeButton} onClick={submitData}>
                    Upload Post
                  </Button>
                  {activeButton && <LinearProgress />}
                </Box>
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
    </div>
  );
};
