import React from 'react'
import styles from './Footer.module.css'
import logo from '../images/footerlogo.png'
import copyright from '../images/copyright 1.png'
import socials from '../images/socials.png'

function Footer() {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footerbody}>
        <div>
          <span href="#Home" className={styles.footerlogo}>
            <img style={{width: '75px', height: '75px'}} src={logo} alt="" />
            <h1>Hoo<span style={{color: '#5CE1E6'}}>Bank</span></h1>
          </span>
          <p style={{ color: '#ffffffb3'}}>A new way to make the payments<br/> easy, reliable and secure.</p>
        </div>
        <div>
          <h3>Usefull Links</h3>
          <ul className={styles.footerlist}>
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul className={styles.footerlist}>
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>
        <div>
          <h3>Partner</h3>
          <ul className={styles.footerlist}>
            <li>Our Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>
      <div style={{border: '1px solid #3F3E45'}}></div>
      <div className={styles.footersocials}>
        <div>Copyright <img src={copyright} alt="" /> 2021 HooBank. All Rights Reserved.</div>
        <img style={{ height: '21px' }} src={socials} alt="" />
      </div>
    </footer>
  )
}

export default Footer
