import List from '../../components/List/List'
import './Index.css';

export default function Index({ list }) {
  return (
    <>
    <h1>Spotter</h1>
    <hr/>
      <form className="pure-form">
        <label></label>
        <input type="text" name="name"/>
        <button className="pure-button">Add Post</button>
      </form>
      <List list={list} />
    </>
  )
}
