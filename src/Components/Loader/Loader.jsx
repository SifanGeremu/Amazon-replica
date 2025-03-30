import React from 'react'
import {PacmanLoader} from 'react-spinners'
function Loadder() {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'50vh'
    }}>
      <PacmanLoader />
    </div>
  );
}

export default Loadder