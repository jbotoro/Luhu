import ShowNavBar from './show_nav_bar';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    let showpage = false;
     if (ownProps.match.path === "/"){
        showpage = true
    }
    let userId = state.session.id;
    let curentUser = state.entities.users[userId] || {} ; 
    return ({
        currentUser: curentUser,
        showpage: showpage
    });

};

const mapDispatchToProps = (dispatch) => {

    return ({
        logoutUser: () => dispatch(logoutUser()),
        openModal: (model) => dispatch(openModal(model))
    });

};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNavBar);