import React, { PureComponent } from 'react'
class Display extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Severity</th>
                        <th>Priority</th>
                        <th>Assigned</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Mala</td>
                        <td>High</td>
                        <td>Low</td>
                        <td>Seela</td>
                        <td>Open</td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default Display;