import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { navLinks } from '../assets/assets'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} />
        <ul className='hidden md:flex gap-7 text-white'>
          {navLinks.map((link, index) => (
            <a key={index} href={`#${link}`} className='cursor-pointer hover:text-gray-400'>{link}</a>
          ))}
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        <img src={assets.menu_icon} onClick={() => setShowMenu(!showMenu)} className='md:hidden w-7 cursor-pointer' />
      </div>
      {/* mobile menu */}
      {showMenu && <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all'>
        <div className='flex justify-end p-6'>
          <img src={assets.cross_icon} className='w-6 cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          {navLinks.map((link, index) => (
            <a key={index} href={`#${link}`} onClick={() => setShowMenu(!showMenu)} className='px-4 py-2 rounded-full inline-block'>{link}</a>
          ))}
        </ul>
      </div>}
    </div>
  )
}

export default Navbar
