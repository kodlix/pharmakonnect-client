import React from 'react';
import AdminMainHeader from '../AdminMainHeader';
import AdminSideBar from '../AdminSidebar';
import AdminPageHeader from '../AdminPageHeader';
import AdminMain from './AdminMain';
// import './Dashboard.css';

const Dashboard = () => {
    return (
        <div id="db-wrapper">
            <AdminSideBar/>
            <div id="page-content">
                <AdminMainHeader />
                <div className="container-fluid p-4">
                    <AdminPageHeader/>
                    <AdminMain/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
