import React from 'react'

const GetUser = (props) => {
  let user = props.users;
  return (
  <ul>
    <li>{user.name}</li>
    <li>{user.email}</li>
    <li>{user.username}</li>
    <li>{user.address.city}</li>
  </ul>
 
  )
}

export default GetUser;