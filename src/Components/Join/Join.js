import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

function Join() {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="joinInput"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Room"
            className="joinInput mt-20"
            onChange={(e) => setRoom(e.target.value)}
            onKeyPress={(e)=> e.key === 'Enter' ? window.location.href = `/chat?name=${name}&room=${room}` : null}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit mt-20" className="button">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Join
