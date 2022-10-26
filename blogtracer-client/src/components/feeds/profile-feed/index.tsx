import React from 'react';
// Components
import FeedItem from '../src/item';

const ProfileFeed = () => {
    return (
        <div className="profile-feed grid">
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
        </div>
    )
}

export default ProfileFeed;