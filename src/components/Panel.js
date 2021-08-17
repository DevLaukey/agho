import React from "react";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import bentoLogo from "../assets/bento.PNG";
import IconWithDetail from "./partials/IconWithDetail";

import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import siteData from "../components/json/siteData";

const {
  name,
  stars,
  num_reviews,
  business_type,
  business_city,
  license_type,
  orders_accepted,
  business_open,
  //   business_close,
  license_id,
  license_type_info,
  delivery_fee,
  delivery_min,
  delivery_eta,
  business_phone,
  business_website,
} = siteData;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5rem 2rem 0",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0.2rem ",
    },
  },
  link: {
    color: "gray",
    textDecoration: "none",
  },
  flexDiv: {
    display: "flex",
  },
  headerTextDiv: {
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.4rem",
      marginLeft: "0.6rem",
    },
  },
  headerText: {
    fontSize: "1.5rem",
    fontWeight: "600",
    fontFamily: "arial",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  ratingDiv: {
    display: "flex",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: "0.5rem",
    fontSize: "0.9rem",
    fontWeight: "thin",
    opacity: "0.8",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem",
    },
  },

  locationText: {
    fontSize: "0.9rem",
    fontWeight: "thin",
    opacity: "0.9",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  iconListDiv: {
    marginLeft: "1rem",
    marginTop: "0.6rem",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "5.4rem",
      left: "0",
      margin: "0",
      width: "100%",
    },
  },
  iconListInnerDiv: {
    width: "15rem",
    marginBottom: "0.2rem",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  startIcon: { fontSize: "1.1rem", color: "gray" },
  endIcon: {
    marginLeft: "0.15rem",
    fontSize: "0.9rem",
    color: "gray",
    opacity: "0.8",
  },

  deliveryDiv: {
    background: "#f1f1f1",
    padding: "0.8rem",
    borderRadius: "8px",

    [theme.breakpoints.down("sm")]: {
      marginTop: "5.5rem",
      padding: "0.5rem",
    },
  },
  deliveryHeader: { fontSize: "0.9rem", fontWeight: "bold", opacity: "0.9" },
  deliveryDesc: {
    marginTop: "0.4rem",
    fontSize: "0.9rem",
    fontWeight: "thin",
    opacity: "0.9",
  },

  buttonDiv: {
    marginTop: "2.5rem",
    display: "flex",
    alignItems: "center",
    marginLeft: "9rem",

    [theme.breakpoints.down("sm")]: {
      margin: "1.5rem 0 0",
    },
  },
  buttonforWeb: {
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  buttonforMobi: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  webBtn: {
    marginRight: "1rem",
    border: "1px solid gray",
    borderRadius: "0.3rem",
    width: "12rem",
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: "gray",

    "&:hover": {
      background: "#c1272d",
      color: "white",
    },
  },

  webBtnText: {
    fontSize: "1rem",
    marginLeft: "1rem",
  },
  mobiBtn: {
    border: "1px solid black",
    borderRadius: "0.3rem",
    width: "10rem",
    height: "2.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    "&:hover": {
      background: "#c1272d",
      color: "white",
    },
  },
  loveIcon: {
    marginLeft: "0.5rem",

    "&:hover": {
      background: "#c1272d",
      color: "white",
    },
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "0rem",
      right: "0rem",
    },
  },
  logo: {
    width: "8rem",
    [theme.breakpoints.down("md")]: {
      width: "5rem",
    },
  },
}));

function Panel() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <div>
        <Grid container className={classes.flexDiv}>
          <Grid md={6} sm={12} xs={12} items className={classes.flexDiv}>
            <div>
              <img src={bentoLogo} alt="Bento Logo" className={classes.logo} />
            </div>
            <div>
              <div className={classes.headerTextDiv}>
                <div className={classes.headerText}> {name} </div>
                <div className={classes.ratingDiv}>
                  <div>
                    <Rating
                      name="half-rating"
                      defaultValue={stars}
                      precision={0.5}
                      color="white"
                      readOnly="true"
                      size="small"
                    />
                  </div>
                  <div className={classes.ratingText}>
                    {" "}
                    4.7 ({num_reviews}){" "}
                  </div>
                </div>
                <div className={classes.locationText}> {business_city}</div>
              </div>
              <div className={classes.iconListDiv}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div items className={classes.iconListInnerDiv}>
                    <IconWithDetail
                      startIcon={<DriveEtaIcon className={classes.startIcon} />}
                      label={business_type}
                    />
                    <Tooltip title={license_type_info} placement="top-start">
                      <div>
                        <IconWithDetail
                          startIcon={
                            <ChromeReaderModeIcon
                              className={classes.startIcon}
                            />
                          }
                          label={license_type}
                          endIcon={
                            <ErrorOutlineIcon className={classes.endIcon} />
                          }
                        />
                      </div>
                    </Tooltip>
                  </div>
                  <div items className={classes.iconListInnerDiv}>
                    <IconWithDetail
                      startIcon={
                        <WatchLaterIcon className={classes.startIcon} />
                      }
                      label={" Opens: " + business_open + " am"}
                      endIcon={<ErrorOutlineIcon className={classes.endIcon} />}
                      closed="Closed"
                    />

                    <Tooltip title={license_id} placement="top-start">
                      <div>
                        <IconWithDetail
                          startIcon={
                            <CheckCircleIcon className={classes.startIcon} />
                          }
                          label="License infomation"
                          endIcon={
                            <ErrorOutlineIcon className={classes.endIcon} />
                          }
                        />
                      </div>
                    </Tooltip>
                  </div>
                </div>
                <IconWithDetail
                  startIcon={<ShoppingCartIcon className={classes.startIcon} />}
                  label={"Order " + orders_accepted + " (delivery)"}
                />
              </div>
            </div>
          </Grid>
          <Grid items md={2}></Grid>
          <Grid items md={4} sm={12} xs={12}>
            <div className={classes.deliveryDiv}>
              <div className={classes.deliveryHeader}>Delivery Details</div>
              <div className={classes.deliveryDesc}>
                ${delivery_fee} Fee | ${delivery_min} minimium | eta{" "}
                {delivery_eta}
                minutes.
              </div>
            </div>
          </Grid>
        </Grid>

        <div items className={classes.buttonDiv}>
          <div className={classes.buttonforWeb}>
            <div className={classes.webBtn}>
              <PhoneIcon style={{ fontSize: "1rem" }} />
              <div className={classes.webBtnText}> {business_phone} </div>
            </div>
            <div>
              <div className={classes.webBtn}>
                <MailIcon style={{ fontSize: "1rem" }} />
                <a className={classes.link} href={business_website}>
                  <div className={classes.webBtnText}> Visit website</div>
                </a>{" "}
              </div>
            </div>
          </div>
          <div className={classes.buttonforMobi}>
            <div>
              <div className={classes.mobiBtn}>Call</div>
            </div>
            <div>
              <div className={classes.mobiBtn}>Email</div>
            </div>
          </div>
          <div
            className={classes.loveIcon}
            style={{
              width: "3rem",
              border: "solid 1px gray",
              borderRadius: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <FavoriteBorderIcon size="small" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
