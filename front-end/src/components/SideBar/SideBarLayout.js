import React from 'react'
import '../../css/SideBarLayout.css';
function SideBarLayout({ text, Icon }) {
    return (
        <div className="SideBarLayout">
            <Icon />
            <h4 className="sidebar-text">{text}</h4>


        </div>
    )
}
export default SideBarLayout;