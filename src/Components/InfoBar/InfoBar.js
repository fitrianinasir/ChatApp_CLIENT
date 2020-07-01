import React from 'react'
import onlineIcon from '../../assets/onlineIcon.png'
import closeIcon from '../../assets/closeIcon.png'
import './InfoBar.css'

function InfoBar({ room, users }) {
  console.log('msg', users)
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="online" className="onlineIcon" />
        <h3>{room}</h3> <br />
        <div className="memberSection">
          {users.map((user, index) => (
            <span style={{ marginRight: '5px' }}>

              {index === (users.length - 1)? user.name : `${user.name},`}
            </span>
          ))}
        </div>
      </div>

      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  )
}

export default InfoBar
