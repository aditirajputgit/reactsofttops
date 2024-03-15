import { Button, Typography } from "@material-ui/core";
import { Component } from "react";

class Alert extends Component {
  onclickClickme = () => {
    alert("hello ji ");
  };

  render() {
    return (
      <>
        <Typography>Hello</Typography>
        <Button
          onClick={() => {
            this.onclickClickme();
          }}
        >
          click me1{" "}
        </Button>
        <Button
          onClick={() => {
            this.onclickClickme();
          }}
        >
          click me2{" "}
        </Button>
        {this.onclickClickme()}
      </>
    );
  }
}
export default Alert;
