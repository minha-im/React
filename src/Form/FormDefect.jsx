import React, {Component} from "react";
//import './style.css'
class FormDefect extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container">
                <div class="main">
                <form action="/action_page.php">
                <h2>DEFECT</h2>
                    <table border="0" cellPadding="2">  
                    
                    <tr>
                        <td>Defect Name :</td>
                        <td><input type="text" name="defect" size="17"/></td>
                    </tr>
                    <tr>
                        <td>Defect Description : </td>
                        <td><input type="text" name="defectdesc" size="17"/></td>
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
 
export default FormDefect;