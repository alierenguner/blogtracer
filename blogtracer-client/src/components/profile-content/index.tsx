import React from 'react';
// Components
import ProfileFeed from '@components/feeds/profile-feed';

const ProfileContent = () => {
    return (
        <div className="profile-content">
            <div className="tabs">
                <button className="active">Content</button>
                <button>Likeds</button>
                <button>Statistics</button>
            </div>
            <ProfileFeed />
        </div>
    )
}

export default ProfileContent;