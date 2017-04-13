import React from "react";
import { connect } from "react-redux";

function PossibleFriends( props ) {
	const friendElements = props.friends.map( friend => (
		<li key={ friend._id }>
			<span onClick={ () => props.history.push( `/possible-friends/${ friend._id }` ) }>
				{ friend.name }
			</span>
		</li>
	) );
	return (
		<ul>
			{ friendElements }
		</ul>
	);
}

export default connect( state => state )( PossibleFriends );
