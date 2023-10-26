import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainScreen from './screen/mainScreen'
import TestScreen from './screen/testScreen'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/test" element={<TestScreen />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
