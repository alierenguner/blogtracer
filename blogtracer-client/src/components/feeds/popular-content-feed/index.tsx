import React from 'react';
// Components
import FeedItem from '../src/item';

const PopularContentFeed = () => {
    return (
        <div className="popular-content-feed grid">
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
        </div>
    )
}

export default PopularContentFeed;