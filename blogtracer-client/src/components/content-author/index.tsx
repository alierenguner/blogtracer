import React from 'react';

const ContentAuthor = () => {
    const img = 'https://yt3.ggpht.com/ytc/AMLnZu_fO4cvHK4Eb1W4sjLVAysHj3_8JLTN6R2j4Alu5hM=s900-c-k-c0x00ffffff-no-rj';

    return (
        <div className="content-author">
            <div className="author">
                <img src={img} alt="" className="profile-photo" />

                <span className="name">Barış Özcan</span>
                <span className="role">Content-Creator</span>
                <button className="follow-button">Follow</button>

                <span className="bio">Founder Of @blogtracer, Software Development, Music, Portrait Photography</span>
            </div>

            <div className="content-details">
                <div className="detail">
                    <i className="fas fa-heart" />
                    <span>0</span>
                </div>
                <div className="detail">
                    <i className="fas fa-comment" />
                    <span>1</span>
                </div>
                <div className="detail">
                    <i className="fas fa-eye" />
                    <span>24</span>
                </div>
            </div>
        </div>
    )
}

export default ContentAuthor;