import apexMainPic from './assets/apexMainPic.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className="navContainer">
        {/*Going to use <a href="apex main site" later on */}
        {/* <img src={apexMainPic} /> */}
        <div>
          <img className='mainLogo' src={apexMainPic} />
        </div>
        <div>
          Home
        </div>
        <div>
          Services
        </div>
        <div>
          Contact Us
        </div>
      </div>

    </>
  )
}

export default Navbar