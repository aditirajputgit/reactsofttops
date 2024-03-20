import { Box, Divider, Grid, styled, Typography } from "@material-ui/core";
import React, { Component } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CallMadeRoundedIcon from "@material-ui/icons/CallMadeRounded";
export default class Dashboard2 extends Component {
  forLeftSide = () => {
    return (
      <>
        <LeftSideDash>
          <Box className="leftSideBox1">
            <Box
              className="lsFocus"
              style={{ alignItems: "center", marginTop: "10px" }}
            >
              <Typography style={{ fontSize: "13px" }}>
                TODAY'S FOCUS
              </Typography>
              <MoreVertIcon />
            </Box>
            <Box className="lsFocus" style={{ marginTop: "20px" }}>
              <Typography variant="h3">1.8</Typography>
              <Typography>~ 6H</Typography>
            </Box>
          </Box>
          <Box className="leftSideBox2">
            <Box
              className="lsFocus"
              style={{ alignItems: "center", marginTop: "10px" }}
            >
              <Typography style={{ fontSize: "13px" }}>
                COMPLETED TASk
              </Typography>
              <MoreVertIcon />
            </Box>
            <Box className="lsFocus" style={{ marginTop: "20px" }}>
              <Typography variant="h3">2</Typography>
              <Typography>~ 5</Typography>
            </Box>
          </Box>
          <Box className="leftSideBox3">
            <Box
              className="lsFocus"
              style={{ alignItems: "center", marginTop: "10px" }}
            >
              <Typography style={{ fontSize: "13px" }}>
                MJ FAST HOURS
              </Typography>
              <Box style={{ borderRadius: "50%", backgroundColor: "white" }}>
                <CallMadeRoundedIcon
                  style={{ color: "black", padding: "2px" }}
                />
              </Box>
            </Box>
            <Box className="lsFocus" style={{ marginTop: "100px" }}>
              <Typography variant="h3">6.9</Typography>
              <Typography>~ 15.5</Typography>
            </Box>
            <Divider style={{ background: "white" }} />
            <Typography style={{ fontSize: "13px" }}>Latest Works</Typography>
            <Box>
              <img
                src="https://img.freepik.com/premium-vector/sketch-hand-drawn-single-line-art-vintage-person-use-logo-poster-background_469760-4319.jpg?w=740"
                alt="h"
                height="80px"
                width="80px"
              />
              <img
                src="https://img.freepik.com/premium-vector/sketch-hand-drawn-single-line-art-vintage-person-use-logo-poster-background_469760-4319.jpg?w=740"
                alt="h"
                height="80px"
                width="80px"
              />
              <img
                src="https://img.freepik.com/premium-vector/sketch-hand-drawn-single-line-art-vintage-person-use-logo-poster-background_469760-4319.jpg?w=740"
                alt="h"
                height="80px"
                width="80px"
              />
              <img
                src="https://img.freepik.com/premium-vector/sketch-hand-drawn-single-line-art-vintage-person-use-logo-poster-background_469760-4319.jpg?w=740"
                alt="h"
                height="80px"
                width="80px"
              />
              <img
                src="https://img.freepik.com/premium-vector/sketch-hand-drawn-single-line-art-vintage-person-use-logo-poster-background_469760-4319.jpg?w=740"
                alt="h"
                height="80px"
                width="80px"
              />
              <img
                src="https://img.freepik.com/premium-vector/sketch-hand-drawn-single-line-art-vintage-person-use-logo-poster-background_469760-4319.jpg?w=740"
                alt="h"
                height="80px"
                width="80px"
              />
            </Box>
          </Box>
        </LeftSideDash>
      </>
    );
  };

