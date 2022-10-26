import React from 'react';
// Components
import SectionTitle from '@common-components/section-title';
import FollowListDataTable from '@components/datatables/follow-list-datatable';

const FollowListContainer = () => {
    return (
        <div className="follow-list-container container">
            <SectionTitle value="FOLLOW LIST" />
            <FollowListDataTable />
        </div>
    )
}

export default FollowListContainer;