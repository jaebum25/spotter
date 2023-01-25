import React from 'react'

export default function SongSearch({ handleSearch }) {
  return (
    <>
      <h1>Itunes API</h1>
      <form className="pure-form">
        <label>Enter Aritst here: </label>
        <input type="text" />
        <button className="pure-button" onClick={handleSearch}>Search</button>
        <div id="output"></div>
      </form>
    </>
  )
}