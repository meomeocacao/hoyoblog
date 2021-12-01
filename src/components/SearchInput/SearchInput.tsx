import { Box, Input, Typography } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { SEARCH_PLACEHOLDER } from "../../core";
import InputBase from "@mui/material/InputBase";
export const SearchInput = () => {
  const trending = [
    "Game",
    "Wibu",
    "DBRR",
    "Game",
    "Wibu",
    "DBRR",
    "Game",
    "Wibu",
    "DBRR",
  ];
  const [history, setHistory] = React.useState([""]);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [value, setValue] = React.useState("");
  const [showCanel, setShowCanel] = React.useState(false);
  const [showTable, setShowTable] = React.useState(false);
  const [click, setClick] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(event.target.value);
    setShowCanel(event.target.value.length > 0);
  };
  const showCancelIcon = () => {
    return showCanel ? (
      <CancelIcon
        className={styles.CancelIcon}
        onClick={() => {
          setValue("");
          setShowCanel(false);
        }}
      />
    ) : null;
  };

  const handleClick = () => {
    setClick(true);
    setShowTable(true);
  };

  const styleInputDiv = () => {
    if (click) {
      return styles.SearchInputActive;
    }
    return styles.SearchInput;
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      const current: any = menuRef.current;
      if (current && !current.contains(event.target)) {
        setClick(false);
        setShowTable(false);
      }
    });
  }, [click]);

  const clickSearch = () => {
    if (value) {
      setHistory([...history, value]);
    }
  };

  const clickCancel = () => {
    setHistory([]);
  };
  const showHistory = () => {
    return history.length > 1 ? (
      <Box>
        <Box className={styles.BoxHistory}>
          <Typography className={styles.TitleTable}>History</Typography>
          <CancelIcon className={styles.CancelIcon} onClick={clickCancel} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {history.map((item, index) => {
            return item.length > 0 ? (
              <Typography key={index} className={styles.TrendItem}>
                {item}
              </Typography>
            ) : null;
          })}
        </Box>
      </Box>
    ) : null;
  };

  const showTableTrending = () => {
    return showTable ? (
      <Box className={styles.TableSearch}>
        {showHistory()}
        <Box>
          <Typography className={styles.TitleTable}>Trending</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {trending.map((item, index) => {
              return (
                <Typography key={index} className={styles.TrendItem}>
                  {item}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Box>
    ) : null;
  };
  return (
    <div ref={menuRef}>
      <div className={styleInputDiv()} onClick={handleClick}>
        <SearchIcon className={`${styles.SearchIcon} `} onClick={clickSearch} />
        <InputBase
          placeholder={SEARCH_PLACEHOLDER}
          value={value}
          onChange={handleChange}
        />
        {showCancelIcon()}
      </div>
      {showTableTrending()}
    </div>
  );
};
