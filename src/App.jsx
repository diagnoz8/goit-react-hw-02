import { useState } from 'react'

import './App.css'
import Description from './components/Description'
import Options from './components/Options'
import Feedback from './components/Feedback'
function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = feedbackType => {
    setFeedbacks((feedbacks) =>
    ({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    })
    )
  };
 
  return (
    <>
      <Description/>
      <Options updateFeedback={updateFeedback} />
      <Feedback  feedbacks={feedbacks} />
    </>
    
    
  )
}

export default App
