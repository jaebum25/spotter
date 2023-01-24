import Feed from '../../components/Feed/Feed'

import { useState } from 'react'

export default function NewPostPage() {
  const [feed, setFeed] = useState([{
    id: '1',
    name: 'test'
  }])
  
  return (
    <>
      <h1>NewPostPage</h1>
      <form>form
        <label>Feed: </label>
        <input type="text" name="name"/>
        <button>Post</button>
      </form>
      <Feed />
    </>
  )
}
