import React from 'react'

export default function Row({ post, handleDelete }) {
  return (
    <tbody>
      <tr>
        <td>{post.name}</td>
        <td>{post.song}</td>
        <td><button onClick={() => handleDelete(post.id)}>x</button></td>
      </tr>
    </tbody>
  )
}
