import React from 'react';
import CommentCard from './comment-card';
import CommentContainer from './comment-container';
import CommentCreator from './comment-creator';

const Comments = () => {
    return (
        <div className="comments">
            <h4>COMMENTS</h4>
            <CommentCreator />
            <CommentContainer>
                <CommentCard />
            </CommentContainer>
        </div>
    )
}

export default Comments;