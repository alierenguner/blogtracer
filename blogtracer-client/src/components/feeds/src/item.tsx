import React from 'react';

const FeedItem = () => {
    const image = 'https://www.teoridergisi.com/sites/default/files/yazi-makale-gorselleri/2021/Mart/1.jpg';
    const author = 'https://media-exp1.licdn.com/dms/image/C4D03AQEuO8l3XnYfgQ/profile-displayphoto-shrink_200_200/0/1654377989024?e=2147483647&v=beta&t=De8cyzHb-7C3CKewdcYWClLZo5CLSoRd7xJ9WuF_REo';

    return (
        <div className="content grid-item">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="head">
                <div className="category">Yolculuk</div>
                <div className="title">Şans ve Çalışkanlık</div>
            </div>
            <div className="bottom">
                <div className="author">
                    <img src={author} alt="" />
                    <span>Ali Eren GUNER</span>
                </div>
                <div className="statistics">
                    <div className="statistic">
                        <i className="fas fa-heart" />
                        <span>2</span>
                    </div>
                    <div className="statistic">
                        <i className="fas fa-eye" />
                        <span>25</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedItem;