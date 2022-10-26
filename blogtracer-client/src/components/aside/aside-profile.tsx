import React from 'react';

const AsideProfile = () => {
    const imgSource = 'https://media-exp1.licdn.com/dms/image/C4D03AQEuO8l3XnYfgQ/profile-displayphoto-shrink_200_200/0/1654377989024?e=2147483647&v=beta&t=De8cyzHb-7C3CKewdcYWClLZo5CLSoRd7xJ9WuF_REo';
    
    return (
        <div className="aside-profile">
            <div className="profile-img">
                <img src={imgSource} alt="Profile" />
            </div>
            <div className="name">
                Ali Eren GUNER
            </div>
            <div className="role">
                Founder
            </div>
        </div>
    )   
}

export default AsideProfile;