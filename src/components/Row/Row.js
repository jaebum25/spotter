import React from 'react'

export default function Row({ post }) {
  return (
    <tbody>
      <tr>
        <td>{post.post}</td>
        <td>{post.song}</td>
        <td><button>x</button></td>
      </tr>
    </tbody>
  )
}
