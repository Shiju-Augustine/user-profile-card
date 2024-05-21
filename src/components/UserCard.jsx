import React from 'react';

const UserCard = ({ name, avatar, biography }) => (
    <div className="user-card">
        <h2>{name}</h2>

        <img src={avatar} alt={name} className="avatar" />
        <div className="user-info">
            <p>{biography}</p>
        </div>
    </div>
);

export default UserCard;
