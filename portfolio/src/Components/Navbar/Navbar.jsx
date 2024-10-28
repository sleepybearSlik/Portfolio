import React, {useState} from 'react'
import './Navbar.css'
const Navbar = () => {

  const [clicked, setclicked] = useState(null);
  function handleclick(item){
    setclicked(item);
  }

  return (
    <div className='outer'>
    <nav className='nav'>
      <ul>
      <li onClick={() => handleclick('About')} className={clicked === 'About' ? 'clicked' : ''}>About</li>
      <li onClick={() => handleclick('Home')} className={clicked === 'Home' ? 'clicked' : ''}>Home</li>
      <li onClick={() => handleclick('Projects')} className={clicked === 'Projects' ? 'clicked' : ''}>Projects</li>
      <li onClick={() => handleclick('Contact')} className={clicked === 'Contact' ? 'clicked' : ''}>Contact</li>
      <li onClick={() => handleclick('Home')} className={clicked === 'Qualifications' ? 'clicked' : ''}>Qualifications</li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
