import React from 'react'

function Offer({back,final}) {
  return (
    <div>
        <button onClick={back}>take me back</button>
        <button onClick={final}>accept</button>
    </div>
  )
}

export default Offer