import React from 'react'
import { Score } from 'components/Score'
import { RestartButton } from 'components/RestartButton'

export const Summary = () => {
  return (
    <div className="welcomeContainer">
      <Score />
      <RestartButton />
    </div>
  )
}
