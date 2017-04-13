import friendsList from "../friends";

const initialState = {
	friends: friendsList
};

export default function friends( state = initialState, action ) {
	switch ( action.type ) {
		default: return state;
	}
}
