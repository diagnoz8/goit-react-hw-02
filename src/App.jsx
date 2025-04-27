import { useState, useEffect } from 'react'

import './App.css'
import Description from './components/Description'
import Options from './components/Options'
import Feedback from './components/Feedback'
import Notification from './components/Notification'
function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFb = window.localStorage.getItem("feedbacks");
    if (savedFb !== null) {
      return JSON.parse(savedFb)
    }
      return {
        good: 0,
    neutral: 0,
    bad: 0}
  });
  useEffect(() => {
 window.localStorage.setItem("feedbacks", JSON.stringify(feedbacks))
   }, [feedbacks]
  )
const resetFeedbacks = () => {
  setFeedbacks(() => ({
  good: 0,
    neutral: 0,
    bad: 0
}))        ;
    }
  const updateFeedback = feedbackType => {
    setFeedbacks((feedbacks) =>
    ({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    })
    )
  };
  const { good, neutral, bad } = feedbacks;
     const totalFeedback = good + neutral + bad;

  return (
    <>
      <Description/>
      <Options updateFeedback={updateFeedback} resetFeedbacks={resetFeedbacks} totalFeedback={ totalFeedback} />
      {totalFeedback > 0 ? <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} /> : <Notification/>}
    </>
    
    
  )
}

export default App
