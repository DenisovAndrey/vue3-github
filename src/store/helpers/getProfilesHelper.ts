import { gitService } from '@/services/gitService';

export const getUserWithReposByUserName = (username: string): Promise<object> => {
	return gitService.getUserByName(username)
		.then(({data: user}) => user)
		.then((user) => {
			return gitService.getUserReposByUserName(username)
				.then(({data: repos}) => {
					user.repos = repos;
					return user;
				});
		})
}
