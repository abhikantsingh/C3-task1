import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import UpComing from "./component/Upcoming/upcoming";
import Todo from "./component/Todo/todo.jsx";
import Mycourse from "./component/mycourse/Mycourse";
import LeaderBoard from "./component/Leaderboard/Leaderboard";
import Chart from "./component/graph/graph";
const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <UpComing></UpComing>
      <Todo></Todo>
      <Mycourse></Mycourse>
      <LeaderBoard></LeaderBoard>
    <Chart></Chart>
    </div>
  )
}

export default App;
