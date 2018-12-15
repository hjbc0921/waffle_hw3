import React, { Component } from 'react';
import { Label } from 'react-bootstrap';

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
    let i = 0
    let same = 0
    for (i; i<this.props.total; i++) {
      if (this.props.userAns[i] === this.props.authorAns[i].choice) {
        same++
      }
    }
    let score = Math.round(100*(same)/(this.props.total))
    return (
      <div>
        <h2>{score}점</h2>
        <h3>총 {this.props.total}개 중 {same}개 일치</h3>
        <hr/>
        <h3>{this.props.user}님: </h3>
        <p>
          {this.props.authorAns.map(
              (q, i) => <Label bsStyle={(this.props.userAns[i]==="like")?"success":"danger"}>{q.subject}</Label>
          )}
        </p>
      </div>
    );
  }
}


export default GetName
