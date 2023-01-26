import React from 'react'
import "./FeedPost.css"

export default function FeedPost({ post, handleDelete, user }) {
  return (
    <>
      <tbody>
        <tr>
          <td>
            <>@{post.user.name} </>
            <br/>
            {post.name}
            <div>
              { user.name === post.user.name ? <button onClick={() => handleDelete(post._id)}>X</button> : null}
            </div>
          </td>
        </tr>
      </tbody>
    </>
  )
}
