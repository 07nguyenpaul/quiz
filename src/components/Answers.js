import React from 'react';

const Answer = (props) => {
  const { id, text } = props;

  return(
    <div>
      <label>
        <input type="radio" name={id} />
        {text}
      </label>
    </div>
  );
};

export default Answer;
