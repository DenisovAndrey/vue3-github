import defaultAxios from 'axios';

export const axios = defaultAxios.create({
	baseURL: process.env.VUE_APP_API_PATH,
});
