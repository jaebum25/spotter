import React from 'react'
import FeedPost from "../FeedPost/FeedPost"

export default function Feed({ feed, handleDelete, user }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
            <th>x</th>
          </tr>
        </thead>
          {feed.map(post => 
            <FeedPost 
            key={post._id} 
            post={post} 
            handleDelete={handleDelete}
            user={user} 
          />)}
      </table>
    </>
  )
}
