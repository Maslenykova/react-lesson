import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    filterText: '', 
  };

  handleFilterChange = (filterText) => {
    this.setState({ filterText }); 
  };

  render() {
    const { users } = this.props;
    const { filterText } = this.state;

    const filteredUsers = users.filter((user) =>
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
          {filteredUsers.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;