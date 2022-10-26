import React from 'react';
// Components
import SectionTitle from '@common-components/section-title';
import NewContentFeed from '@components/feeds/new-content-feed';
import PopularContentFeed from '@components/feeds/popular-content-feed';

const DiscoverContainer = () => {
    return (
        <div className="discover-container container">
            <SectionTitle value='NEW CONTENTS' />
            <NewContentFeed />

            <SectionTitle value='POPULAR CONTENTS' />
            <PopularContentFeed />
        </div>
    )
}

export default DiscoverContainer;