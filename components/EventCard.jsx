import React from 'react'
import { Link } from 'react-router-dom'
import {getRemainingDaysLabel} from '../lib.js'
import TextAn from "../src/TextAn.jsx";

const EventCard = (props) => {
  const days = getRemainingDaysLabel(props.date)
  return (
    <div className=' w-[300px] p-[2px] rounded-xl card card3 text-white'>
      <div className='flex h-full w-full bg-[#181818] rounded-xl justify-center items-center flex-col'>
        <img src={props.img} alt={props.slug} className='h-[280px] w-[280px] rounded-xl my-2 ' />
        <TextAn>
        <h1 className='text-lg font-bold flex p-2 title2lines'>{props.title}</h1>
        </TextAn>
        <div className='flex justify-end gap-3 w-full mb-3'>
          <div className='p-[2px] card  rounded-lg'>
            <p className='p-1 bg-black rounded-lg font-bold text-sm card'>{days}</p>
          </div>
          <Link to={`/upevents/${props.slug}`} className='flex buttonCover rounded-lg justify-center items-center p-[2px] mr-3 '>
            <p className='w-full h-full flex items-center px-4 buttonInner rounded-lg'>More..</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EventCard