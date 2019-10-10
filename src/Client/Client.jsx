import React, { Component } from 'react';

class Client extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container">
            <div class="main">
                <form action="/action_page.php">
                <h2>Client</h2>
                    <table>  
                    
                    <tr>
                        <td>Client Name : </td>
                        <td><input type="text" name="name" size="17"/></td>
                    </tr>
                    <tr>
                        <td>severity :</td>
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
 
export default Client;