import React from "react";

import {openModal} from '../../../actions/modal_actions';
import {connect} from "react-redux";



class SmallDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wholehover: false,
            photohover: false
        };
        this.wholeMouseEnterHandler = this.wholeMouseEnterHandler.bind(this);
        this.wholeMouseLeaveHandler = this.wholeMouseLeaveHandler.bind(this);
        this.photoMouseEnterHandler = this.photoMouseEnterHandler.bind(this);
        this.photoMouseLeaveHandler = this.photoMouseLeaveHandler.bind(this);
        this.playvideo = this.playvideo.bind(this);
    }


    playvideo(){

        if (this.props.content.show_id) {
            let info = ["show", this.props.content.id];
            this.props.openModal(info);
        } else if (this.props.content.episode_ids) {
            let info = ["show", this.props.content.episode_ids[0]];
            this.props.openModal(info);
        } else {
            let info = [movie, this.props.content.id];
            this.props.history.push(info);
        }
    }

    wholeMouseEnterHandler(){
        this.setState({wholehover: true});
    }

    wholeMouseLeaveHandler(){
        this.setState({ wholehover: false });
    }

    photoMouseEnterHandler(){
        this.setState({photohover: true});
    }

    photoMouseLeaveHandler(){
        this.setState({ photohover: false });
    }



    render(){

        let smallDisplayContainer = "SmallDisplayContainer";
        let smalldisplayexpandable = "smalldisplayexpandable";
        let episodeDescription = "episodeDescription";
        let materialicon = "material-icons ds-1";
        let smalldisplayplaybuttoncontainer = "smalldisplayplaybuttoncontainer";

        if(this.state.wholehover){
            smallDisplayContainer = "SmallDisplayContainer2";
            smalldisplayexpandable = "smalldisplayexpandable2";
            episodeDescription = "episodeDescription2";
            smalldisplayplaybuttoncontainer = "smalldisplayplaybuttoncontainer2";
            materialicon = "material-icons ds-2";
        }

        if(this.state.photohover){
            materialicon = "material-icons ds-3";
        }
    

        return(
            <div className='smalldisplayanchor'>
                <div onMouseEnter={this.wholeMouseEnterHandler} onMouseLeave={this.wholeMouseLeaveHandler} className={smallDisplayContainer}>
                    <div className={smalldisplayexpandable}>
                        <div onClick={this.playvideo} onMouseEnter={this.photoMouseEnterHandler} onMouseLeave={this.photoMouseLeaveHandler} className="smalldisplayimagecontainer">
                            <img className="smalldisplayimage" src={this.props.content.photoUrl} alt=""/>
                        </div>
                        <div onClick={this.playvideo} className={smalldisplayplaybuttoncontainer}>
                            <div>
                                <i className={materialicon}>play_arrow</i>
                            </div>
                        </div>
                        <div className="smalldisplaycontent">
                            <ul className="smalldisplayUL">
                                <li className="episodeNumber">EPISODE {this.props.content.episode_number}</li>
                                <li className="episodeTitle">{this.props.content.title}</li>
                                <li className={episodeDescription}>{this.props.content.description}</li>
                                
                            </ul>

                        </div>
                    </div>
                </div>
            </div>


        )



    }




}


const mdp = (dispatch) => {

    return ({
        openModal: (modal) => dispatch(openModal(modal))

    })


}


export default (connect(null,mdp)(SmallDisplay));