import React, { Component } from 'react';

class Employee extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container">
            <div class="main">
                <form action="/action_page.php">
                <h2>EMPLOYEE</h2>
                    <table>  
                    
                    <tr>
                        <td>Employee Name : </td>
                        <td><input type="text" name="name" size="17"/></td>
                    </tr>
                    <tr>
                        <td>Date of birth :</td>
                        <td><input type="date" name="dateofbrith" size="17"/></td>
                    </tr>
                    <tr>
                        <td>NIC :</td>
                        <td><input type="text" name="nic" size="17"/></td>
                    </tr>
                    <tr>
                        <td>Address :</td>
                        <td><input type="text" name="address" size="17"/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Submit" size="16"/></td>
                        <td> <input type="reset" value="clear" size="16"/></td>
                    </tr>
                    </table>
                </form>
            </div>
            </div>
         );
    }
}
 
export default Employee;