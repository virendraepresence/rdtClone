import React from 'react'

export default function RightSideBar(props) {
  return (
    <>

{/* <div class={`accordion accordion-flush bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="accordionFlushExample">
        <div class={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
            <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="flush-headingOne">
            <button class={`accordion-button collapsed bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Gaming */}
 
    <div className={`container mt-50`}>
    <h5 className="text-mute"></h5>
    <h4 className="text-mute"></h4>
    <h3 className="text-mute"></h3>
            <div class="accordion" id="accordionExample">
                <div class={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
                    <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="headingOne">
                    <button class={`accordion-button bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Gaming
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong class={`text-${props.mode === 'light' ? 'dark':'light'}`}>Mincraft</strong></div>
                    </div>
                </div>
                <div class={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
                    <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="headingTwo">
                    <button class={`accordion-button collapsed bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Sports
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong className={`text-${props.mode === 'light' ? 'dark':'light'}`}>Premier League</strong> </div>
                    </div>
                </div>
                <div class={`accordion-item bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`}>
                    <h2 class={`accordion-header bg-${props.mode} text-${props.mode === 'light' ? 'dark':'light'}`} id="headingThree">
                    <button class={`accordion-button collapsed bg-${props.mode==='light' ? 'light':'secondary'} text-${props.mode === 'light' ? 'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Business
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong className={`text-${props.mode === 'light' ? 'dark':'light'}`}>Steel</strong> </div>
                    </div>
                </div>
                </div>  
      </div>
    </>
  )
}
