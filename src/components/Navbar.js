import React,{useState} from 'react'
import * as Faicons from 'react-icons/fa';
import * as Aiicons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {NavbarData} from './NavbarData';
import './Navbar.css';
import {IconContext} from 'react-icons';//from this you can change the colour of all the icons at once
function Navbar() {

    const [sidebar, SetSidebar] = useState(false)
    const ShowSidebar = ()=>{SetSidebar(!sidebar)
    console.log(sidebar);}

    return (
        <>
        <IconContext.Provider value={{color: 'white'}}>
            <div className ="navbar">
                <Link to = "#" className="menu-bars">
                    <Faicons.FaBars onClick = {ShowSidebar}/>
                </Link>
            </div>
            <nav className ={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick = {ShowSidebar}>
                    <li className="navbar-toggle">
                        <Link to ="#" className ="menu-bars">
                             <Aiicons.AiOutlineClose/>
                        </Link>
                    </li>
                    {NavbarData.map((item,index) =>{
                        return (
                            <li key={index} className={item.cname}>
                                <Link to ={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
//react-router-dom is useful for adding tags