import React, {Component} from 'react';
import ig from './finalig.png';
import fb from './fb.png';




class Section6 extends Component {
    render() {
      return (
        <div className="sec6" >
            <div id="socials">
                <h2>Follow Kirby & Pals:</h2>
                <div>
                  <a href="https://www.instagram.com/kirbyandpals/"><img src={ig} alt="ig" style={{height: '70px', width: '70px', marginTop: '10px', padding: '10px'}}/></a>
                  <img src={fb} alt="fb" style={{height: '70px', width: '70px', marginTop: '10px',padding: '10px'}}/>
                </div>
              
            </div>


          
              
        </div>
      )
    }
}
export default Section6;