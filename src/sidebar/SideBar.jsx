import React, { Component } from 'react';
import '../sidebar/style.css'
class SideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sidenav">
                <a className="/Login">Login 
                    <i className="fa fa-caret-down"></i>
                </a>
                <div className="dropdown-container">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
  
                <a href="/defect">Defect</a>
                <a href="/newpro" className="dropdown-container">Project</a>
                <a href="/ViewProject">View Project</a>
                <a href="/clients">Clients</a>
                <a href="/Employee">Employee</a>
            </div>
         );
    }
}
 
export default SideBar;