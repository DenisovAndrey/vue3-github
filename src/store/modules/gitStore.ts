import { Module } from 'vuex'
import { getUserWithReposByUserName } from '@/store/helpers/getProfilesHelper';

interface State {
	profiles: any[];
	profileNames: string[];
}


export const gitStore: Module<State, any> = {
	namespaced: true,
	state: {
		profiles: [],
		profileNames: []
	},

	getters: {
		getProfiles: (state: State) => state.profiles,
	},

	mutations: {
		DELETE_PROFILES_BY_NAMES: (state, payload) => {
			payload.forEach((name: string) => {
				const indexOfProfile: number = state.profileNames.indexOf(name)
				if (indexOfProfile !== -1) {
					state.profiles.splice(indexOfProfile, 1);
					state.profileNames.splice(indexOfProfile, 1);
				}
			})
		},
		ADD_PROFILE: (state, profile) => {
			state.profiles.push(profile);
			state.profileNames.push(profile.login.toLowerCase());
		},
	},

	actions: {
		SET_PROFILES: ({ commit, state, dispatch }, payload)  => {
			const newProfileNames: string[] = payload.filter((name: string) => !state.profileNames.includes(name.toLowerCase()));
			const profilesForRemoving: string[] = state.profileNames.filter((name: string) => !payload.map((n: string) => n.toLowerCase()).includes(name));

			commit('DELETE_PROFILES_BY_NAMES', profilesForRemoving)

			dispatch('ADD_PROFILES_BY_NAMES', newProfileNames)
		},
		ADD_PROFILES_BY_NAMES: ({ commit, state}, payload)  => {
			payload.forEach((username: string) => {
				getUserWithReposByUserName(username)
					.then(profile => {
						commit('ADD_PROFILE', profile)
					})
			})
		}
	}
};
