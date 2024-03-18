import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { Component } from "react";

export default class Design extends Component {
  render() {
    return (
      <>
        <GridBox>
          <Box className="box">
            <Box className="box1 gridbox1">cell1</Box>
            <Box className="box1 gridbox2">cell2</Box>
            <Box className="box1 gridbox3">cell3</Box>
          </Box>
        </GridBox>
      </>
    );
  }
}

const GridBox = styled(Box)({
  backgroundColor: "rgb(51,51,51)",
  height: "100vh",
  "& .box": {
    display: "flex",
  },
  "& .gridbox1": {
    height: "80px",
    width: "20%",
  },
  "& .box1": {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    backgroundColor: "rgb(66,66,66)",
    color: "white",

    border: "1px solid rgb(51,51,51)",
  },
});
