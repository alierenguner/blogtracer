import React from 'react';
// Components
import ProfileCard from '@components/profile-card';
import ProfileContent from '@components/profile-content';

const ProfileContainer = () => {
    return (
        <div className="profile-container container">
            <ProfileCard />
            <ProfileContent />
        </div>
    )
}

export default ProfileContainer;