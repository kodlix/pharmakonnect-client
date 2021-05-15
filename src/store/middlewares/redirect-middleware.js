import {createBrowserHistory} from 'history';
import { push } from "connected-react-router";
import agent from '../../agent';

const redirectMiddleware = ({ getState, dispatch }) => next => action => {
    if (action.type === '@@router/LOCATION_CHANGE') {
        const history = createBrowserHistory();
        const authUser = agent.Auth.current();

        // if ( authUser && !authUser?.isRegComplete &&  !history.location.pathname.includes("corporateregistration" || "individualregistration")) {
        //     if(authUser.accountType === 'corporate'){
        //         history.push('/corporateregistration')
        //         return true;
        //     }
        //     else {
        //         history.push('/individualregistration')
        //         return true;
        //     } //: dispatch(push('/individualregistration'));
        // }
    }
    

    next(action);
};

export default redirectMiddleware;