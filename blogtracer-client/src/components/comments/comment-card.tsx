import React from 'react';

const CommentCard = () => {
    const photo = 'https://media-exp1.licdn.com/dms/image/C4D03AQEuO8l3XnYfgQ/profile-displayphoto-shrink_200_200/0/1654377989024?e=2147483647&v=beta&t=De8cyzHb-7C3CKewdcYWClLZo5CLSoRd7xJ9WuF_REo';
    
    return (
        <div className="comment">
            <div className="owner-photo">
                <img src={photo} alt="" />
            </div>
            <div className="comment-body">
                <div className="comment-owner">
                    Ali Eren GUNER
                </div>
                <div className="comment-content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, odio.
                </div>
                <div className="comment-actions">
                    <button className="s-button">Like</button>
                    <button className="s-button">Reply</button>
                    <button className="s-button">One year ago</button>
                </div>
            </div>
        </div>
    )
}

export default CommentCard;