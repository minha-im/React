import React, { Component } from 'react';
import '../Login/style.css';
class Login extends Component {
    state = {  }
    render() { 
        return ( 
    <div>
        <div class="container">
            <form>
                <div class="row1">
                    <h2>sign in</h2>
                        <input type="text" name="username" placeholder="Username" required/>
                        <input type="password" name="password" placeholder="Password" required/>
                        <input type="submit" value="Login"/>
                </div>
            </form> 
        </div>
        <div class="row">
            <div class="col1">
                <button href="#" class="btn">Sign up</button>
            </div>
            <div class="col">
            <button href="#" class="btn">Forgot password?</button>
            </div>
            </div>
 </div>
         );
    }
}
 
export default Login;
