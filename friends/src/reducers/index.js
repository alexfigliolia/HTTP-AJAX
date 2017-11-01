import { combineReducers } from 'redux';
import { GET_FRIENDS, POST_FRIEND, UPDATE_FRIEND, DELETE_FRIEND } from '../actions';

const friendsReducer = (friends = [], action) => {
		console.log(action);
    switch(action.type) {
        case GET_FRIENDS:
				    return action.payload.data;
				case POST_FRIEND:
				    return action.payload.data;
				case UPDATE_FRIEND:
				    return action.payload.data;
				case DELETE_FRIEND:
				    return action.payload.data;
        default:
            return friends;
    }
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;