  forCenterSide = () => {
    return (
      <>
        <CenterSideDash>
          <Box className="centerSideBox1">
            <Box
              className="rsFocus"
              style={{ alignItems: "center", marginTop: "10px" }}
            >
              <Typography style={{ fontSize: "13px" }}>
                MJ FAST HOURS
              </Typography>
              <Box style={{ borderRadius: "50%", backgroundColor: "white" }}>
                <CallMadeRoundedIcon
                  style={{ color: "black", padding: "2px" }}
                />
              </Box>
            </Box>
            <Box className="rsFocus" style={{ marginTop: "100px" }}>
              <Typography variant="h2">24</Typography>
              <Typography>~ 15.5</Typography>
            </Box>
            <Divider style={{ background: "white" }} />
            <Box className="rsFocus" style={{ marginTop: "15px" }}>
              <Typography style={{ fontSize: "13px" }}>TOTAL</Typography>
              <Typography> $6.000~12.00</Typography>
            </Box>
          </Box>
          <Box className="centerSideBox2">
            <Box style={{ flex: 0.4, height: "161px", width: "100px" }}>
              <Box style={{}}>hh</Box>
            </Box>
            <Box style={{ flex: 0.6, wordWrap: "break-word" }}>
              <Typography variant="h4">AESTHETICUSABILTY EFFECT</Typography>
              <Typography>
                USERS OFTEN PERCEIVE AESTHETICALLY PLEASING DESIGN AS DESIGN
                THAT'S MORE USABLE
              </Typography>
            </Box>
          </Box>
        </CenterSideDash>
      </>
    );
  };
  forRightSide = () => {
    return (
      <>
        <RightSideDash>
          <Box className="rightSideBox1"></Box>
          <Box className="rightSideBox2">
            <Box
              style={{
                flex: 0.49,
                marginRight: "10px",
                backgroundColor: "#1f1f22",
              }}
            ></Box>
            <Box style={{ flex: 0.49, backgroundColor: "#1f1f22" }}></Box>
          </Box>
          <Box className="rightSideBox3"></Box>
        </RightSideDash>
      </>
    );
  };
  render() {
    return (
      <Dashboard>
        <Box className="innerContainer">
          <Box className="navbar"></Box>
          <Grid container spacing={2}>
            <Grid item lg={3}>
              <Box className="leftSide">{this.forLeftSide()}</Box>
            </Grid>
            <Grid item lg={3}>
              <Box className="centerSide">{this.forCenterSide()}</Box>
            </Grid>
            <Grid item lg={6}>
              <Box className="rightSide">{this.forRightSide()}</Box>
            </Grid>
          </Grid>
        </Box>
      </Dashboard>
    );
  }
}

const Dashboard = styled(Box)({
  width: "89%",
  backgroundColor: "#1f1f22",
  height: "min-content",
  padding: "70px",
  "& .innerContainer": {
    backgroundColor: "#101015",
    padding: "15px",
    color: "white",
    height: "min-content",
  },
  "& .navbar": {
    height: "60px",

    marginBottom: "10px",
  },
  "& .leftSide": {
    height: "min-content",
    // width: "200px",
  },
  "& .centerSide": {
    height: "min-content",
    // width: "200px",
  },
  "& .rightSide": {
    // width: "319px",
    color: "white",
    height: "min-content",
  },
});

const LeftSideDash = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "88vh",
  color: "white",
  "& .leftSideBox1": {
    flex: 0.25,
    backgroundColor: "#506385",
    marginBottom: "13px",
    padding: "10px",
  },
  "& .lsFocus": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  "& .leftSideBox2": {
    flex: 0.28,
    backgroundColor: "#1f1f22",
    marginBottom: "13px",
    padding: "10px",
  },
  "& .leftSideBox3": {
    flex: 0.48,
    backgroundColor: "#1f1f22",
    padding: "10px",
  },
  "& .avaratImg": {
    backgroundColor: "pink",
  },
});

const CenterSideDash = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "min-content",
  "& .centerSideBox1": {
    flex: 0.4,
    marginBottom: "13px",
    padding: "10px",
    backgroundColor: "#1f1f22 !important",
  },
  "& .centerSideBox2": {
    flex: 0.65,
    padding: "10px",
    backgroundColor: "#506385",
  },
  "& .rsFocus": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});

const RightSideDash = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "112.5vh",
  "& .rightSideBox1": {
    flex: 0.4,
    marginBottom: "13px",
    padding: "10px",
    backgroundColor: "#1f1f22",
  },
  "& .rightSideBox2": {
    flex: 0.35,
    padding: "10px",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  "& .rightSideBox3": {
    flex: 0.2,
    backgroundColor: "#1f1f22",
    padding: "10px",
  },
});
