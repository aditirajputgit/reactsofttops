import React, { Component } from "react";
import { Todos } from "./Todos";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

interface Props {
  setTodoArray: Todos[]; // Use the Todos interface for setTodoArray
  setTodo: string;
}

interface S {
  setTodoArray: Todos[];
}

export default class TodoLists extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      setTodoArray: this.props.setTodoArray,
    };
  }

  onEditingButton = () => {
    console.log("Editing");
  };

  onDeletingButton = (id: number) => {
    const { setTodoArray } = this.state;
    this.setState({ setTodoArray: setTodoArray.splice(1, id) });
    console.log(this.state.setTodoArray);
  };

  onDoneIconButton = (id: number) => {
    const updatedTodoArray = this.props.setTodoArray.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: false,
        };
      }
      console.log(item);
      return item;
    });

    this.setState({ setTodoArray: updatedTodoArray });
  };
  forOneItemCart = (item: Todos, key: number) => {
    return (
      <AddTodo key={item.id}>
        <form className="formInput">
          {item.isDone ? (
            <s className="todos_single--text">{item.todos}</s>
          ) : (
            <span className="todos_single--text">{item.todos}</span>
          )}

          <Box>
            <span className="icon">
              {" "}
              <EditIcon
                onClick={() => {
                  this.onEditingButton();
                }}
              />
            </span>
            <span className="icon">
              <DeleteIcon
                onClick={() => {
                  this.onDeletingButton(key);
                }}
              />
            </span>
            <span
              className="icon"
              onClick={() => {
                this.onDoneIconButton(item.id);
              }}
            >
              <DoneIcon />
            </span>
          </Box>
        </form>
      </AddTodo>
    );
  };

  render() {
    return (
      <>
        <TodoList>
          {this.props.setTodoArray.map((item, key) => {
            return this.forOneItemCart(item, key);
          })}
        </TodoList>
      </>
    );
  }
}

const TodoList = styled(Box)({
  margin: "3rem",
  display: "flex",
  width: "90%",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
});

const AddTodo = styled(Box)({
  display: "flex",
  width: "90%",
  borderRaduis: "5px",
  padding: "20px",
  marginTop: "15px",
  backgroundColor: "yellow",

  "& todos_single--text": {
    flex: 1,
    padding: "5px",
    border: "none",
    fontSize: "20px",
  },
  "& .formInput": {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  "& .icon": {
    marginLeft: "10px",
    fontSize: "25px",
    cursor: "pointer",
  },
});
