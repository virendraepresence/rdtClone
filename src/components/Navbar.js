import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
      <>
      <nav className={`navbar fixed-top navbar-${props.mode} bg-${props.mode} py-0`}>
        <span className='rIcon border rounded-5'><strong className='icon-text'>'._.'</strong></span>
        <Link to="/" ><h1 className={`text-${props.mode === 'light' ? 'dark':'light'}`}>Reddit</h1></Link>
        
        <div className="w-50 input-group container d-flex justify-content-center">
          <input type="search" className={`form-control rounded-pill bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          {/* <span className="input-group-text m-0 shadow-none" id="search-addon"> */}
            {/* <i className="fas fa-search"></i> */}
            <button className={`btn btn-primary rounded ml-1`} >Search</button>
          {/* </span> */}
        </div>
        
        <div className="btn-group">
          <div className={`form-check form-switch p-2 text-${props.mode === 'light' ? 'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
          </div>
          <Link to="/" type="button" className={`text-primary p-2`}>Get App</Link>
          <Link to="/create" type="button"><button className='btn btn-primary rounded-pill'>Create A Post</button></Link>
        </div>

        <div className="btn-group mr-10">
        <button type="button" className={`btn btn-success`}>V</button>
        <button type="button" className={`btn btn-success dropdown-toggle dropdown-toggle-split text-${props.mode === 'light' ? 'dark':'light'}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Dropdown</span>
          </button>
          <div className={`dropdown-menu bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`}>
              <a className={`dropdown-item bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} href="#">Profile</a>
              <a className={`dropdown-item bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} href="#">Membership</a>
              <a className={`dropdown-item bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} href="#">Privacy</a>
            <div className={`dropdown-divider bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`}></div>
                  <a className={`dropdown-item bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} href="#">Settings</a>
            </div>
          
        </div>
        
      </nav>
      
      </>
      
    );
  }
   
  export default Navbar;