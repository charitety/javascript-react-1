import React from 'react'
// import { useState } from 'react'

export const Button = ({onClicked}) => {


return(
<div> 
    
    <button onClick={() => { onClicked('Button') }}>Button </button>
    
    </div>
    )
}
