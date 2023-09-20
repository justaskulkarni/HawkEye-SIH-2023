import { useState } from 'react';
import '../stylesheets/Dashboard.css'
import Middle from '../components/Middle';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ReportForm from '../components/ReportForm';
import Alerts from '../components/Alerts';
import Chat from '../components/Chat';
import SurveyMap from '../components/SurveyMap';
import CCTVFeed from '../components/CCTVFeed';
import ViewReports from '../components/ViewReports';

const Dashboard = () => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [activeContent, setActiveContent] = useState('dashboard'); // Default to 'dashboard'

    // Function to handle the sidebar item click
    const handleSidebarItemClick = (content) => {
        setActiveContent(content);
    };
    return (
        <>
            <div className='grid-container'>
                <Header OpenSidebar={OpenSidebar} />
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} onItemClick={handleSidebarItemClick} />
                {activeContent === 'dashboard' ? <Middle /> : null}
                {activeContent === 'createReports' ? <ReportForm /> : null}
                {activeContent === 'alerts' ? <Alerts /> : null}
                {activeContent === 'chat' ? <Chat /> : null}
                {activeContent === 'cctvfeeds' ? <CCTVFeed /> : null}
                {activeContent === 'viewreports' ? <ViewReports /> : null}
            </div>
        </>
    )
}

export default Dashboard;