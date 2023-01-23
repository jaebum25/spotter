import React from 'react'

export default function Row({ post }) {
  return (
    <tbody>
      <tr>
        <td>{post.name}</td>
        <td>{post.song}</td>
        <td><button onClick="">x</button></td>
      </tr>
    </tbody>
  )
}
