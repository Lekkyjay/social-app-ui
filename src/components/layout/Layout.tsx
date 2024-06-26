import { Outlet } from 'react-router-dom'
import LeftBar from '../leftBar/LeftBar'
import Navbar from '../navbar/Navbar'
import RightBar from '../rightBar/RightBar'
import './layout.scss'

export default function Layout() {
  return (
    <div className='theme-dark'>
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