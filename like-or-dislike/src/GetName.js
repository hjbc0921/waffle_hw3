import React, { Component } from 'react';
import { Panel, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class GetName extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Form horizontal onSubmit={() => this.props.saveUserName(this.state.value)}>
        <FormGroup controlId="formInlineName">
        <ControlLabel style={{margin:"0 0 20px 0"}}>당신의 이름을 입력해주세요.</ControlLabel>
        <FormControl 
        style={{width:"50%",margin:"auto"}} 
        type="text" 
        value={this.state.value}
        placeholder="익명" 
        onChange={this.handleChange}
        required />
        </FormGroup>{' '}
        <Button 
        bsStyle="primary" 
        type="submit" 
        style={{margin:"20px 0 0 0"}}  
        >시작하기!</Button>
      </Form>
    );
  }
}


export default GetName
