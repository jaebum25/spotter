import { useState, useEffect } from "react"
import axios from 'axios'

export default function PostHistoryPage() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idClick, setIdClick] = useState(1)

  const handleClick = () => {
    setIdClick(id)
  }

  useEffect(() => {
    // axios.get('https://api.deezer.com/search?q=eminem')
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [idClick])

  return (
    <>
      <h1>PostHistoryPage</h1>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Post</button>
      <div>{post.title}</div>
      {/* <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </>
  )
}