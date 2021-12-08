import { Box } from "@mui/material";
import React from "react";
import { NavTabs } from "../components";
import { ListPosts } from "../components/NavBar/ListPost/ListPost";
import styles from "./HomePage.module.scss";
import { Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { Expenses, Invoices } from "../router/ReactRouter";
import App from "../App";
import { TabLeft } from "../components/TabLeft/TabLeft";

export const HomePage = () => {
  return (
    <Box className={styles.ParenBox}>
      <NavTabs />
      <Box className={styles.ParentComponent}>
        <Box className={styles.ChildComponent1}>
          <TabLeft />
        </Box>
        <Box className={styles.ChildComponent2}>
          <Routes>
            <Route path="home" element={<ListPosts />} />
            <Route path="about" element={<Expenses />} />
            <Route path="contact" element={<Invoices />} />
          </Routes>
        </Box>
        <Box className={styles.ChildComponent3}>asdasdasdasdasdasdas</Box>
      </Box>
    </Box>
  );
};
