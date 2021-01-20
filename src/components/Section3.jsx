import React, {Component} from 'react';
import paw from './print.png';


class Section3 extends Component {
    render() {
      return (
        <div className="sec3" id="reviews">
            <div id="r-content">
                <h2>Reviews<img src={paw} style={{height: '60px', width: '60px', padding: '15px',marginBottom:'10px'}}/></h2>
            </div>
            <div className="content">
                <p>best reviews will go here</p>
              </div>
          
              
        </div>
      )
    }
}
export default Section3;