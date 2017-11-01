import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const POST_FRIEND = 'POST_FRIEND';

export const UPDATE_FRIEND = 'UPDATE_FRIEND';

export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => {
    const friendsEndpoint = 'http://localhost:5000/friends';
		const friends = axios.get(friendsEndpoint);

		return {
			type: GET_FRIENDS,
			payload: friends,
		};
};

export const postFriend = (friend) => {
    const friendsEndpoint = 'http://localhost:5000/new-friend';
		const friends = axios.post(friendsEndpoint, friend);
		return {
			type: POST_FRIEND,
			payload: friends,
		};
};

export const updateFriend = (index, friend) => {
    const friendsEndpoint = 'http://localhost:5000/update-friend';
		const friends = axios.put(friendsEndpoint, {data: {friend: friend, index: index}});
		return {
			type: UPDATE_FRIEND,
			payload: friends,
		};
};

export const deleteFriend = (index) => {
    const friendsEndpoint = 'http://localhost:5000/delete-friend';
		const friends = axios.delete(friendsEndpoint, {data: {index: index}});
		return {
			type: DELETE_FRIEND,
			payload: friends,
		};
};