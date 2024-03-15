import { Box, Button, TextField, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
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
        <OuterBoxStyled style={{ textAlign: "center" }}>
          <Typography>heloo</Typography>
          <form>
            <TextField
              required
              id="standard-required"
              label=""
              variant="outlined"
              className="textFieldInput"
              //   inputProps={{
              //     style: {
              //       height: "1px",
              //       backgroundColor: "red",
              //     },
              //   }}
            />
          </form>
          <Box>
            <Button>Red</Button>
            <Button>Blue</Button>
          </Box>
        </OuterBoxStyled>
      </>
    );
  }
}

const OuterBoxStyled = styled(Box)({
  "& .textFieldInput": {
    height: "20px",
  },
});
