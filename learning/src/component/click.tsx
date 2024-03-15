import { Box, Button, Typography } from "@material-ui/core";
import React, { Component } from "react";

interface S {
  num: number;
}

interface Props {}

class MyButton extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  onButtonInc = () => {
    console.log("button is clicked ");
    this.setState((prevState) => ({
      num: prevState.num + 1,
    }));
  };

  onButtonDec = () => {
    this.setState((prevState) => ({
      num: prevState.num - 1,
    }));
  };

  render() {
    return (
      <>
        <Box>
          <Button variant="contained" onClick={this.onButtonInc}>
            Inc
          </Button>
          <Button onClick={this.onButtonDec}>Dec</Button>
          <Typography>{this.state.num}</Typography>
        </Box>
      </>
    );
  }
}

export default MyButton;
