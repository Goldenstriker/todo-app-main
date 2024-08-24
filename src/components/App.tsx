import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "./Layout/Layout";
import TodoApp from "./TodoApp/TodoApp";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <TodoApp />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
