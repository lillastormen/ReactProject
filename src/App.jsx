import { useState } from 'react'
import './App.css'
import React from 'react'
import { Questions } from './components/questions/Questions'

function App() {

  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='text-2xl font-mono'><Questions /></div>
      </div>
    </>
  )
}

export default App
