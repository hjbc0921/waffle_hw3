import React, { Component } from 'react';
import './App.css';
import LikeOrDislike from './LikeOrDislike'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "Hyunji Choi",
      questions: [
        {
          subject: "아이스 바닐라 라떼",
          choice: "like"
        },
        {
          subject: "밀크티",
          choice: "like"
        },
        {
          subject: "녹차 아이스크림",
          choice: "like"
        },
        {
          subject: "초밥",
          choice: "like"
        },
        {
          subject: "고추장불고기",
          choice: "dislike"
        },
        {
          subject: "김치찌개",
          choice: "dislike"
        },
        {
          subject: "선지국",
          choice: "dislike"
        },
        {
          subject: "소주",
          choice: "dislike"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <LikeOrDislike {...this.state} />
      </div>
    );
  }
}

export default App;
