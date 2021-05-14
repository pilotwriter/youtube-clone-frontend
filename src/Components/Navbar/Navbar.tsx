import React from 'react'
import './Navbar.css'
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
const Navbar: React.FC = () => {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <button id="sidebarToggle">
                <MenuIcon id="navbarMenuIcon"/>
                </button>
                <YouTubeIcon id="youtubeIcon" style={{color:"red"}}/>
                <h1>YouTube</h1>
            </div>
            <div className="navbarCenter">
                <input id="searchBar" placeholder="Search" />
                <button id="searchButton"> <SearchIcon style={{color:"grey"}} /></button>
            </div>
            <div className="navbarRight">
                <button id="addVideoButton">
                <AddIcon id="addVideoIcon"/>
                </button>
                <button id="profilePic"></button>
            </div>
        </div>
    )
}

export default Navbar;