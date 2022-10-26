import React from 'react';

const ProfileCard = () => {
    const photo = 'https://pbs.twimg.com/profile_images/958997253892419586/Jb6NPqEa_400x400.jpg';
    
    return (
        <div className="profile-card">
            <div className="photo">
                <img src={photo} alt="" />
            </div>
            <div className="profile">
                <div className="name">Selman KAHYA</div>
                <div className="role">İçerik Üreticisi</div>
                <div className="bio">CTO at Vibely - Youtube Content Creator</div>
                <div className="links">
                    <div className="link">
                        <i className="far fa-paper-plane" />
                        <span>selman.kahya@blogtracer.com</span>
                    </div>
                    <div className="link">
                        <i className="far fa-browser" />
                        <span>www.selmankahya.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;