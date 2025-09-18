import apexMainPic from './assets/apexMainPic.png';

function Navbar() {
  return (
    <>
      <div className="navContainer">
        {/*Going to use <a href="apex main site" later on */}
        <img src={apexMainPic} />
        <div>APEX</div>
      </div>

    </>
  )
}

export default Navbar