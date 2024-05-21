import React from 'react';
import UserProfile from './components/UserProfile';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>User Profile Card</h1>
      <UserProfile render={(user) => <UserCard name={user.name}
        avatar={user.avatar}
        biography={user.biography} />} />
      {/* <UserProfile render={(user) => <UserCard {...user} />} /> */}
    </div>
  );
}

export default App;

