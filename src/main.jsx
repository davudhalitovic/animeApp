import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { PreviewProvider } from './Context/PreviewContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PreviewProvider>
    <Router>
    <App />
    </Router>
    </PreviewProvider>
  </React.StrictMode>,
)
