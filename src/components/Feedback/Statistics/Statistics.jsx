import React from "react";
import style from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage  }) => {
    return (
        <ul>
            <li className={style.item}>Good: {good}</li>
            <li className={style.item}>Neutral: {neutral}</li>
            <li className={style.item}>Bad: {bad}</li>
            <li className={style.item}>Total: {total}</li>
            <li className={style.item}>Positive Percentage: {positivePercentage} %</li>
        </ul>
    );
  };