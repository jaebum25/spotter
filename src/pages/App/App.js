import { useState } from 'react';

import './App.css';
import Index from '../Index/Index'

function App() {
  const [user, setUser] = useState(null)
  const [list, setList] = useState([
    {
      id: '1',
      name: 'Check this out',
      song: 'Song object'
    }
  ])
  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const handleChange = (evt) => {
    evt.preventDefault()
    setName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setId((Math.floor(Math.random()*1000000)).toString())
    setList([...list, { id, name, song: 'song' }])
    setName('')
  }

  const handleDelete = (id) => {
    setList(list.filter(post => post.id !== id))
    console.log('delete button works')
  }

  return (
    <div className="App">
      <Index 
        list={list} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        name={name}
      />
    </div>
  );
}

export default App;
