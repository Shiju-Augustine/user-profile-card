import React from 'react';

const UserProfile = ({ render }) => {
    const user = {
        name: 'Mathew John',
        avatar: 'https://e7.pngegg.com/pngimages/312/283/png-clipart-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-thumbnail.png',
        biography: 'Mathew John is a passionate software engineer with over 5 years of experience in web development. She specializes in front-end technologies such as React and Angular, and has a strong background in building responsive and user-friendly web applications. In her free time, Mathew enjoys hiking, painting, and experimenting with new recipes in the kitchen.'
    };

    return render(user);
};

export default UserProfile;
