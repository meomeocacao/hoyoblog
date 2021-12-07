import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  IconWhalea,
  IconWaveCloud,
  IconShark,
  IconRocket,
} from "../../../asset";
import styles from "./ListPost.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { ButtonPost } from "./ButtonPost";

export const ButtonPostGroup = () => {
  return (
    <Box>
      <Typography className={styles.PostNowText}>Post now ~</Typography>
      <Box className={styles.GroupIcons}>
        <ButtonPost
          nameGroupIcon={styles.GroupIcon1}
          nameIcon={styles.IconWhalea}
          nameIconVice={styles.IconWaveWhale}
          buttonText="Whale"
          iconComponent={<IconWhalea />}
          iconComponent2={<IconWaveCloud />}
        />
        <ButtonPost
          nameGroupIcon={styles.GroupIcon2}
          nameIcon={styles.IconShark}
          nameIconVice={styles.IconSharkLight}
          buttonText="Shark"
          iconComponent={<IconShark />}
          iconComponent2={<LightModeIcon />}
        />
        <ButtonPost
          nameGroupIcon={styles.GroupIcon3}
          nameIcon={styles.IconRocket}
          nameIconVice={styles.IconRocketCloud}
          buttonText="Rocket"
          iconComponent={<IconRocket />}
          iconComponent2={<CloudQueueIcon />}
          iconComponent3={<ViceComponentRocket />}
        />
      </Box>
    </Box>
  );
};

const ViceComponentRocket = () => {
  return <Typography className={styles.IconRocketGo}>|||</Typography>;
};
