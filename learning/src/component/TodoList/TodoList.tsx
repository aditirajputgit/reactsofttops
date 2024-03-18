import React, { Component } from "react";
import { Box, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";

interface Props {
  setTodoArray: Todos[];
  editTodoText: string;
  onEditingButton: (item: Todos) => void;
  onDoneIconButton: (item: Todos) => void;
  onDeletingButton: (item: Todos) => void;
  updateTodoHandler: (values: Array<Todos>) => void;
}
interface Todos {
  id: number;
  todos: string;
  isDone: boolean;
  isEdit: boolean;
}

interface S {
  editedValue: string;
  editID: number;
}

export default class TodoLists extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      editedValue: this.props.editTodoText,
      editID: 0,
    };
  }

  onChangeInputAfterEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ editedValue: event.target.value });
  };

  handleEdit = (value: string, id: number) => {
    this.setState({
      editedValue: value,
      editID: id,
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    const updatedTodos: Array<Todos> = this.props.setTodoArray.map(
      (todo: any) => {
        if (todo.id === this.state.editID) {
          return {
            ...todo,
            todos: this.state.editedValue,
            isEdit: false,
          };
        }

        return todo;
      }
    );
    this.props.updateTodoHandler(updatedTodos);
  };
  forOneItemCart = (item: Todos, key: number) => {
    const { editedValue } = this.state;
    const edit = editedValue;

    return (
      <AddTodo key={item.id}>
        <form className="formInput" onSubmit={this.handleSubmit}>
          {item.isEdit ? (
            <input
              className="todos_Single--text"
              value={this.state.editedValue}
              onChange={this.onChangeInputAfterEdit}
            />
          ) : item.isDone ? (
            <s className="todos_single--text">{item.todos}</s>
          ) : (
            <span className="todos_single--text">{item.todos}</span>
          )}

          <Box>
            <span className="icon">
              {" "}
              <EditIcon
                onClick={() => {
                  this.props.onEditingButton(item);
                  this.handleEdit(item.todos, item.id);
                }}
              />
            </span>
            <span className="icon">
              <DeleteIcon
                onClick={() => {
                  this.props.onDeletingButton(item);
                }}
              />
            </span>
            <span
              className="icon"
              onClick={() => {
                this.props.onDoneIconButton(item);
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
