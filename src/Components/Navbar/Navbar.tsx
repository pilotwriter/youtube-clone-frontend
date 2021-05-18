import React ,{useEffect, useState} from 'react'
import './Navbar.css'
import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

const Navbar: React.FC = () => {
    const [loggedIn,setLoggedIn] =  useState<boolean>(false);
    const [profilePicture,setProfilePicture] = useState<string>('');
    const [name,setName] = useState<string>('');
    useEffect(()=>{
        if (sessionStorage.getItem("loggedIn") === "true"){
            setProfilePicture(sessionStorage.getItem('imageUrl') as string);
            setName(sessionStorage.getItem('name') as string);
            setLoggedIn(true);
        }
    },[sessionStorage.getItem('loggedIn')]);

    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <button id="sidebarToggle">
                <MenuIcon id="navbarMenuIcon"/>
                </button>
                <YouTubeIcon id="youtubeIcon" style={{color:"red"}} />
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
                {loggedIn ?<img id='profilePic' src={profilePicture} alt="pp" /> : (<button id="signInButton" onClick={() =>{window.location.pathname='signin'}}>Sign In</button>)}
            </div>
        </div>
    )
}

export default Navbar;