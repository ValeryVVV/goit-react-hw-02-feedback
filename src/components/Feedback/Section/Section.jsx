import React from "react";
import style from './Section.module.css';

export const Section = ({ title, children }) => {
    return (
        <section>
            <h2 className={style.title}>{title}</h2>
            {children}
        </section>
    );
  };