import React from "react";
import {openModal2, openModal} from "../../../actions/modal_actions";
import {connect} from "react-redux";


class SearchDisplay extends React.Component{
    constructor(props){
        super(props)
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        if(!this.props.content.show_id){
            let info = ["showpage", this.props.content.id];
            this.props.openModal2(info);
        }else{
            let info = ['show', this.props.content.id]
            this.props.openModal(info);
        }
    }


    render(){
        let type = "SERIES"
        if(this.props.content.show_id){
            type = `EPISODE`
        }


        let searchlength = this.props.search.length;
        let leftTitle = this.props.content.title.slice(0, searchlength);
        let rightTitle = this.props.content.title.slice(searchlength);
        return(
            <div onClick={this.onClickHandler} className="searchedShowContainer">
                 <div className="imageTitleContainer">
                    <div className="searchImageContainer">
                        <img className="searchImage" src={this.props.content.photoUrl} alt=""/>
                    </div>
                    
                    <div className="titleContainer">
                        <div className="leftTitle">{leftTitle}</div>
                        <div className="rightTitle">{rightTitle}</div>
                    </div>
                </div>
                <div className="searchSeries">
                    {type}
                </div>
            
            </div>
        ) 
    }
}



const mdp = (dispatch) => {

    return({
        openModal: (modal) => dispatch(openModal(modal)),
        openModal2: (modal) => dispatch(openModal2(modal))
    })

}

export default connect(null, mdp)(SearchDisplay);