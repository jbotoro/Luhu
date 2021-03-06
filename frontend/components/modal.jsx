import React from 'react';
import { connect } from "react-redux";
import LoginFormContainer from './splash/Form/login_form_container';
import SignUpFormContainer from './splash/Form/signup_form_container';
import {closeModal, openModal} from "../actions/modal_actions";
import Videoplayer from './VideoPlayer/video_player_container';




class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        };
    }

 

    componentDidUpdate(){

      
        if (this.state.mounted === false && this.props.modal !== null) {
            setTimeout(() => {
                this.setState({ mounted: true });
            }, 200);
        }

        if(this.props.modal === null && this.state.mounted !== false){
            this.setState({mounted: false})
        }
    }

    render() {
        let component = null;

        let modalbackground = "modal-background";

        if(Array.isArray(this.props.modal) && this.props.modal[0] === "show"){
            return <Videoplayer content={this.props.modal} />
        }else{
            component;
            switch(this.props.modal) {
                case 'login':
                    component = <LoginFormContainer />
                    break
            case 'signup':
                    component = <SignUpFormContainer />
                    break
                default: 
              
                return null;
            }
         }


         let modalchild = "modal-child";
         if(this.state.mounted === true){
             modalchild = "modal-child2";
         }


    
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className={modalchild} onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        )
    }

}



const mapStateToProps = (state, ownProps) => {
    return ({
        modal: state.ui.modal
    });
};

const mapDispatchToProps = (dispatch) =>{

    return({
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    });

};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);

