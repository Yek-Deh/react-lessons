/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext, useEffect } from "react";
import { TodosContext } from "../contexts/todosContext";
import { useToast } from "../contexts/ToastContext";
import { v4 as uuidv4 } from "uuid"; //this to generate id auto

//Components
import Todo from "./Todo";
//Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const {showHideToast} = useToast();

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [dialogTodo, setDialogTodo] = useState(null);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  // filtration arrays
  const completedTodos = todos.filter((t) => {
    return t.isCompleted;
  });

  const notCompletedTodos = todos.filter((t) => {
    return !t.isCompleted;
  });

  let todosToBeRendered = todos;

  if (displayedTodosType == "completed") {
    todosToBeRendered = completedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notCompletedTodos;
  } else {
    todosToBeRendered = todos;
  }

  useEffect(() => {
    console.log("calling use effect");
    const storageTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(storageTodos);
  }, []);

  //handlers

  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value);
  }
  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTitleInput("");
    showHideToast("add successfully");

  }
  function openDeleteDialog(todo) {
    setDialogTodo(todo);
    setShowDeleteDialog(true);
  }
  function openUpdateDialog(todo) {
    setDialogTodo(todo);
    setShowUpdateDialog(true);
  }
  function handleDeleteDialogClose() {
    setShowDeleteDialog(false);
  }
  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      return t.id != dialogTodo.id;
    });

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setShowDeleteDialog(false);
    showHideToast("deleted successfully");
  }
  function handleUpdateClose() {
    setShowUpdateDialog(false);
  }
  
  function handleUpdateConfirm() {
    const updatedTodos = todos.map((t) => {
      if (t.id == dialogTodo.id) {
        return { ...t, title: dialogTodo.title, details: dialogTodo.details };
      } else {
        return t;
      }
    });

    setTodos(updatedTodos);
    setShowUpdateDialog(false);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    showHideToast("updated successfully");
  }
  const todosJsx = todosToBeRendered.map((t) => {
    return <Todo key={t.id} todo={t} showDelete={openDeleteDialog} showUpdate={openUpdateDialog} />;
  });
  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        onClose={handleDeleteDialogClose}
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete the task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You cannot undo a deletion once it is completed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Close</Button>
          <Button autoFocus onClick={handleDeleteConfirm}>
            Agree, Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/* == Delete Dialog == */}
      {/* Update Dialog */}
      <Dialog
        onClose={handleUpdateClose}
        open={showUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Task"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="title"
            fullWidth
            variant="standard"
            value={dialogTodo?.title}
            onChange={(e) => {
              setDialogTodo({ ...dialogTodo, title: e.target.value });
            }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="details"
            fullWidth
            variant="standard"
            value={dialogTodo?.details}
            onChange={(e) => {
              setDialogTodo({ ...dialogTodo, details: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>Close</Button>
          <Button autoFocus onClick={handleUpdateConfirm}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      {/* == Update Dialog == */}
      <Container maxWidth="sm">
        <Card
          sx={{ minWidth: 275 }}
          style={{
            maxHeight: "80vh",
            overflow: "scroll",
          }}
        >
          <CardContent>
            <Typography variant="h2">My Tasks</Typography>
            <Divider />
            <ToggleButtonGroup
              color="primary"
              value={displayedTodosType}
              exclusive
              onChange={changeDisplayedType}
              aria-label="Platform"
              sx={{ marginTop: 5 }}
            >
              <ToggleButton value="all">All</ToggleButton>
              <ToggleButton value="completed">Completed</ToggleButton>
              <ToggleButton value="non-completed">Unfinished</ToggleButton>
            </ToggleButtonGroup>
            {/* ALL TODOS */}
            {todosJsx}
            {/* === ALL TODOS === */}

            {/* INPUT + ADD BUTTON */}
            <Grid container style={{ marginTop: "20px" }} spacing={2}>
              <Grid
                size={8}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Task Title"
                  variant="outlined"
                  value={titleInput}
                  onChange={(e) => {
                    setTitleInput(e.target.value);
                  }}
                />
              </Grid>

              <Grid
                size={4}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Button
                  style={{ width: "100%", height: "100%" }}
                  variant="contained"
                  onClick={() => {
                    handleAddClick();
                  }}
                  disabled={titleInput.length == 0}
                >
                  ADD
                </Button>
              </Grid>
            </Grid>
            {/*== INPUT + ADD BUTTON ==*/}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
