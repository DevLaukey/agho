import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexDiv: {
    display: "flex",
    alignItems: "center",
  },
  iconText: {
    marginLeft: "0.4rem",
    fontSize: "0.9rem",
    fontWeight: "thin",
    opacity: "0.9",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "0.3rem",
      fontSize: "0.8rem",
    },
  },
}));

function IconWithDetail({ startIcon, endIcon, label, closed }) {
  const classes = useStyles();
  return (
    <div className={classes.flexDiv}>
      {startIcon}
      <div className={classes.iconText}>
        {" "}
        <span style={{ color: "red", fontSize: "1.2", fontWeight: "bold" }}>
          {closed}
        </span>{" "}
        {label}{" "}
      </div>
      {endIcon}
    </div>
  );
}

export default IconWithDetail;
