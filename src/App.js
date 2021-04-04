import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import UpComing from "./component/Upcoming/upcoming";
import Todo from "./component/Todo/todo.jsx";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <UpComing></UpComing>
      <Todo></Todo>
    </div>
  )
}

export default App;
