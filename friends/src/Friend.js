import React, { Component } from 'react';

class Friend extends Component {

	deleteFriend = (e) => {
    this.props.deleteFriend(e.target.dataset.index);
  }

  showEdit = (e) => {
    e.target.nextSibling.classList.add('edit-show');
  }

  cancelEdit = (e) => {
    e.target.parentNode.parentNode.parentNode.classList.remove('edit-show');
  }

  saveUpdate = () => {
    const name = this.refs.name.value === '' ? this.refs.name.placeholder : this.refs.name.value;
    const email = this.refs.email.value === '' ? this.refs.email.placeholder : this.refs.email.value;
    const age = this.refs.age.value === '' ? this.refs.age.placeholder : this.refs.age.value;
    const friend = {
      name: name,
      email: email,
      age: age
    }
    this.props.updateFriend(this.props.index, friend);
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.age.value = ''; 
  }

  render() {
  	console.log(this.props)
    return (
      <div 
        className="friend">
        <div>
          <h2>{this.props.name}</h2>
          <p>Age: {this.props.age}</p>
          <p>Email: {this.props.email}</p>
        </div>
        <button 
          onClick={this.deleteFriend}
          data-index={this.props.index}></button>
        <button 
          onClick={this.showEdit}
          data-index={this.props.index}></button>
        <div className="edit">
          <div>
            <input ref="name" type="text" placeholder={this.props.name} />
            <input ref="age" type="number" placeholder={this.props.age} />
            <input ref="email" type="email" placeholder={this.props.email} />
            <div>
              <button onClick={this.cancelEdit}>Cancel</button>
              <button onClick={this.saveUpdate}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friend;
