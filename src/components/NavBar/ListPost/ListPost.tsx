import { Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { PostData } from "../../../core/data";
import { ButtonPostGroup } from "./ButtonPostGroup";
import styles from "./ListPost.module.scss";

export const ListPosts = () => {
  const listHot = ["Hot", "Featured", "New Post", "New Replies"];
  const [textSearch, setTextSearch] = React.useState(listHot[0]);
  const [openList, setOpenList] = React.useState(false);
  const openListPost = () => {
    setOpenList(!openList);
  };
  const listPost = React.useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      const current: any = listPost.current;
      if (current && !current.contains(event.target)) {
        setOpenList(false);
      }
    });
  }, [openList]);
  return (
    <div>
      <Box ref={listPost}>
        <ButtonPostGroup />
        <Box className={styles.BoxHome}>
          <Typography>Home</Typography>
          <Box className={styles.BoxHomeBox}>
            <Box onClick={openListPost}>{textSearch}</Box>
            {openList ? (
              <Box className={styles.LangChoose}>
                {listHot.map((item, index) => (
                  <Box key={item} className={styles.ItemSelect}>
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ))}
              </Box>
            ) : null}
          </Box>
        </Box>
        {PostData.map((post, index) => {
          return (
            <Box>
              <div className={styles.post} key={post.id}>
                <div className={styles.post_title}>{post.title}</div>
                <div className={styles.post_content}>{post.content}</div>
              </div>
            </Box>
          );
        })}
      </Box>
    </div>
  );
};
