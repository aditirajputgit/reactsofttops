import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  styled,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Component } from "react";

interface S {
  todoArray: Array<String>;
  todoItem: string;
  selectItem: string;
}

interface Props {}

class TodoList extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todoArray: [],
      todoItem: "",
      selectItem: "",
    };
  }

  onAddTodo = () => {
    this.setState((prevState) => ({
      todoArray: [...prevState.todoArray, prevState.todoItem],
      todoItem: "",
    }));
  };
  onChangetodo = (event: any) => {
    event.preventDefault();
    this.setState({ todoItem: event.target.value });
  };

  onDeletingItem = (index: number) => {
    const { todoArray } = this.state;
    todoArray.splice(index, 1);
    this.setState((prevState) => ({
      todoArray: [...prevState.todoArray],
    }));
    console.log(todoArray);
  };

  onAddingTodoItem = () => {
    const { todoArray } = this.state;
    return todoArray.map((item, index) => {
      return (
        <>
          <TodoItemstyle key={index}>
            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label={item}
              value={item}
            />
            <Box>
              <DeleteIcon onClick={() => this.onDeletingItem(index)} />
              <EditIcon />
            </Box>
          </TodoItemstyle>
        </>
      );
    });
  };

  handleChange = (event: any) => {
    this.setState({ selectItem: event.target.value });
    console.log(event.target.value);
  };

  selectItem = () => {
    return (
      <>
        <FormControl variant="outlined" className="formControl">
          <InputLabel>ALL</InputLabel>
          <Select
            value={this.state.selectItem}
            onChange={this.handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Pending</MenuItem>
            <MenuItem value={20}>Completed</MenuItem>
            <MenuItem value={30}>Last Added</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  };

  render() {
    return (
      <>
        <TodoStyle>
          <Box className="todoOuterContainer">
            <Typography
              variant="h2"
              style={{
                fontFamily: `"Madimi One",sans-serif`,
                marginBottom: "3rem",
              }}
            >
              Todo List
            </Typography>
            <Box className="todoLineAdding">
              <Button
                variant="contained"
                color="secondary"
                onClick={this.onAddTodo}
                className="onAddButtonStyle"
              >
                Add Task
              </Button>

              <TextField
                id="outlined-basic"
                label="todo"
                variant="outlined"
                className="todoTextField"
                value={this.state.todoItem}
                onChange={this.onChangetodo}
              />
              {this.selectItem()}
            </Box>
            {this.state.todoArray.length > 0 && (
              <Box className="onAddingTodoItem">{this.onAddingTodoItem()}</Box>
            )}
          </Box>
        </TodoStyle>
      </>
    );
  }
}

export default TodoList;

const TodoItemstyle = styled(Paper)({
  display: "flex",
  backgroundColor: "white",
  width: "90%",
  padding: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "5px",
});

const TodoStyle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",

  "& .todoOuterContainer": {
    backgroundColor: "rgb(236,237,246)",
    height: "80%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  "& .todoLineAdding": {
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
  },
  "& .todoTextField": {
    display: "flex",
    width: "26rem",
  },
  "& .onAddButtonStyle": {
    padding: "1rem",
    height: "55px",
    backgroundColor: "blue",
    fontWeight: "bold",
    fontSize: "18px",
  },
  "& .onAddingTodoItem": {
    backgroundColor: "rgb(204,205,226)",
    width: "90%",
    borderRadius: "10px",
    padding: "1rem",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
