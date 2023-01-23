import List from '../../components/List/List'
import './Index.css';

export default function Index({ list, handleChange, handleSubmit, name, handleDelete }) {
  return (
    <>
    <h1>Spotter</h1>
    <hr/>
      <form className="pure-form" onSubmit={handleSubmit}>
        <label></label>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <button className="pure-button">Add Post</button>
      </form>
      <List list={list} handleDelete={handleDelete}/>
    </>
  )
}
