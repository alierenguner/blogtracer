import React from 'react';
import CommentCard from './comment-card';
import CommentContainer from './comment-container';
import CommentCreator from './comment-creator';
import CommentTitle from './comment-title';

const Comments = () => {
    return (
        <div className="comments">
            <CommentTitle />
            <CommentCreator />
            <CommentContainer>
                <CommentCard />
            </CommentContainer>
        </div>
    )
}

export default Comments;