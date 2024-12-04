import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends Component {
  state = {
    filterText: '', 
  };

  handleFilterChange = (event) => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <Filter
          filterText={filterText} 
          count={filteredUsers.length} 
          onChange={this.handleFilterChange} 
        />
        <ul className="users">
          {filteredUsers.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;