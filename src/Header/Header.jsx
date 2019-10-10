import React, {Component} from "react";
import '../Header/style.css'
class Header extends Component {
    render() { 
        return ( 
            <div className="topnav">    
                <a className="active" href="#home" align="middle">Header</a>
            </div>
         );
    }
}
 
export default Header;