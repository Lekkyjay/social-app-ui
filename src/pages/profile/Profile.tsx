import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest, FaRegEnvelope } from 'react-icons/fa'
import { IoLocationSharp, IoGlobeOutline } from 'react-icons/io5'
import { IoMdMore } from 'react-icons/io'
import './profile.scss'
import Posts from '../../components/posts/Posts'

export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FaFacebook fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <FaInstagram fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <FaTwitter fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <FaLinkedin fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <FaPinterest fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <IoLocationSharp />
                <span>USA</span>
              </div>
              <div className="item">
                <IoGlobeOutline />
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <FaRegEnvelope />
            <IoMdMore />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  )
}