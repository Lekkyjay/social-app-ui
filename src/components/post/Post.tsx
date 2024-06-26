import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHeartOutline, IoHeartSharp, IoShareSocialOutline } from 'react-icons/io5'
import { MdOutlineTextsms, MdOutlineMoreHoriz } from 'react-icons/md'
import './post.scss'
import Comments from '../comments/Comments'

interface IPost {
  post: {
    id: number
    name: string
    userId: number
    profilePic: string
    desc: string
    img?: string
  }
}

export default function Post({ post }: IPost) {
  const [commentOpen, setCommentOpen] = useState(false)
  const liked = false

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MdOutlineMoreHoriz />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <IoHeartSharp /> : <IoHeartOutline />} 12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <MdOutlineTextsms /> 12 Comments
          </div>
          <div className="item">
            <IoShareSocialOutline /> Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}