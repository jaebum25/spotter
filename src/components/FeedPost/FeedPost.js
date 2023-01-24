import React from 'react'

export default function FeedPost({ post, handleDelete }) {
  return (
    <table>
      <tr>
        <td>{post.name}</td>
        <td><button onClick={() => handleDelete(post.id)}>X</button></td>
      </tr>
    </table>
  )
}
