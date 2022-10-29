import React from 'react';
// Component
import Content from '@components/content';
import ContentAuthor from '@components/content-author';
import Comments from '@components/comments';

const ContentContainer = () => {
    return (
        <div className="content-container container">
            <div className="main-section">
                <Content />
                <Comments />
            </div>
            <ContentAuthor />
        </div>
    )
}

export default ContentContainer;