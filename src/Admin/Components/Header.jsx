import React from 'react'
import {BsJustify,BsSearch,BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle} from 'react-icons/bs'

function Header({sidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'onClick={sidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header