import React, { Component } from "react";
import { connect } from "react-redux";

import friends from "../friends";

class FriendDetails extends Component {
	constructor() {
		super();

		this.state = { something: 1 };
	}
	render() {
		console.log( this.props.activeFriend );
		return (
			<div>
				<h3>{ this.props.activeFriend.name }</h3>
				<p>{ this.props.activeFriend.age }</p>
				<img src={ this.props.activeFriend.picture } alt=""/>
			</div>
		);
	}
}

function mapStateToProps( state, ownProps ) {
	return {
		activeFriend: state.friends.find( friend => friend._id === ownProps.match.params.friendId )
	};
}

export default connect( mapStateToProps )( FriendDetails );
