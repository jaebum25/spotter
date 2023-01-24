import React from 'react'
import FeedPost from "../FeedPost/FeedPost"

export default function Feed() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Feed</th>
          </tr>
        </thead>
        {/* {Feed.map(post => <FeedPost key={post.id} post={post} />)}  */}
      </table>
    </>
  )
}
