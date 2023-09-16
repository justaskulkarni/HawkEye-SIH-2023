import React from 'react'
import {
BsEye, BsGrid1X2Fill, BsFillBellFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsChatLeftText
}
    from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
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
                    <a href="">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsListCheck className='icon' /> Create Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon' /> View Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsChatLeftText className='icon' /> Chats
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                    <BsPeopleFill className='icon' /> Personnel
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillBellFill className='card_icon' /> Alerts
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar