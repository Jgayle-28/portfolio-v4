'use client'
import { useCallback, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import NavButton from './navigation/NavButton'
import SideNav from './navigation/SideNav'
import SideNavMenu from './navigation/SideNavMenu'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState)
  }, [showMenu, setShowMenu])

  return (
    <>
      <nav className='bg-white dark:bg-brandBlack absolute top-0 w-full flex md:flex-row justify-between items-center py-4 px-8'>
        <div>
          <Image
            className='font-brandSecondary'
            src='/logo.svg'
            alt='logo'
            width={30}
            height={30}
          />
        </div>

        <NavButton showMenu={showMenu} toggleMenu={toggleMenu} />
      </nav>
      <AnimatePresence mode='wait'>
        {showMenu && (
          <>
            <SideNav isOpen={showMenu} />
            <SideNavMenu isOpen={showMenu} />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
