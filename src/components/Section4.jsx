import React, {Component} from 'react';


class Section4 extends Component {
    render() {
      return (
        <div className="sec4" id="pricing">
            <div id="r-content">
                <h2>Pricing</h2>
                <div className="details">
                  <h4>Small dogs - less than 30lbs</h4>
                  <h4>Large dogs - 30lbs and up</h4>
                  <h4>* I do not do trimmings *</h4>
                </div>
            </div>
            <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Walk</th>
                <td>$18/30min $30/hr</td>
              </tr>
              <tr>
                <th scope="row">Full Grooming Services</th>
                <td>Small dogs: $50 Large dogs: $60</td>
              </tr>
              <tr>
                <th scope="row">Nail Trim</th>
                <td colSpan="2">$12</td>
              </tr>
              <tr>
                <th scope="row">Ear Cleaning</th>
                <td>$8</td>
              </tr>
              <tr>
                <th scope="row">Brushing</th>
                <td>Small dogs: $10 Large dogs: $20</td>
              </tr>
              <tr>
                <th scope="row">Bath (Shampoo, conditioner, & drying included)</th>
                <td>Small dogs: $20 Large dogs: $40</td>
              </tr>
            </tbody>
          </table>
          
              
        </div>
      )
    }
}
export default Section4;