import { action, thunk } from "easy-peasy";

const defaultState = {
	name: "Vandana",
	course: "Learn",
};

export default {
	...defaultState,

	updateUserProfileInClientStore: action((state, payload) => ({
		...state,
		...payload,
	})),
};
