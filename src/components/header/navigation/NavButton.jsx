import React from 'react'
import styles from './navStyles.module.scss'
import { motion } from 'framer-motion'

export default function NavButton({ showMenu, toggleMenu }) {
  return (
    <>
      <div className={`${styles.menuBtnContainer} `}>
        <button
          onClick={toggleMenu}
          className={`${styles.menuBtn} ${
            showMenu ? `${styles.close} bg-menuBg` : ''
          }`}
        >
          <div className={styles.btnLine} />
          <div className={styles.btnLine} />
          <div className={styles.btnLine} />
        </button>

        {!showMenu && (
          <motion.div
            className={`${styles.menuBtnText} text-white text-xs font-light`}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial='hidden'
            animate='visible'
            transition={{
              duration: 0.3,
              ease: 'easeIn',
            }}
          >
            Menu
          </motion.div>
        )}
      </div>
    </>
  )
}
