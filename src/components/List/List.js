import React from 'react'
import Row from '../Row/Row'

export default function List({ list, handleDelete }) {
  return (
    <>
      <table className="pure-table pure-table-striped">
        <thead>
          <tr>
            <th>Post</th>
            <th>Song Object</th>
            <th>Delete
            </th>
          </tr>
        </thead>
        {list.map(post => <Row key={post.id} post={post} handleDelete={handleDelete}/>)}
      </table>
    </>
  )
}
