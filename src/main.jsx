import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { PreviewProvider } from './Context/PreviewContext.jsx'
import { FavoritesProvider } from './Context/FavoritesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PreviewProvider>
    <FavoritesProvider>
    <Router>
    <App />
    </Router>
    </FavoritesProvider>
    </PreviewProvider>
  </React.StrictMode>,
)
