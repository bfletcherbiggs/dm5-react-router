import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import PossibleFriends from "./components/PossibleFriends";
import FriendDetails from "./components/FriendDetails";

export default (
	<Switch>
		<Route
			component={ Landing }
			exact
			path="/"
		/>
		<Route
			component={ PossibleFriends }
			exact
			path="/possible-friends"
		/>
		<Route
			component={ FriendDetails }
			path="/possible-friends/:friendId"
		/>
	</Switch>
);
