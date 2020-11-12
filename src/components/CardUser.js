import React, { Component } from 'react'

class CardUser extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, id)=> (
          <ul key = {user.id} style = {ulStyle}>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.phone}</li>
            <li>{user.email}</li>
          </ul>
        ))}
      </div>
    ) 
  }
}

const ulStyle = {
  margin: '5px',
  backgroundColor: '#f4f4f4',
  padding: '5px',
}

export default CardUser;