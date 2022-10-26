import React from 'react';
import { Route } from 'react-router';
// Layouts
import MainLayout from '@/pages/layouts/main-layout';
// Containers
import HomeContainer from '@containers//home-container';
import ContentContainer from '@containers//content-container';
import ProfileContainer from '@containers//profile-container';
import DiscoverContainer from '@containers//discover-container';
import FollowListContainer from '@containers//follow-list-container';

const mainRoutes = [
    <Route key="main-routes" element={<MainLayout />}>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/discover" element={<DiscoverContainer />} />
        <Route path="/follow-list" element={<FollowListContainer />} />
        <Route path="/contents" element={<ContentContainer />} />
        <Route path="/users" element={<ProfileContainer />} />
    </Route>
] 

export default mainRoutes;