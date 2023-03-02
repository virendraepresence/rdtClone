import React from 'react'

export default function CenterBar(props) {
  return (
    <>
    
        <div className={`centerbar`}>  
            <div className={`bg-${props.mode} mt-5 py-3 px-5 border-${props.mode === 'light' ? 'dark':'light'}`}>
                <ul class="nav justify-content-start">
                    <li class="nav-item">
                        <a class={`nav-link active rounded-pill text-light bg-${props.mode === 'dark' ? 'secondary': 'primary'}`} href="#">Hot</a>
                    </li>
                    <li class="nav-item active rounded-pill bg-secondary mx-1">
                        <a class="nav-link text-light " href="#">India</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">New</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Top</a>
                    </li>

                    <li class="nav-item">
                        
                        <div className="btn-group mr-10">
                            <div type="button" className={`btn btn-${props.mode === 'light' ? 'light':'dark'} text-${props.mode === 'light' ? 'dark':'primary'}`}>ooo</div>
                            <button type="button" className={`btn btn-${props.mode === 'light' ? 'light':'dark'} dropdown-toggle dropdown-toggle-split text-${props.mode === 'light' ? 'dark':'primary'}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Dropdown</span>
                            </button>
                            <div className={`dropdown-menu bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`}>
                            <a className={`dropdown-item bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} href="#">Authors</a>
                            <a className={`dropdown-item bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} href="#">News</a>
                            <a className={`dropdown-item bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} href="#">Personalities</a>
                            <div className={`dropdown-divider bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`}></div>
                                <a className={`dropdown-item bg-${props.mode === 'light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} href="#">Contribute</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className={`container border border-primary border-1 m-2 rounded text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>
                <h2 className={``}>Some Title</h2>
                <small className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Snippet</small>
                <p className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Text Details that may look funny or may be not</p>
            </div><div className={`container border border-primary border-1 m-2 rounded text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>
                <h2 className={``}>Some Title</h2>
                <small className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Snippet</small>
                <p className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Text Details that may look funny or may be not</p>
            </div>
            <div className={`container border border-primary border-1 m-2 rounded text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>
                <h2 className={``}>Some Title</h2>
                <small className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Snippet</small>
                <p className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Text Details that may look funny or may be not</p>
            </div>
            <div className={`container border border-primary border-1 m-2 rounded text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>
                <h2 className={``}>Some Title</h2>
                <small className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Snippet</small>
                <p className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Text Details that may look funny or may be not</p>
            </div>
            <div className={`container border border-primary border-1 m-2 rounded text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>
                <h2 className={``}>Some Title</h2>
                <small className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Snippet</small>
                <p className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Text Details that may look funny or may be not</p>
            </div>
            <div className={`container border border-primary border-1 m-2 rounded text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>
                <h2 className={``}>Some Title</h2>
                <small className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Snippet</small>
                <p className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Text Details that may look funny or may be not</p>
            </div>
            <div className={`container border border-primary border-1 m-2 rounded text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>
                <h2 className={``}>Some Title</h2>
                <small className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Snippet</small>
                <p className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Text Details that may look funny or may be not</p>
            </div>
            <div className={`container border border-primary border-1 m-2 rounded text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>
                <h2 className={``}>Some Title</h2>
                <small className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Snippet</small>
                <p className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Text Details that may look funny or may be not</p>
            </div>
            <div className={`container border border-primary border-1 m-2 rounded text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>
                <h2 className={``}>Some Title</h2>
                <small className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Snippet</small>
                <p className={`text-${props.mode === 'light' ? 'dark':'light'} bg-${props.mode}`}>Some Text Details that may look funny or may be not</p>
            </div>
            

        </div>
      
    </>
  )
}
