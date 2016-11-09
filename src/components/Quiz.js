import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      selectedAnswers: {},
      score:''
    };
  }

  componentDidMount() {
    axios.get('/quizzes')
    .then((response) => {
      this.setState({
        quizzes: response.data.quizzes
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  setSelectedAnswer(id, score) {
    const newSelectedAnswers = this.state.selectedAnswers;
    newSelectedAnswers[id] = score;
    this.setState({selectedAnswers: newSelectedAnswers});
  }

  handleSubmit() {
    let sum = Object.values(this.state.selectedAnswers).reduce((a,b) => {
      return a + b;
    }, 0);
    axios.post('/scores', {score:sum})
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
    this.setState({score: sum});
  }

  render() {
    return(
      this.state.quizzes ?
      <div>
        <h2>{this.state.quizzes[0].title}</h2>
        <h3>Your score is: {this.state.score}</h3>
        <section>
          {this.state.quizzes[0].questions.map((question) =>
            <Question
              title={question.title}
              answers={question.answers}
              key={question.id}
              id={question.id}
              setSelectedAnswer={this.setSelectedAnswer.bind(this)}
            /> )}
        </section>
        <button onClick={() =>this.handleSubmit()}>Submit</button>
      </div>
      : <h1>No questions</h1>
    )
  }
}

export default Quiz;
