import React from 'react';
// Components
import FeedItem from '../src/item';

const HomeFeed = () => {
    return (
        <div className="home-feed grid">
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
        </div>
    )
}

export default HomeFeed;