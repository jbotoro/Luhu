import React from "react";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {openModal2} from "../../../actions/modal_actions"

class DetailsButtons extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            detailhover: false,
        };
        this.handledetailMouseEnter = this.handledetailMouseEnter.bind(this);
        this.handledetailMouseLeave = this.handledetailMouseLeave.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    handledetailMouseEnter(){
        this.setState({detailhover: true});
    }

    handledetailMouseLeave(){
        this.setState({detailhover: false});
    }   
    onClickHandler(){
       
        let info = ["showpage", this.props.content.id];
        this.props.openModal2(info);
     
    }
 
    render(){

        let color = "white";
        if(this.props.color === "black"){
            color = "black";
        }

        
        let detailsbuttoncontainer = `detailsbuttoncontainer`;
        let materialclassName = `material-icons details ${color}`;
        let gotodetailsContainer = 'gotodetailsContainer';

        if(this.state.detailhover){
            detailsbuttoncontainer = "detailsbuttoncontainer2";
            materialclassName = `material-icons details2 ${color}`;
            gotodetailsContainer = 'gotodetailsContainer2';
        }

        return(
       
            <div className={detailsbuttoncontainer}>
                <div className={materialclassName} onClick={this.onClickHandler} onMouseEnter={this.handledetailMouseEnter} onMouseLeave={this.handledetailMouseLeave}>arrow_forward</div>
                <div className={gotodetailsContainer}>
                    <div className="textdetailscontainer">
                        <div className="gotodetails">GO TO DETAILS PAGE</div>
                    </div>
                    <div className="material-icons downarrowcontainer">
                        <div className="material-icons downarrow">arrow_drop_down</div>
                    </div>
                </div>
            </div>
             
        )

    }

}

const mdp = (dispatch) => {

    return ({
        openModal2: (modal) => dispatch(openModal2(modal))

    })


}

export default DetailsButtons = withRouter(connect(null, mdp)(DetailsButtons));