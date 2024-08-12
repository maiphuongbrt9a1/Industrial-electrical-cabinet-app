import { useState } from 'react'
import './App.css'
import './components/UIUX/UI.jsx'
import { DashboardHome } from './components/UIUX/UI.jsx'

export default function App() {
  return (
    <div className="w-full h-screen flex">
      <DashboardHome />
    </div>

  )
}