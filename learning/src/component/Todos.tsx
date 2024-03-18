import { Box, Button, OutlinedInput, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import React, { Component } from "react";
import TodoLists from "../components/TodoLists";
export interface Todos {
  id: number;
  todos: string;
  isDone: boolean;
}

interface S {
  setTodo: string;
  setTodoArray: Todos[];
}

interface Props {}

export default class Todo extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      setTodo: "",
      setTodoArray: [],
    };
  }

  onClickAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const { setTodo, setTodoArray } = this.state;
    if (setTodo) {
      const newTodo : Todos = {
        id: Date.now(),
        todos: setTodo,
        isDone: false,
      }
      this.setState({ setTodoArray: [...setTodoArray,newTodo ], setTodo: "" });
    }
    console.log(this.state.setTodoArray)
  };

  onChangingInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ setTodo: event.target.value });
  };

  render() {
    return (
      <TodoStyled>
        <Typography variant="h3" className="todoHeading">
          Todo Lists
        </Typography>
        <form onSubmit={this.onClickAddTodo} className="input">
          <Box className="input_field">
            <OutlinedInput
              className="input_fields"
              label="Enter a task"
              placeholder="Enter a task"
              value={this.state.setTodo}
              style={{ border: "none" }}
              onChange={this.onChangingInputValue}
            />
            <Button type="submit" className="input_submit">
              Add
            </Button>
          </Box>
        </form>
        <Box>
        
            <TodoLists
              setTodoArray={this.state.setTodoArray}
              setTodo={this.state.setTodo}
            />
          
        </Box>
      </TodoStyled>
    );
  }
}

const TodoStyled = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2f74c0",

  "& .todoHeading": {
    fontSize: "2.5rem",
    zIndex: 1,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    margin: "1.87rem 0 ",
  },
  "& .input": {
    display: "flex",
    width: "90%",
    position: "relative",
    alignItems: "center",
    height: "3.5rem",
  },
  "& .input_fields": {
    width: "90%",
    height: "100%",
    borderRadius: "50px",
    border: "none",
    backgroundColor: "white",
    position: "relative",
    boxShadow: "inset 0 0 5px black",
    "&:focus": {
      boxShadow: "0 0 10px 1000px pink",
      outline: "none",
    },
  },
  "& .input_field": {
    width: "100%",
    height: "100%",
    borderRadius: "50px",
    padding: "20px 30px",
    fontSize: "25px",
    border: "none",
    backgroundColor: "white",
    transition: "0.2 s",
    boxShadow: "inset 0 0 5px black",
    "&:focus": {
      boxShadow: "0 0 10px 1000px rgba(0,0,0)",
      outline: "none",
    },
    
    "& .input_submit": {
      position: "absolute",
      width: "50px",
      height: "50px",
      margin: "12px",
      borderRadius: "50px",
      right: "0px",
      border: "none",
      fontSize: "15px",
      color: "white",
      backgroundColor: "#2f74c0",
      transition: "0.2s all",
      boxShadow: "0 0 10px black",
      "&:hover": {
        transform: "scale(0.8)",
        boxShadow: "0 0 5px black",
      },
    },
  },
});
