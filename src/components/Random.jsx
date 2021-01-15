import React from 'react';
import { Wave } from 'react-animated-text';



const exampleStyle = {
    display: 'inline-block',
    fontFamily: 'Yusei Magic',
    
    padding: '4em 1em 1em 1em',
    width: '80%',
    fontSize: '1.9rem',
  }
const Wave1 = () => (
    <div style={exampleStyle}>
      
      <Wave text="Kirby & Pals" effect="stretch" effectChange={2.0} effectDuration={.65} speed={8.8} iterations={1}/>

    </div>
  )
export default Wave1;