import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 Copilot Plans</h1>
      <p>Deployed successfully on Vercel!</p>
      <p>Build time: {new Date().toLocaleString()}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)