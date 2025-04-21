import { useState } from 'react'

import './App.css'
import Description from './components/Description'
import Options from './components/Options'
import Feedback from './components/Feedback'
function App() {
  const [feedbacks, setfeedbacks] = useState({
  good: 0,
	neutral: 0,
	bad: 0
  })

  return (
    <>
      <Description/>
      <Options feedbacks={feedbacks} setfeedbacks={ setfeedbacks} />
      <Feedback  feedbacks={feedbacks} />
    </>
    
    
  )
}

export default App
