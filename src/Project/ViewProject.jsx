import React, { Component } from 'react';
import axios from 'axios';
class ViewProject extends Component {
    state = { data:[] }
    async componentDidMount() {
        const {data} = await axios.get('http://localhost:8082/defect/api/v1/project');
       this.setState({data})
    } 

    handleDelete=(id)=>{
        console.log(id)
        const project={projectname:this.state.projectname, projectdesc:this.state.projectdesc}
        const url ='http://localhost:8082/defect/api/v1/project/'+id
          axios.delete(url,project)
          .then(Response=>{
              console.log(Response)
          }).catch(response=>{
              console.log(response)
          })
    }
    render() { 
        if (this.state.data.length == 0) {
            return <p className="container">No project available</p>
            
        }
        return ( 
            <div className="container">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Delete</th>
                    </tr>
                   {this.state.data.map(d=>{
                       return(<tr>
                           <td>{d.projectname}</td>
                           <td>{d.projectdesc}</td>
                           <td><input type="button" value ="delete" onClick={()=>this.handleDelete(d.id)}/></td>
                           {/* <td><input type="button" value ="edit" onClick={()=>this.handleEdit(d.id)}/></td> */}
                           </tr>)

                   })}
                </table>
            </div>
         );
    }
}
 
export default ViewProject;