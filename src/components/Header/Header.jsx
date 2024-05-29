import React, { useState } from 'react';
import logo from '../../../public/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleToggleBtn = () =>{
        setOpen(!open)
    }
    return (
        <div>
            <div className="navbar ">
                <nav className='flex justify-between header-container xl:mx-20 py-3 '>
                    <div className=""><img className='w-32' src={logo} alt="" /></div>
                    <div className={`items-center  flex  ${ open ? 'navbar-menu active' : "navbar-menu" }`}>
                        <ul className={`flex gap-10 text-2xl navbar-container-menu`}>
                            <Link to={`/`}><li className='ancor'>Home</li></Link>
                            <Link to={`about`}><li className='ancor'>About</li></Link>
                            <Link to={`/skills`}><li className='ancor'>Skills</li></Link>
                            <Link to={`portfolio`}><li className='ancor'>Portfolio</li></Link>
                            <Link to={`contact`}><li className='ancor'>Contact</li></Link>
                        </ul>
                    </div>
                    <div className="nav-icon xl:hidden md:hidden" onClick={handleToggleBtn}>
                           {
                            open ? <FontAwesomeIcon size={30} icon={faX} /> : <FontAwesomeIcon size={30} icon={faBars} />
                           }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;