import React, {Component} from 'react';
import paw from './print.png';
import dog from './dog1.jpg';

class Section2 extends Component {
    render(

    ) {
      return (
        <div className="sec2" id="about">
            <div id="r-content">
                <h2>About Kirby & Pals<img src={paw} style={{height: '60px', width: '60px', padding: '15px',marginBottom:'10px'}}/></h2>
                
                
            </div>
            <div className="row nopadding">
              <div className="col-sm-12 col-md-6 ">
                <img src={dog} alt="Dog" id="dog" />
              </div>
              <div className="col-sm-12 col-md-6 content">
                <p>words about rachel and her company will go here</p>
              </div>
            </div>
            
        </div>
      )
    }
}
export default Section2;
