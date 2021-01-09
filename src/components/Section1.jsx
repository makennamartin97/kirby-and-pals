import React, {Component} from 'react';
import Typical from 'react-typical';



class Section1 extends Component {
    render() {
      return (
        <div className="sec1" >
          <div className="back">
            <div className="name animated fadeIn">
              <Typical
              steps={['Kirby & Pals', 3500]}
              loop={Infinity}
              wrapper="h2"
              />
              <Typical
              steps={[1800, 'Dog Walking with Rachel', 800]}
              loop={Infinity}
              wrapper="h4"
              />
            </div>
          </div>
            
              
        </div>
      )
    }
}
export default Section1;