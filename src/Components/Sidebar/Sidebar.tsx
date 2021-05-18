import React from 'react'
// FC = functional Component
import {SidebarData} from './SidebarData';
import './Sidebar.css'
const Sidebar: React.FC = () => {
    return (
        <div style={{width:250}}>
            <ul className="rows">
                {SidebarData.map((value,key) =>{
                    return(                   
                         <li className="row" onClick={()=>window.location.pathname = value.path}>
                             <div id="iconContainer" className={value.path === window.location.pathname ? 'active' : 'passive'}>  {value.icon}</div>
                      
                        <div id="titleContainer"> <h3>{value.title}</h3></div>
                       
                     
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Sidebar;