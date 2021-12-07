import React from "react";
import styles from "./Notification.module.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Box } from "@mui/system";
import { NotificationData } from "../../../core/data";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { IconShark } from "../../../asset";

export const NotificationIcon = () => {
  const [openNoti, setOpenNoti] = React.useState(false);
  const handleOpenNoti = () => {
    setOpenNoti(!openNoti);
  };
  const [notiData, setNotiData] = React.useState(NotificationData);
  const modalNoti = React.useRef(null);
  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      const current: any = modalNoti.current;
      if (current && !current.contains(event.target)) {
        setOpenNoti(false);
      }
    });
  }, [openNoti]);
  return (
    <div className={styles.Notification} ref={modalNoti}>
      <Box className={styles.TitleNoti} onClick={handleOpenNoti}>
        <NotificationsNoneIcon />

        {notiData.length > 0 ? (
          <FiberManualRecordIcon className={styles.DotNoti} />
        ) : null}
      </Box>
      {openNoti ? (
        <Box className={styles.ModalNoti}>
          {NotificationData.map((data) => (
            <Box className={styles.ItemNoti}>
              <Box className={styles.AvatarNoti}>
                <img
                  src={data.icon}
                  alt="avatar"
                  className={styles.AvatarNoti}
                />
              </Box>
              <Box className={styles.ContentNoti}>
                <Box className={styles.TitleNotiItem}>{data.title}</Box>
                <Box className={styles.TimeNoti}>{data.time}</Box>
              </Box>
              <Box>
                <Box className={styles.IconNoti}>
                  <CheckIcon />
                </Box>
                <Box className={styles.IconNoti}>
                  <ClearIcon />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      ) : null}
    </div>
  );
};
