import '../index.css';
import logo from '../assets/logo-frame.png';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md jeju w-100 my-4 mb-5'>
      <div className='container p-3 col-lg-9 rounded-4'>
        <a
          className='navbar-brand'
          href='#'>
          <img
            src={logo}
            className='img-fluid logo'
            alt='logo'
          />
        </a>
        <ul className='navbar-nav w-100'>
          <div className='collapse navbar-collapse justify-content-center'>
            <li className='nav-item px-3'>
              <a
                className='nav-link text-light'
                href='#'>
                Events
              </a>
            </li>
            <li className='nav-item px-3'>
              <a
                className='nav-link text-light'
                href='#'>
                My Tickets
              </a>
            </li>
            <li className='nav-item px-3'>
              <a
                className='nav-link text-light'
                href='#'>
                About Project
              </a>
            </li>
          </div>
          <button className='btn btn-light rounded-3 my-tickets-btn'>
            MY TICKETS <span className='symbols'>&rarr;</span>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
