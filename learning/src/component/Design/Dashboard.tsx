import { Badge, Box, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { Component } from "react";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

export default class Dashboard extends Component {
  render() {
    return (
      <DashboardBox>
        <Box className="dashboardInnerBox">
          <Box className="dashboardNavBar">
            <Box className="dashboardNavBars">
              <Box className="logo">Gf</Box>
              <Typography className="navbarMenu"> Dashboard</Typography>
              <Typography className="navbarMenu">Payments</Typography>
              <Typography className="navbarMenu">Analysis</Typography>
              <Typography className="navbarMenu">Cards</Typography>
              <Typography className="navbarMenu">History</Typography>
              <Typography className="navbarMenu">Services</Typography>
              <Typography className="navbarMenu">Help</Typography>
            </Box>
            <Box className="dashboardSettingAndNotification">
              <SettingsOutlinedIcon />
              <Badge color="secondary" variant="dot">
                <NotificationsOutlinedIcon />
              </Badge>
              <Typography>Mathieu</Typography>
              <Box className="logo">ph</Box>
            </Box>
          </Box>
          <Box className="bankDetailsAndHistory">
            <Box className="bankDetailsLeft">
              <Box className="bankDetailsLeftAccount">
                <Typography style={{ fontSize: "21px" }}>Accounts</Typography>
                <AddIcon />
              </Box>
              <Box className="bankDetailsLeftEuroAccount">
                <Box className="bankDetailsLeftEuroAccountHeading">
                  <Typography variant="h6">$3,524.60</Typography>
                  <MoreHorizIcon />
                </Box>
                <Typography
                  style={{
                    fontSize: "10px",
                    color: "rgb(194,198,215)",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Euro Account
                </Typography>
                <Box className="bankDetailsLeftCard">
                  <Paper className="bankDetailsLeftCardPaper">.</Paper>
                  <Paper
                    className="bankDetailsLeftCardPaper"
                    style={{
                      marginLeft: "9px",
                    }}
                  >
                    .
                  </Paper>
                </Box>
              </Box>
              <Box className="bankDetailsLeftEuroAccount">
                <Box className="bankDetailsLeftEuroAccountHeading">
                  <Typography variant="h6">$3,524.60</Typography>
                  <MoreHorizIcon />
                </Box>
                <Typography
                  style={{
                    fontSize: "10px",
                    color: "rgb(194,198,215)",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Dollar Account
                </Typography>
                <Box className="bankDetailsLeftCard">
                  <Paper className="bankDetailsLeftCardPaper">.</Paper>
                </Box>
              </Box>
              <Box className="bankDetailsLeftEuroAccount">
                <Box className="bankDetailsLeftEuroAccountHeading">
                  <Typography variant="h6">$3,524.60</Typography>
                  <MoreHorizIcon />
                </Box>
                <Typography
                  style={{
                    fontSize: "10px",
                    color: "rgb(194,198,215)",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Crpto Account
                </Typography>
                <Box>
                  {/* <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/1.jpg" />
                  </AvatarGroup> */}
                </Box>
              </Box>
            </Box>
            <Box className="bankDetailsCenter">Box2</Box>
            <Box className="bankDetailsRight">Box3</Box>
          </Box>
        </Box>
      </DashboardBox>
    );
  }
}

const DashboardBox = styled(Box)({
  backgroundColor: "rgb(29,33,39)",
  height: "100%",
  padding: "20px",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  "& .dashboardInnerBox": {
    backgroundColor: "rgb(246,246,246)",
    height: "90%",
    width: "95%",
    border: "16px solid rgb(23,25,31)",
    borderRadius: "10px",
  },
  "& .dashboardNavBar": {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    height: "35px",
    alignItems: "center",
    padding: "15px",
    flexDirection: "row",
  },
  "& .dashboardNavBars": {
    display: "flex",
    width: "70%",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  "& .navbarMenu:hover": {
    background: "rgb(243,245,254)",
    padding: 8,
    borderRadius: "8px",
  },

  "& .logo": {
    borderRadius: "50%",
    backgroundColor: "rgb(193,253,51)",
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .dashboardSettingAndNotification": {
    display: "flex",
    alignItems: "center",
    width: "20%",
    justifyContent: "space-around",
  },
  "& .bankDetailsAndHistory": {
    display: "flex",
    padding: "20px",
  },
  "& .bankDetailsLeft": {
    flex: 0.2,
    backgroundColor: "red",
    height: "min-content",
  },
  "& .bankDetailsLeftAccount": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .bankDetailsLeftEuroAccount": {
    height: "100px",
    borderRadius: "10px",
    backgroundColor: "white",
    marginTop: "8px",
    padding: "8px",
  },
  "& .bankDetailsLeftEuroAccountHeading": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .bankDetailsLeftCard": {
    display: "flex",
    marginTop: "10px",
  },
  "& .bankDetailsCenter": {
    flex: 0.5,
  },
  "& .bankDetailsLeftCardPaper": {
    backgroundColor: "red",
    height: "40px",
    width: "65px",
  },
});
