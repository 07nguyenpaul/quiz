import React, { Component } from 'react';
import axios from 'axios';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: {},
    };
  }
  componentDidMount() {
    axios.get('/quizzes')
    .then((response) => this.setState({quizzes: response.data.quizzes[0], title: response.data.quizzes[0].title}))
    .catch((error) => console.log(error))
  }

  render() {
    console.log(this.state.quizzes.questions);
    return(
      <div>
        <h2>{this.state.title}</h2>
        {this.state.quizzes.questions ? this.state.quizzes.questions.map((question) => {
          return(
            <section key={question.id}>
              <p>{question.title}</p>
              <ul>
                { question.answers.map((answer, index) => {
                  return(
                    <li key={index}>
                      {answer.title}
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })
        : <h1>No questions</h1> }
      </div>
    )
  }
}

export default Quiz;
