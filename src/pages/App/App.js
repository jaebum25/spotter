import { useState } from 'react';

import './App.css';
import Index from '../Index/Index'

function App() {
  const [user, setUser] = useState(null)
  const [list, setList] = useState([
    {
      id: '1',
      post: 'Check this out',
      song: 'Song object'
    }
  ])
  const [id, setId] = useState('')
  const [post, setPost] = useState('')

  const handleChange = (evt) => {
    evt.preventDefault()
    setPost(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setId((Math.floor(Math.random()*1000000)).toString())
    setList([...list, { id, post, song: 'song' }])
    setPost('')
  }

  return (
    <div className="App">
      <Index 
        list={list} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        post={post}
      />
    </div>
  );
}

export default App;
