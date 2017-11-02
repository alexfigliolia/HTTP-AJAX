import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend, updateFriend } from './actions';
import Header from './Header';
import Friend from './Friend';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="friends">
          <div className="center">
            {
              this.props.friends.map((friend, i) => {
                return (
                  <Friend 
                    key={i}
                    index={i}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                    updateFriend={this.props.updateFriend}
                    deleteFriend={this.props.deleteFriend} />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends, deleteFriend, updateFriend })(App);
