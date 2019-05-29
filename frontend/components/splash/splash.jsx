import React from "react";
import LoginFormContainer from "./Form/login_form_container";
import SignupFormContainer from "./Form/signup_form_container";
import SplashNav from "./greeting/greeting_container";
import {AuthRoute} from '../../util/rout_util';
import { Link } from 'react-router-dom';

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scroll: false
        };
    }



    render(){


        return(
            <div className="splash">
                    <div className="splashform">
                    </div>
                    <div className="splash_image_container">
                        <img className="splashimage" src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2018-01/1600-lifestyle-background%402x.jpg" alt="Girl watching multiple tv sets stacked on eachother playing same thing." />
                        <img className="splashimage2" src="https://www.mailman.columbia.edu/sites/default/files/styles/hero_1500x632/public/jpg/tv2015-1500x632-1.jpg?itok=W6UEXwia" />
                    </div>  
                    <ul className="splashtext">
                        <li><h1>All Your TV In One Place</h1></li>
                        <li className="splashtextWatch">Watch thousands of shows and movies, with plans starting at $5.99/month</li>
                    <li className="splashnetworks"> HBQ, SHOWMIME, CIMENAX, and STARS availible as add-ons.</li>
                        <li><Link className="splashlink" to='/splash/signup'>START YOUR FREE TRIAL</Link></li>
                        <li className="splashfree">Free trial availbile for new and eligbile returning subscribers only.</li>
                    </ul>
                  
                
            </div>
        )

    }


}

export default Splash; 