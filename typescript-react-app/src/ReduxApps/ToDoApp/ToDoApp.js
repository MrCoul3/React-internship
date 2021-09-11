import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";


export default function ReduxToDoApp() {
    return(
      <section className='text-center' id='ReduxToDo'>
            <Header />
            <ToDoList />
      </section>
    );
}