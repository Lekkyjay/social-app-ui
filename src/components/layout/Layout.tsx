import { Outlet } from 'react-router-dom'
import LeftBar from '../leftBar/LeftBar'
import Navbar from '../navbar/Navbar'
import RightBar from '../rightBar/RightBar'
import './layout.scss'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'

export default function Layout() {
  const { darkMode } = useContext(DarkModeContext)
  console.log('darkMode...:', darkMode)

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  )
}