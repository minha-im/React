import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter ,Route,Switch} from 'react-router-dom';
import Login from './Login/Login';
import FormProject from './Form/FormProject';
import FormDefect from './Form/FormDefect';
import Employee from './Employee/Employee';
import Header from './Header/Header';
import SideBar from './sidebar/SideBar';
import Footer from './Footer/Footer';
import ViewProject from './Project/ViewProject';
import './style/style.css';

ReactDOM.render(<BrowserRouter> 
<Header/>
  <SideBar/>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/Login' component={Login}/>
        <Route path='/newpro' component={FormProject}/>
        <Route path='/ViewProject' component={ViewProject}/>
        <Route path='/defect' component={FormDefect}/> 
        <Route path='/Employee' component={Employee}/> 
    </Switch>
 <Footer/>
   </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
