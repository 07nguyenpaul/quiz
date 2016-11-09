import React, { Component } from 'react';
import axios from 'axios';
import Questions from './Questions';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    return(
      this.state.quizzes ?
      <div>
        <h2>{this.state.quizzes[0].title}</h2>
        <section>
          {this.state.quizzes[0].questions.map((question) =>
            <Questions
              title={question.title}
              answers={question.answers}
              key={question.id}
              id={question.id}
            /> )}
        </section>
      </div>
      : <h1>No questions</h1>
    )
  }
}

export default Quiz;

//
// <div>
//   <h2>{this.state.title}</h2>
//   {this.state.quizzes.questions ? this.state.quizzes.questions.map((question) => {
//     return(
//       <section key={question.id}>
//         <p>{question.title}</p>
//         <ul>
//           { question.answers.map((answer, index) => {
//             return(
//               <li key={index}>
//                 {answer.title}
//               </li>
//             )
//           })}
//         </ul>
//       </section>
//     )
//   })
//   : <h1>No questions</h1> }
// </div>
