import { useState } from 'react'
import React from 'react'
import './App.css'
import ProjectRouter from './ProjectRouter.jsx'
import { Questions } from './components/questions/Questions'

function App() {
  

  return (
    <>
      <ProjectRouter />
      <div className='w-full h-full flex justify-center items-center'>
        <div className='text-2xl font-mono'><Questions /></div>
      </div>
    </>
  )
}

export default App
