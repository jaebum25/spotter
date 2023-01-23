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
  const [post, setPost] = useState('')

  const handleChange = (evt) => {
    evt.preventDefault()
    SVGTextPositioningElement(evt.target.value)
  }

  return (
    <div className="App">
      <Index list={list}/>
    </div>
  );
}

export default App;
