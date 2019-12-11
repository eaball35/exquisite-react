import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  return (
    <div className="FinalPoem">
      {props.finalPoem ? (
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
          {props.submissions.map((submission) => {
            return <p>{submission}</p>
          })}
      </section>
      ) : (
      <div className="FinalPoem__reveal-btn-container">
        <input 
          type="button" 
          value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn"
          onClick={props.finalPoemCallBack} />
      </div>
      )}
    </div>
  );
}

export default FinalPoem;
