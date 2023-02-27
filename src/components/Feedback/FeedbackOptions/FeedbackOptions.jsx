import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
        {options.map(option => {
            return <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>

        })}
        </>
    );
  };