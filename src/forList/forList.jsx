import React, { Component } from 'react';
class ForList extends Component {
    state = {  }
    render() { 
        const name=['Maala','Seela','Leela'];
        return ( 
            <div>
                {name.map(n=>{
                    return(
                        <li>{n}</li>
                    )
                })}
            </div>
         );
    }
}
 
export default ForList;