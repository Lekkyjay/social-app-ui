import { Link } from 'react-router-dom'
import { IoAppsOutline, IoHomeOutline, IoMailOutline, IoMoonOutline, IoPersonOutline, IoSunnyOutline } from 'react-icons/io5'
import profileImg from '../../assets/1.png'
import { FaRegBell, FaSearch } from 'react-icons/fa'
import './navbar.scss'

export default function Navbar() {
  const toggle = () => {}
  const darkMode = true

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>CheezMedia</span>
        </Link>
        <IoHomeOutline />
        {darkMode ? (
          <IoSunnyOutline onClick={toggle} />
        ) : (
          <IoMoonOutline onClick={toggle} />
        )}
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
          <img
            // src="{currentUser.profilePic}"
            src={profileImg}
            alt=""
          />
          <span>Lekky</span>
        </div>
      </div>     
    </div>
  )
}