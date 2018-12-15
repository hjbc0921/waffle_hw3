import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class GetName extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
      <h2 style={{margin:"0 0 20px 0"}}>{this.props.food}?</h2>
      <div style={{maxWidth:"80%",margin:"auto"}}>      
        <Button 
        bsStyle="success" 
        bsSize="large"
        type="submit" 
        block
        style={{margin:"20px 0 0 0"}} 
        onClick={() => this.props.saveAnswer("like")} 
        >호</Button>
        <Button 
        bsStyle="danger" 
        bsSize="large"
        type="submit" 
        block
        style={{margin:"20px 0 0 0"}} 
        onClick={() => this.props.saveAnswer("dislike")}  
        >불호</Button>
      </div>
      </div>
    );
  }
}


export default GetName
