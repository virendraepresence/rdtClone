import React from 'react'

function Footer(props) {
  return (
    <>

<div className={`container`} >
  <footer style={{color: props.mode=== 'dark' ? 'dark' : 'light'}} className={`d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-${props.mode === 'light' ? 'dark' : 'light'} `}>
    <p className={`col-md-4 mb-0 text-muted text-${props.mode === 'light' ? 'dark' : 'light'} `}>2022 Company, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      
    </a>

    <ul className={`nav col-md-4 justify-content-end`}>
      <li className={`nav-item `}><a className={`nav-link px-2 text-muted text-${props.mode === 'light' ? 'dark' : 'light'} `} href="#">Home</a></li>
      <li className="nav-item"><a className={`nav-link px-2 text-muted text-${props.mode === 'light' ? 'dark' : 'light'}`} href="#">Features</a></li>
      <li className="nav-item"><a href="#" className={`nav-link px-2 text-muted text-${props.mode === 'light' ? 'dark' : 'light'}`}>Pricing</a></li>
      <li className="nav-item"><a href="#" className={`nav-link px-2 text-muted text-${props.mode === 'light' ? 'dark' : 'light'}`}>FAQs</a></li>
      <li className="nav-item"><a href="#" className={`nav-link px-2 text-muted text-${props.mode === 'light' ? 'dark' : 'light'}`}>About</a></li>
    </ul>
  </footer>
</div>
      
    </>
  )
}

export default Footer
