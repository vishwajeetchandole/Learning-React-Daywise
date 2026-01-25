import React from 'react'
import { LeftSection } from './components/LeftSection'
import RightSection from './components/RightSection'

const App = () => {
  return (
    <div className="flex h-screen">
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default App