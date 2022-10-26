import React from 'react';

const FollowListDataTable = () => {
    const photo = 'https://www.alierenguner.com/assets/alieren-guner.jpg';
    
    return (
        <div className="follow-list">
            <table className="datatable">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Bio</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={photo} alt="" />
                        </td>
                        <td>Ali Eren GUNER</td>
                        <td>Content-Creator - Founder of Blogtracer</td>
                        <td>
                            <button>Profile</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={photo} alt="" />
                        </td>
                        <td>Ali Eren GUNER</td>
                        <td>Content-Creator - Founder of Blogtracer</td>
                        <td>
                            <button>Profile</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={photo} alt="" />
                        </td>
                        <td>Ali Eren GUNER</td>
                        <td>Content-Creator - Founder of Blogtracer</td>
                        <td>
                            <button>Profile</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={photo} alt="" />
                        </td>
                        <td>Ali Eren GUNER</td>
                        <td>Content-Creator - Founder of Blogtracer</td>
                        <td>
                            <button>Profile</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={photo} alt="" />
                        </td>
                        <td>Ali Eren GUNER</td>
                        <td>Content-Creator - Founder of Blogtracer</td>
                        <td>
                            <button>Profile</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FollowListDataTable;