import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsFillGrid3X3GapFill}from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Sidebar({sidebarToggle , sidebar}) {
  return (
    <aside id="sidebar"className={sidebarToggle ? "sidebar-responsive":""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Calzanda
            </div>
            <span className='icon close_icon'onClick={sidebar} >X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to=''>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='/product'>
                    <BsFillArchiveFill className='icon'/> Products
                    </Link>
            </li>
            <li className='sidebar-list-item'>
            
                <Link to='/category'>
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to=''>
                    <BsPeopleFill className='icon'/> Customers
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to=''>
                    <BsListCheck className='icon'/> Inventory
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to=''>
                    <BsMenuButtonWideFill className='icon'/> Reports
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to=''>
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar