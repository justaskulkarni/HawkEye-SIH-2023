import React from 'react'
import {
BsEye, BsGrid1X2Fill, BsFillBellFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsChatLeftText
}
    from 'react-icons/bs'
import { BiSolidCctv, BiSolidLogOutCircle } from 'react-icons/bi'

function Sidebar({ openSidebarToggle, OpenSidebar, onItemClick }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsEye className='icon_header' /> HawkEye
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => onItemClick('dashboard')}>
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => onItemClick('createReports')}>
                        <BsListCheck className='icon' /> Create Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => onItemClick('viewreports')}>
                        <BsMenuButtonWideFill className='icon' /> View Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => onItemClick('chat')}>
                        <BsChatLeftText className='icon' /> Chats
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => onItemClick('alerts')}>
                    <BsPeopleFill className='icon' /> Personnel
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => onItemClick('alerts')}>
                        <BsFillBellFill className='card_icon' /> Alerts
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => onItemClick('cctvfeeds')}>
                        <BiSolidCctv className='card_icon' /> CCTV Feeds
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#" onClick={() => onItemClick('cctvfeeds')}>
                        <BsFillGearFill className='icon' /> Settings
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BiSolidLogOutCircle className='icon' /> Logout
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar