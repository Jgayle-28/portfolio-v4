import { useState } from 'react'
import styles from './navStyles.module.scss'
import { motion } from 'framer-motion'
import { mountAnim, menuEntrance, blur } from './animations'
import Link from 'next/link'
import GlitchText from '@/components/shared/GlitchText'

export default function SideNavLink({ data, index }) {
  const { title, href } = data

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseOut = () => {
    setIsHovered(false)
  }

  return (
    <>
      <motion.div variants={menuEntrance} {...mountAnim} custom={index}>
        <Link
          href={href}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <motion.p
            variants={blur}
            className={`font-bold uppercase tracking-wider text-right overflow-hidden ${styles.menuLink}`}
          >
            {isHovered ? <GlitchText text={title} /> : title}
          </motion.p>
        </Link>
      </motion.div>
    </>
  )
}
