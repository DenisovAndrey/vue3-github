import { axios } from '@/services/index';

export const gitService = {

	getUserByName: (username: string) => {
		return axios.get(`/users/${username}`)
	},

	getUserReposByUserName: (username: string) => {
		return axios.get(`/users/${username}/repos`)
	},

}
