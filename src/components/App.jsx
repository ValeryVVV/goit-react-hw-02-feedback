import React, { Component } from "react";
import { FeedbackOptions } from "./Feedback/FeedbackOptions/FeedbackOptions";
import { Notification } from "./Feedback/Notification/Notification";
import { Section } from "./Feedback/Section/Section";
import { Statistics } from "./Feedback/Statistics/Statistics";
import style from './Feedback/Feedback.module.css';


export class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      onLeaveFeedback = option => {
        this.setState(prevState => ({
          [option]: prevState[option] + 1,
        }));
      };

      countTotalFeedback()  {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;

      }

      countPositiveFeedbackPercentage() {
        const { good } = this.state;
        return Math.round(( good / this.countTotalFeedback()) * 100);
      }

      render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        
        return(
            <div className={style.container}>
                <div className={style.wrapper}>
                    <Section title="Please leave feedback" >
                        <div className={style.buttonContent}>
                        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
                        </div>
                    </Section>

                    <Section title="Statistics">
                    {this.countTotalFeedback() > 0 ? (
                        <Statistics 
                            good={good} 
                            neutral={neutral} 
                            bad={bad} 
                            total={this.countTotalFeedback()} 
                            positivePercentage={this.countPositiveFeedbackPercentage()} 
                        />

                    ) : (
                        <Notification message="There is no feedback" />
                    )
                    }
                    </Section>
                </div>
            </div>
        )

        
        }
      

}
