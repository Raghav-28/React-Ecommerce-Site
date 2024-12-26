import {assests} from '../assets/assests'
const Navbar = () => {
  return (
    <div className='flex items-center px-[4%] py-2 justify-between'>
      <img className='w-[max(10%.80px)]' src={assests.logo_img} alt="" />
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
