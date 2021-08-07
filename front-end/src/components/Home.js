import React from 'react'
import SideBar from './SideBar/SideBar'
import HomeFeed from './HomeFeed'
import Trends from './Trends'
import '../css/Home.css';
function Home() {
    return (
        <div className="Home">
            <SideBar />
            <HomeFeed />
            <Trends />
        </div>
    )
}

export default Home
