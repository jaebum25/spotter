import React from 'react'

export default function FeedPost({ post, handleDelete, user }) {
  return (
    <>
      <tbody>
        <tr>
          <td>{post.user.name}</td>
          <td>{post.name}</td>
          { user.name === post.user.name ?
          <td><button onClick={() => handleDelete(post._id)}>X</button></td>
          : 
          <td></td> 
          }
        </tr>
      </tbody>
    </>
  )
}
