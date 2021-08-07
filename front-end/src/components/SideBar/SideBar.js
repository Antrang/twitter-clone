import React from 'react'
import '../../css/SideBar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExplicitIcon from '@material-ui/icons/Explicit';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HomeIcon from '@material-ui/icons/Home';
import SideBarLayout from './SideBarLayout';
function SideBar() {
    return (
        <div className="sidebar">
            {/* { twitter icon} */}
            <div className="sidebar-HomeIcon">
                <TwitterIcon className="sidebar-TwitterIcon" />
            </div>
            <div className="sidebarOption">
                <SideBarLayout text={'Home'} Icon={HomeIcon} />
                <SideBarLayout text={'Explore'} Icon={ExplicitIcon} />
                <SideBarLayout text={'Notification'} Icon={NotificationsIcon} />
                <SideBarLayout text={'Email'} Icon={EmailIcon} />
                <SideBarLayout text={'Bookmark'} Icon={BookmarkBorderIcon} />
                <SideBarLayout text={'List'} Icon={ReceiptIcon} />
                <SideBarLayout text={'Profile'} Icon={PersonIcon} />
                <SideBarLayout text={'More'} Icon={MoreHorizIcon} />
                {/* { sidebaroption } */}
                {/* { sidebaroption } */}
                {/* { sidebaroption } */}
                {/* { sidebaroption } */}
                {/* { sidebaroption } */}

                {/* { button twitter } */}
            </div>
        </div >
    )
}
export default SideBar;