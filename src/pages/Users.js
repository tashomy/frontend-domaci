import React, { Component } from 'react'
import {listUsers} from '../services/user.service';
import GetUser from '../components/CardUser';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    let self = this;
    listUsers().then(function (res) {
      self.setState({ users: res});
    });
    
  }
  
  
  render() {

    let users = this.state.users.map((user) => {
      return (
       <div key = {user.id} style={ulStyle}>
        <GetUser users={user}/>
       </div>
      )
    })

    return (<div>{users}</div>)
  }
}

let ulStyle = {
  backgroundColor: '#f4f4f4',
  margin: '5px',
  padding: '5px'

}
export default Users;