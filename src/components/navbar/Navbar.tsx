import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { IoAppsOutline, IoHomeOutline, IoMailOutline, IoMoonOutline, IoPersonOutline, IoSunnyOutline } from 'react-icons/io5'
import { FaRegBell, FaSearch } from 'react-icons/fa'
import { DarkModeContext } from '../../context/DarkModeContext'
import { AuthContext } from '../../context/AuthContext'
import './navbar.scss'

export default function Navbar() {
  const { darkMode, toggle } = useContext(DarkModeContext)  
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="theme-light navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>CheezMedia</span>
        </Link>
        <IoHomeOutline />
        {darkMode 
          ? (<IoSunnyOutline onClick={toggle} />) 
          : (<IoMoonOutline onClick={toggle} />)
        }
        <IoAppsOutline />
        <div className="search">
          <FaSearch />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <IoPersonOutline />
        <IoMailOutline />
        <FaRegBell />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>Lekky</span>
        </div>
      </div>     
    </div>
  )
}