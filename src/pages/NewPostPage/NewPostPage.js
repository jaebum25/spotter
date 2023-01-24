import Feed from '../../components/Feed/Feed'

import { useState } from 'react'

export default function NewPostPage() {
  const [feed, setFeed] = useState([{
    id: '1',
    name: 'test'
  }])
  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const handleChange = (evt) => {
    evt.preventDefault()
    setName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setId((Math.floor(Math.random()*1000000)).toString())
    setFeed([...feed, { id, name }])
    setName('')
  }

  const handleDelete = (id) => {
    setFeed(feed.filter(post => post.id !== id))
  }

  return (
    <>
      <h1>New Post Page</h1>
      <form className="pure-form" onSubmit={handleSubmit}>
        <label>Feed:</label>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <button className="pure-button">Post</button>
      </form>
      <hr/>
      <Feed 
        feed={feed} 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        name={name} 
        handleDelete={handleDelete}
      />
    </>
  )
}
