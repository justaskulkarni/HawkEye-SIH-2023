import { useState } from 'react';
import Calendar from 'react-calendar';
import '../stylesheets/Dashboard.css'
import 'react-calendar/dist/Calendar.css';
import Middle from '../components/Middle';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ReportForm from '../components/ReportForm';

const Dashboard = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <>
            <div className='grid-container'>
                <Header OpenSidebar={OpenSidebar} />
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                <ReportForm />
            </div>
            {/* <Calendar onChange={handleDateChange} value={date} /> */} 
        </>
    )
}

export default Dashboard;