import React from 'react';
// Component
import Content from '@components/content';
import ContentAuthor from '@components/content-author';

const ContentContainer = () => {
    return (
        <div className="content-container container">
            <Content />
            <ContentAuthor />
        </div>
    )
}

export default ContentContainer;