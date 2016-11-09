import React from 'react';
import Answer from './Answers';

const Questions = (props) => {
  const {title, id, answers} = props;

  return(
    <div>
      <h2 key={id}>{title}</h2>
        { answers.map((answer, index) =>
          <Answer
            key={index}
            id={id}
            radioId={props.name}
            text={answer.title}
          />
        )}
    </div>
  );
};

export default Questions;
