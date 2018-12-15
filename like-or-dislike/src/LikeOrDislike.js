import React, { Component } from 'react';
import './App.css';
import GetName from './GetName'
import Question from './Question'
import Result from './Result'
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap';

class LikeOrDislike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qindex: 0,
      user: '',
      userAnswer: []
    };
  }

  reset() {
    this.setState({
      qindex: 0,
      user: '',
      userAnswer: []
    });
  }

  saveUserName(name) {
    this.setState({
      user: name
    });
  }

  saveAnswer(ans) {
    this.setState({
      qindex: this.state.qindex + 1,
      userAnswer: this.state.userAnswer.concat(ans)
    });
  }

  render() {
    let qlen = this.props.questions && this.props.questions.length
    if (!this.state.user) {
      return (
        <div style={{margin:"20% 0 0 0"}}>
          <Panel bsStyle="primary" style={{width:"60%", margin:"auto"}}>
            <Panel.Heading>
            <Panel.Title componentClass="h1">{this.props.author}님의 호불호를 알아보아요!</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
            <GetName saveUserName={this.saveUserName.bind(this)}></GetName>
            </Panel.Body>
          </Panel> 
          <h1>{this.state.user}</h1>
        </div>
      );
    }
    else if (this.state.qindex < qlen) {
      return (
        <div style={{margin:"20% 0 0 0"}}>
        <Panel bsStyle="primary" style={{width:"60%", margin:"auto"}}>
          <Panel.Heading>
          <Panel.Title componentClass="h1">
            <Grid>
              <Row>
                <Col xs={6} sm={5} md={4} lg={4}>{this.props.author}</Col>
                <Col xs={5} sm={4} md={4} lg={5}>{this.state.qindex+1}/{qlen}</Col>
              </Row>
            </Grid>
          </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
          <Question 
          food={this.props.questions[this.state.qindex].subject} 
          saveAnswer={this.saveAnswer.bind(this)}
          ></Question>
          </Panel.Body>
        </Panel> 
        </div>
      )
    }
    else {
      return (
        <div style={{margin:"20% 0 0 0"}}>
        <Panel bsStyle="primary" style={{width:"60%", margin:"auto"}}>
          <Panel.Heading>
          <Panel.Title componentClass="h1">{this.props.author}님과의 호불호 일치도입니다!</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
          <Result 
          authorAns={this.props.questions}
          userAns={this.state.userAnswer}
          user={this.state.user}
          total={qlen}
          ></Result>
          <Button 
          bsStyle="info" 
          type="submit" 
          style={{margin:"20px 0 0 0"}} 
          onClick={() => this.reset()}  
          >다시하기!</Button>
          </Panel.Body>
        </Panel> 
        </div>
      )
    }
  }
}

export default LikeOrDislike
