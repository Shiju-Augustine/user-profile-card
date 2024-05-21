import React from 'react';

const UserCard = ({ name, avatar, biography }) => (
    <div class="user-card">
        <div class="user-avatar">
            <img src={avatar} alt={name} className="avatar" />
        </div>
        <div class="user-details">
            <h2>{name}</h2>
            <p>{biography}</p>
        </div>
    </div>
);

export default UserCard;
