import React, {Component} from 'react';
import paw from './print.png';

class Section2 extends Component {
    render(

    ) {
      return (
        <div className="sec2" id="about">
            <div id="r-content">
                <h2>About Kirby & Pals<img src={paw} style={{height: '60px', width: '60px', padding: '15px',marginBottom:'10px'}}/></h2>
                
            </div>
        </div>
      )
    }
}
export default Section2;
