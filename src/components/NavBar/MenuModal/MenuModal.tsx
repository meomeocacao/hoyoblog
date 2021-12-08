import styles from "./MenuModal.module.scss";
import React from "react";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import NightlightIcon from "@mui/icons-material/Nightlight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
interface Props {
  handleClose: () => void;
  handleOpen: () => void;
}
export const MenuModal = (props: Props) => {
  const language = ["Vietnamese", "English"];
  const [chooseLang, setChooseLang] = React.useState("English");
  const [chooseTheme, setChooseTheme] = React.useState("Light Mode");
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openLang, setOpenlang] = React.useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const openLoginRegister = () => {
    props.handleOpen();
    setOpenMenu(false);
  };
  const menuBar = React.useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      const current: any = menuBar.current;
      if (current && !current.contains(event.target)) {
        setOpenMenu(false);
        setOpenlang(false);
      }
    });
  }, [openMenu]);

  const handleChooseTheme = () => {
    setChooseTheme(chooseTheme === "Light Mode" ? "Dark Mode" : "Light Mode");
  };

  const handleChooseLanguage = () => {
    setChooseLang(chooseLang === "English" ? "Vietnamese" : "English");
  };

  const returnSelectLanguage = () => {
    return openLang ? (
      <Box className={styles.LangChoose}>
        {language.map((item, index) => {
          return (
            <Box key={item} className={styles.ItemSelect}>
              <Typography variant="body2">{item}</Typography>
            </Box>
          );
        })}
      </Box>
    ) : null;
  };

  return (
    <Box ref={menuBar} className={styles.ParentDiv}>
      <Box onClick={handleOpenMenu} className={styles.Avatar}>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Box>
      {openMenu ? (
        <Box className={styles.MenuModal}>
          <Typography className={styles.Text}>System Setting</Typography>
          <Box>
            <Box className={styles.GroupChoose}>
              <Box className={styles.ChooseBox}>
                <PublicIcon className={styles.Icon} />
                <Typography className={styles.TextSetting}>
                  Change language
                </Typography>
              </Box>
              <Box className={styles.ChooseBox} onClick={handleChooseLanguage}>
                <Typography>{chooseLang}</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
            {returnSelectLanguage()}
            <Box className={styles.GroupChoose}>
              <Box className={styles.ChooseBox}>
                <NightlightIcon className={styles.Icon} />
                <Typography className={styles.TextSetting}>
                  Display Setting
                </Typography>
              </Box>
              <Box className={styles.ChooseBox} onClick={handleChooseTheme}>
                <Typography>{chooseTheme}</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
          </Box>
          <hr className={styles.Line} />
          <Box onClick={openLoginRegister} className={styles.Item}>
            <Box className={styles.LoginButton}>
              <ExitToAppIcon />
              <Typography className={styles.TextSetting}> Login</Typography>
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
