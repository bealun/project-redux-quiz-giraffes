import React from 'react'
import { useSelector } from 'react-redux'


export const Score = () => {
  const everyAnswer = useSelector((state) => state.quiz.answers)
  const correctAnswers = everyAnswer.filter((correct) => correct.isCorrect)

  return (
    <div className="welcomeContainer">
      <h1 className="welcomeGreeting">Congrats you got {correctAnswers.length * 1000000} points! <span role="img" aria-label="emoji">🎉🍻👯‍♀️</span></h1>
    </div>
  )
}