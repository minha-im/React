import React, {Component} from "react";
import './style.css'
class FormDefect extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="main">
                <form action="/action_page.php">
                    <table border="0" cellPadding="2">  
                    <tr>
                        <td>D-id :</td>
                        <td><input type="text" name="id" size="17"/></td>
                    </tr>
                    <tr>
                        <td>D-name : </td>
                        <td><input type="text" name="name" size="17"/></td>
                    </tr>
                    <tr>
                        <td>Severity : </td>
                        <td><select id='tdwidth'>
                                    <option value="">Select</option>
                                    <option value="shigh">High</option>
                                    <option value="smedium">Medium</option>
                                    <option value="slaw">Law</option>
                                </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Priority : </td>
                        <td><select id='tdwidth'>
                                <option value="">Select</option>
                                <option value="phigh">High</option>
                                <option value="pmedium">Medium</option>
                                <option value="plaw">Law</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Assigned :</td>
                        <td><select id='tdwidth'>
                                <option value="">Select</option>
                                <option value="p1"> Maala</option>
                                <option value="p2"> Seela</option>
                                <option value="p3"> Neela</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Status :</td>
                        <td><select id='tdwidth'>
                                <option value="">Select</option>
                                <option value="open">Open</option>
                                <option value="fix">Fix</option>
                                <option value="new">New</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Submit" size="16"/></td>
                        <td> <input type="reset" value="clear" size="16"/></td>
                    </tr>
                    </table>
                </form>
            </div>
         );
    }
}
 
export default FormDefect;