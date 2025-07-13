import "./App.css";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { TodosContext } from "./contexts/todosContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid"; //this to generate id auto

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },

  palette: {
    primary: {
      main: "#26a69a",
    },
  },
});

const initialTodos = [
  {
    id: uuidv4(),
    title: "Read a book",
    details: "trr sdf gfgdh ",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Read a book",
    details: "dfsd gdfg  dsf",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Read a book",
    details: "df sdf sdf ",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ThemeProvider theme={theme}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#444",
        }}
      >
        <TodosContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodosContext.Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
