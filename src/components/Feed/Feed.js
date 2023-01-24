import React from 'react'
import FeedPost from "../FeedPost/FeedPost"

export default function Feed({ feed,handleDelete }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Feed</th>
            <th>hello</th>
          </tr>
        </thead>
          {feed.map(post => <FeedPost key={post.id} post={post} handleDelete={handleDelete}/>)}
      </table>
    </>
  )
}
