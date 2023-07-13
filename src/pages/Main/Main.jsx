import React from "react";
import TodoList from "../../components/TodoList/TodoList";

const Main = () => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <TodoList todoTypeIs={"All"} />
    </div>
  );
};

export default Main;
