import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button, Modal } from "@mui/material";
import { RegisterForm } from "..";
import styles from "./NavTabs.module.scss";
import { SearchInput } from "../SearchInput/SearchInput";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Avatar from "@mui/material/Avatar";
import { MenuModal } from "./MenuModal/MenuModal";
import { CreatePostButton } from "./CreatePost/CreatePost";
import { NotificationIcon } from "./Notification/Notification";
import { Link } from "react-router-dom";
interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export const NavTabs = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [activeAnimation, setActiveAnimation] = React.useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleOpen = () => {
    setOpen(true);
    setActiveAnimation(false);
    setOpenMenu(false);
  };
  const handleClose = () => {
    setActiveAnimation(true);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const menuBar = React.useRef();
  // React.useEffect(() => {
  //   document.addEventListener("mousedown", (event) => {
  //     const current: any = menuBar.current;
  //     if (current && !current.contains(event.target)) {
  //       setOpenMenu(false);
  //     }
  //   });
  // }, [openMenu]);
  return (
    <Box className={styles.NavBar}>
      <Box>
        {/* <LinkTab label="LOGO HOME" href="/" /> */}
        <Link to="/">LOGO HOME</Link>
        {/* LOGO HOME */}
      </Box>
      <Box className={styles.SearchInput}>
        <SearchInput />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CreatePostButton />
        <NotificationIcon />
        <Box ref={menuBar} sx={{ marginTop: 1 }}>
          <MenuModal handleClose={handleClose} handleOpen={handleOpen} />
        </Box>
        <RegisterForm
          handleClose={handleClose}
          ani={activeAnimation}
          open={open}
        />
      </Box>
    </Box>
  );
};
