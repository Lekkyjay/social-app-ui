import { useContext } from 'react'
import friends from '../../assets/2.png'
import market from '../../assets/3.png'
import Watch from '../../assets/4.png'
import Memories from '../../assets/5.png'
import { AuthContext } from '../../context/AuthContext'
import './leftBar.scss'

export default function LeftBar() {
  const { currentUser } = useContext(AuthContext)
  
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={friends} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={friends} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Courses</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={friends} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Courses</span>
          </div>
        </div>

        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={friends} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={friends} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={market} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  )
}