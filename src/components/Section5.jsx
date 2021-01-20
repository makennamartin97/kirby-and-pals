import React, {Component} from 'react';


class Section5 extends Component {
    render() {
        
      return (
        <div className="sec5" id="contact">
            <div id="r-content">
                <h2>Message us here to book a walk or ask a question:</h2>
            </div>
            <form >
                <div className="">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control input" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control input" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control input" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control input" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
          
              
        </div>
      )
    }
}
export default Section5;