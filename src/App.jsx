// src/App.jsx
import React from 'react';
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500 bg-opacity-80 relative overflow-hidden">
      <Calculator />
    </div>
  )
}

export default App