import React from 'react'
import { Link } from 'react-router-dom'

const NavButton = (props) => {
  return (
    <div className='flex p-[2px] w-full rounded-3xl card mx-2'>
      <div className='flex px-[10px] bg-[#181818] py-[5px] rounded-3xl card-info'>
        <Link className='title' to={props.path}>{props.label}</Link>
      </div>
    </div>
  )
}

export default NavButton