import React, {Component} from "react";
//import '../components/style.css'
import axios from 'axios';

class FormProject extends Component {
    state = { data:[],
            projectname:'',
            projectdesc:'',
    }

     


    handleChange=(e)=>{
        this.setState({ [e.target.name]: e.target.value });
    }

     handleSave =(e)=>{
        e.preventDefault();
        const project={projectname:this.state.projectname, projectdesc:this.state.projectdesc}
        const url ='http://localhost:8082/defect/api/v1/project'
          axios.post(url,project)
          .then(Response=>{
              console.log(Response)
          }).catch(response=>{
              console.log(response)
          })
          this.setState({ projectname:"", projectdesc:"" });
        
    }

    render() { 
        return ( 
            <div class="container">
            <div class="main">
                <form onSubmit={this.handleSave}>
                <h2>PROJECT</h2>
                    <table border="0" cellPadding="2"> 
                    <tr>
                        <td>Project Name : </td>
                        <td><input type="text" name="projectname" size="17" onChange={this.handleChange}   value={this.state.projectname}/></td>
                    </tr> 
                    <tr>
                        <td>Project Description : </td>
                        <td><input type="text" name="projectdesc" size="17"  onChange={this.handleChange}  value={this.state.projectdesc}/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Submit" size="16" /></td>
                        <td> <input type="reset" value="clear" size="16"/></td>
                    </tr>
                    </table>
                </form>
            </div>

            </div>
         );
    }
}
 
export default FormProject;