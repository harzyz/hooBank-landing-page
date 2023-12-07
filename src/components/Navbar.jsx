import React, {useState} from 'react'
import styles from './Navbar.module.css'
import logo from '../images/logo.png'
import hamburger from '../images/hamburger.png'

function Navbar() {
  const [dropdown, setDropdown] = useState(true)

  return (
    <nav className={styles.navwrapper}>
      <div className={styles.logocontainer}>
        <img src={logo} alt="" />
        <h2>HooBank</h2>
      </div>
      <ul className={styles.navitems}>
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Solution</li>
      </ul>
      <div className={styles.hamburger} onClick={()=> setDropdown(!dropdown)}>
        <img src={hamburger} alt="" />
      </div>
      <ul className={dropdown? styles.navitemsmob : styles.close}>
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Solution</li>
      </ul>
    </nav>
  )
}

export default Navbar
