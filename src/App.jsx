import { useState, useEffect  } from 'react'
import TopBackground from './components/TopBackground.jsx'
import FaqAccordion from './components/FaqAccordion.jsx';


import './App.css'

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is Frontend Mentor, and how will it help me?',
      answer: `Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building.`,
      show: false,
    }, 
    {
      id: 2,
      question: 'Is Frontend Mentor free?',
      answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                option providing access to a range of projects suitable for all skill levels.`,
      show: false,
    },
    {
      id: 3,
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                way to showcase your skills to potential employers!`,
      show: false,
    }, 
    {
      id: 4,
      question: "How can I get help when I'm stuck on a challenge?",
      answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                channel where you can ask questions and seek support from other community members.`,
      show: false,
    },
  ]);

  
  function showAnswer(id) {
    setQuestions(prev => prev.map(question => question.id === id ? {...question, show: !question.show} : question))
  }

  return (
    <>
      <TopBackground/>
      <FaqAccordion questions={questions} showAnswer={showAnswer}/>
    </>
  )
}

export default App
