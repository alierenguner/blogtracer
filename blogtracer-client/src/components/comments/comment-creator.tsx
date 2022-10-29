import React from 'react';

const CommentCreator = () => {
    return (
        <div className="comment-creator">
            <form onSubmit={(e) => e.preventDefault()}>
                <textarea className="p-input" rows={5} placeholder="You can share your thoughts."  />
                <button className="s-button">Share</button>
            </form>
        </div>
    )
}

export default CommentCreator;