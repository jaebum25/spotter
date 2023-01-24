import Feed from '../../components/Feed/Feed'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function NewPostPage() {
  const [feed, setFeed] = useState([])
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get('/api/posts')
      setFeed(res.data)
    }
    fetchData()
  }, [clicked]);

  const handleChange = (evt) => {
    evt.preventDefault()
    setName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setId((Math.floor(Math.random()*1000000)).toString())
    setFeed([...feed, { id, name }])
    setName('')
    axios.post('/api/posts', {id, name})
    setClicked(!clicked)
  }

  const handleDelete = (id) => {
    setFeed(feed.filter(post => post.id !== id))
    axios.delete(`/api/posts/${id}`)
    setClicked(!clicked)
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
