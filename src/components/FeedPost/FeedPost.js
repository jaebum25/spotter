import React from 'react'

export default function FeedPost({ post, handleDelete }) {
  return (
    <tbody>
      <tr>
        <td>{post.name}</td>
        <td><button onClick={() => handleDelete(post.id)}>X</button></td>
      </tr>
    </tbody>
  )
}
