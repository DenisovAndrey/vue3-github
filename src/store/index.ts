import { createStore, Store } from 'vuex';
import { gitStore } from '@/store/modules/gitStore';

export const store: Store<any> = createStore({
	modules: {
		gitStore
	}
})
