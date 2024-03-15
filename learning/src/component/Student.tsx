import { Box, Button, Typography } from "@material-ui/core";
import React, { Component } from "react";

interface Props {
  name: string;
}
interface S {
  show: boolean;
}
export default class Student extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <>
        <Box style={{ textAlign: "center" }}>
          <Typography variant="h2">Hello {this.props.name}</Typography>
          {this.state.show ? this.props.name : null}
          <Button
            onClick={() => {
              this.setState({ show: false });
            }}
          >
            Hide
          </Button>
          <Button
            onClick={() => {
              this.setState({ show: true });
            }}
          >
            Show
          </Button>
          <Button
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            Toggle
          </Button>
        </Box>
      </>
    );
  }
}
