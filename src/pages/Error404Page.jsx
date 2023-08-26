import { Link } from "react-router-dom"

const Error404Page = () => {
  return (
    <div className='py-4 px-12'>
      <div className='flex w-full p-[2px] h-[500px] buttonCover items-center justify-center rounded-lg'>
        <div className='flex flex-col w-full h-full buttonInner justify-center items-center rounded-lg'>
          <p className='text-3xl font-bold text-white'>404 Not Found</p>
          <Link className="underline text-white" to='/'>Back To Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Error404Page