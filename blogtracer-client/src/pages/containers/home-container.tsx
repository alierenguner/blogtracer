import React from 'react';
// Components
import SectionTitle from '@common-components/section-title';
import HomeFeed from '@components/feeds/home-feed';

const HomeContainer = () => {
    return (
        <div className="home-container container">
            <SectionTitle value="FEED" />
            <HomeFeed />
        </div>
    )
}

export default HomeContainer;