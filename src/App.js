import React from 'react';
import './App.css';
import SideBar from './sidebar/SideBar'
import Header from './Header/Header'
// import Display from './dispayData/display'
import DefectForm from './Form/FormDefect'
import ForList from './forList/forList'
import App1 from './forList/app'
import Login from './Login/Login'

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Header/>
      <Login/>
    </div>
  );
}

export default App;
