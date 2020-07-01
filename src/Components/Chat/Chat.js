import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import './Chat.css'

let socket

function Chat(props) {
  const [name, setName] = useState('')
  const [users,setUsers] = useState([])
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(props.location.search)
    socket = io(ENDPOINT)
    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, () => {})
    
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, props.location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
    socket.on('roomData', (users) => {
      let usersData = users.users
      setUsers(usersData)
      
    })
  }, [messages])

  // function for sending messages
  const sendMessage = (e) => {
    e.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log('pengguna', users)
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} users={users}/>
        <Messages messages={messages} message={message} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default Chat
