import { Box } from "@mui/material";
import React from "react";
import { NavTabs } from "../components";
import { ListPosts } from "../components/NavBar/ListPost/ListPost";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <Box className={styles.ParenBox}>
      <NavTabs />
      Home Page
      <Box className={styles.ParentComponent}>
        <Box className={styles.ChildComponent1}>asdasdasdasdasdasdas</Box>
        <Box className={styles.ChildComponent2}>
          <ListPosts />
        </Box>
        <Box className={styles.ChildComponent3}>asdasdasdasdasdasdas</Box>
      </Box>
    </Box>
  );
};
