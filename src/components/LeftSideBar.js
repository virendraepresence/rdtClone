import React from 'react'
import {Link} from 'react-router-dom';

export default function LeftSideBar(props) {
  return (
    <>
    <div className={`bg-${props.mode}`}>
        <div className={`container bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
        <h5 className="text-mute"></h5>
        <h5 className="text-mute">Feeds</h5>
            <ul class="nav flex-column links">
                <li class="nav-item">
                    <Link class={`nav-link active text-${props.mode === 'light' ? 'primary':'light'}`} to="/" > Home</Link>
                </li>
                <li class="nav-item">
                    <Link class={`nav-link text-${props.mode === 'light' ? 'primary':'light'}`} to="/create">Popular</Link>
                </li>
                
            </ul>
                    {/* <div className="links"> 
                    <Link to="/">Home</Link>
                    <Link to="/create">New</Link>
                    </div> */}
        <h5 className="text-mute">Topics</h5>
        <div class={`accordion accordion-flush bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="accordionFlushExample">
        <div class={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
            <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="flush-headingOne">
            <button class={`accordion-button collapsed bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Gaming
            </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class={`accordion-body bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
                    <ul className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Valheim</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Genshin Impact</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Minecraft</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Pokimane</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Halo Infinite</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Call of Duty: Warzone</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Path of Exile</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Hollow Knight: Silksong</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Escape from Tarkov</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Watch Dogs: Legion</a></li>
                    </ul>

            </div>
            </div>
        </div>

        <div class={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
            <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="flush-headingTwo">
            <button class={`accordion-button collapsed bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Sports
            </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <ul className="text-decor">
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">NFL</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">NBA</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Megan Anderson</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Atlanta Hawks</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Los Angeles Lakers</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Boston Celtics</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Philadelphia 76ers</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Arsenal F.C.</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Premier League</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">UFC</a></li>
                    </ul>
            </div>
            </div>
        </div>


        <div class={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
            <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="flush-headingThree">
            <button class={`accordion-button collapsed bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Business & Economy
            </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <ul className="text-decor">
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Valheim</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Genshin Impact</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Minecraft</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Pokimane</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Halo Infinite</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Call of Duty: Warzone</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Path of Exile</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Hollow Knight: Silksong</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Escape from Tarkov</a></li>
                        <li className={`text-decor bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}><a src="#">Watch Dogs: Legion</a></li>
                    </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="flush-headingThree">
            <button class={`accordion-button collapsed bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                Crypto
            </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <ul className="text-decor">
                        <li><a src="#">Valheim</a></li>
                        <li><a src="#">Genshin Impact</a></li>
                        <li><a src="#">Minecraft</a></li>
                        <li><a src="#">Pokimane</a></li>
                        <li><a src="#">Halo Infinite</a></li>
                        <li><a src="#">Call of Duty: Warzone</a></li>
                        <li><a src="#">Path of Exile</a></li>
                        <li><a src="#">Hollow Knight: Silksong</a></li>
                        <li><a src="#">Escape from Tarkov</a></li>
                        <li><a src="#">Watch Dogs: Legion</a></li>
                    </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="flush-headingFive">
            <button class={`accordion-button collapsed bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                Television
            </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <ul className="text-decor">
                        <li><a src="#">Valheim</a></li>
                        <li><a src="#">Genshin Impact</a></li>
                        <li><a src="#">Minecraft</a></li>
                        <li><a src="#">Pokimane</a></li>
                        <li><a src="#">Halo Infinite</a></li>
                        <li><a src="#">Call of Duty: Warzone</a></li>
                        <li><a src="#">Path of Exile</a></li>
                        <li><a src="#">Hollow Knight: Silksong</a></li>
                        <li><a src="#">Escape from Tarkov</a></li>
                        <li><a src="#">Watch Dogs: Legion</a></li>
                    </ul>
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="flush-headingSix">
            <button class={`accordion-button collapsed bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                Celebrity
            </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <ul className="text-decor">
                        <li><a src="#">Valheim</a></li>
                        <li><a src="#">Genshin Impact</a></li>
                        <li><a src="#">Minecraft</a></li>
                        <li><a src="#">Pokimane</a></li>
                        <li><a src="#">Halo Infinite</a></li>
                        <li><a src="#">Call of Duty: Warzone</a></li>
                        <li><a src="#">Path of Exile</a></li>
                        <li><a src="#">Hollow Knight: Silksong</a></li>
                        <li><a src="#">Escape from Tarkov</a></li>
                        <li><a src="#">Watch Dogs: Legion</a></li>
                    </ul>
            </div>
            </div>
        </div>
        </div>
        </div>
</div>
    </>
  )
}
