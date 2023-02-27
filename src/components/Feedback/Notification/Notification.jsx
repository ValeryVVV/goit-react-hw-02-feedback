import React from "react";
import style from './Notification.module.css';

export const Notification = ({ message }) => {
    return (
      <div>
        <h1 className={style.message}>{message}</h1>
      </div>
    );
  };