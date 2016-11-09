import React from 'react';

const Answer = (props) => {
  const { id, text, score } = props;

  return(
    <div onClick={() =>props.setSelectedAnswer(id, score)}>
      <label>
        <input type="radio" name={id} />
        {text}
      </label>
    </div>
  );
};

export default Answer;
