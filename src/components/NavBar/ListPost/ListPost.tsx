import { Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { PostData } from "../../../core/data";
import { ButtonPostGroup } from "./ButtonPostGroup";
import styles from "./ListPost.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { PostType } from "../../../core";
import { GetPosts } from "../../../core/Apis/api";

export const ListPosts = () => {
  const listHot = ["Hot", "Featured", "New Post", "New Replies"];
  const [textSearch, setTextSearch] = React.useState(listHot[0]);
  const [openList, setOpenList] = React.useState(false);
  const openListPost = () => {
    setOpenList(!openList);
  };
  const listPost = React.useRef();
  const [listPostData, setListPostData] = React.useState<PostType[]>([]);

  React.useEffect(() => {
    const getListPost = async () => {
      const data = await GetPosts();
      setListPostData(data);
    };
    getListPost();
  }, [listPostData]);

  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      const current: any = listPost.current;
      if (current && !current.contains(event.target)) {
        setOpenList(false);
      }
    });
  }, [openList]);

  const setHotList = (item: string) => {
    setTextSearch(item);
    setOpenList(false);
  };

  return (
    <div>
      <Box>
        <ButtonPostGroup />
        <Box className={styles.BoxHome}>
          <Typography className={styles.TextHomeBox}>Home</Typography>
          <Box ref={listPost}>
            <Box className={styles.BoxHomeBox} onClick={openListPost}>
              <Box className={styles.TextHomeBox}>{textSearch}</Box>
              <Box className={styles.TextHomeBox}>
                <Box
                  className={
                    openList ? styles.TextHomeBox : styles.TextHomeBoxClose
                  }
                >
                  <ArrowDropDownIcon />
                </Box>
              </Box>
            </Box>
            {openList ? (
              <Box className={styles.LangChoose}>
                {listHot.map((item) => (
                  <Box
                    key={item}
                    className={styles.ItemSelect}
                    onClick={() => setHotList(item)}
                  >
                    <Typography
                      variant="body2"
                      className={styles.TextItemSelect}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : null}
          </Box>
        </Box>
        {listPostData.map((post, index) => {
          return (
            <Box>
              <div className={styles.AvaPost}>
                <div className={styles.AvatarUser}>
                  <img src={post.user?.image} alt="" width="50px" />
                  <div className={styles.ToolTipUser}>
                    <div>
                      <img
                        src={post.user?.image}
                        alt=""
                        width="200px"
                        height="200px"
                        className={styles.AvatarUser}
                      />
                    </div>
                    <div className={styles.UserInfor}>
                      <div>{post.user?.userName}</div>
                      <div>{post.user?.email}</div>
                      <div>{post.user?.lastOnline}</div>
                    </div>
                  </div>
                </div>

                <div className={styles.InforPost}>
                  <div className={styles.Username}>{post.user?.userName}</div>
                  <div>{post.createAt}</div>
                </div>
              </div>
              <div className={styles.post} key={post.id}>
                <div className={styles.post_title}>{post.title}</div>
                <div className={styles.post_content}>{post.content}</div>
                <img src={post.image} alt="" className={styles.post_img} />
              </div>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};
