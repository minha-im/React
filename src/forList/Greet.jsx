import React, { Component } from 'react'
class Greet extends Component {
    render() { 
        return <h3>{this.props.greeting} world</h3>;
    }
} 
export default Greet;