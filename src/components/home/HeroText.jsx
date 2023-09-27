'use client'
import styles from './page.module.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import useMousePosition from '@/hooks/useMousePosition'
import { aliens } from '@/app/fonts'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()
  // console.log('x :>> ', x)
  // console.log('y :>> ', y)
  const size = isHovered ? 400 : 40

  return (
    <main className={`${styles.main} ${aliens.className}`}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size}px ${y - size}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        {/* Hover text should be about rubiks cube & how it relates to solving problems with all the sides being black */}
        <p
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
        >
          A visual designer - with skills that haven't been replaced by A.I
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          I'm a <span>selectively skilled</span> product designer with strong
          focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  )
}
