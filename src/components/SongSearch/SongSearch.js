import { useState, useEffect } from "react"
import axios from 'axios'
import './SongSearch.css'

export default function SongSearch() {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState('Nickelback')
  const [idClick, setIdClick] = useState(1)

  const handleClick = (evt) => {
    evt.preventDefault()
    setIdClick(id)
  }

  const handleChange = (evt) => {
    evt.preventDefault()
    setId(evt.target.value)
  }

  // const handlePost = (evt) => {
  //   evt.preventDefault()
  //   navigator.clipboard.writeText(id)
  //   // console.log(posts[1].title)
  //   console.log()
  //   // console.log(id, "id")
  //   console.log(posts, "posts")
  //   // console.log('button works')
  // }

  useEffect(() => {
    axios
      // alt host
      // .get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${id}`)
      .get(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${id}`)
      .then(res => {
        setPosts(res.data.data)
    })
    .catch(err => {
      console.log(err, "err")
    })
  }, [idClick])
  
  return (
    <div className="SongSearch">
      <input type="text" value={id} placeholder="Artist name" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      {id === 'Nickelback' ? (
        <>
          <div className="lol">Don't like Nickelback? Start search!</div>
          <ul>
            {posts.map(post => ( 
              <li key={post.id}>
              <span>{post.artist.name} - {post.title}</span>
            <button onClick={() => {navigator.clipboard.writeText(post.artist.name + ' - ' + post.title)}}>copy</button>
          </li>
        ))}
      </ul>
        </>)
      :
      <ul>
        {posts.map(post => ( 
          <li key={post.id}>
            {post.artist.name} - {post.title} 
            <button onClick={() => {navigator.clipboard.writeText(post.artist.name + ' - ' + post.title)}}>copy</button>
          </li>
        ))}
      </ul>
      }
    </div>
  )
}