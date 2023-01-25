import Feed from '../../components/Feed/Feed'

import { useState, useEffect } from 'react'
import axios from 'axios'
import SongSearch from '../../components/SongSearch/SongSearch'

export default function NewPostPage({ user }) {
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
    // setFeed([{ id, name, user: user }, ...feed ])
    setName('')
    axios.post('/api/posts', {id, name, user: user._id})
    setClicked(!clicked)
  }

  const handleDelete = (id) => {
    setFeed(feed.filter(post => post.id !== id))
    axios.delete(`/api/posts/${id}`)
    setClicked(!clicked)
  }

  const handleSearch = (evt) => {
    evt.preventDefault()
    console.log('button works')
    fetch('https://api.deezer.com/search?q=eminem', 
      {
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          mame: 'User 1'
        })
      })
      .then(data => console.log(data))
      // .catch(error => console.log('ERRPR'))
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
        user={user}
      />
      <SongSearch 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        handleSearch={handleSearch}
        name={name} 
        user={user}
      />
    </>
  )
}