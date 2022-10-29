import React from 'react';

interface Props {
    children?: JSX.Element | JSX.Element[]
}

const CommentContainer = (props: Props) => {
    return (
        <div className="comment-container">
            {props.children}
        </div>
    )
}

export default CommentContainer;