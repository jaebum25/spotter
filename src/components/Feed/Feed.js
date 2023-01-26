import React from 'react'
import FeedPost from "../FeedPost/FeedPost"
import './Feed.css'

export default function Feed({ feed, handleDelete, user }) {
  return (
    <div className="Feed">
      <table>
          {feed.map(post => 
            <FeedPost 
            key={post._id} 
            post={post} 
            handleDelete={handleDelete}
            user={user} 
          />)}
      </table>
    </div>
  )
}
