import { onBeforeUnmount, Ref, ref, watch} from 'vue';

export const useSearch = (delay: number): {search: Ref<string>, searchArray: Ref<string[]>} => {
		const search = ref<string>('');
		const searchArray = ref<string[]>([]);

		// to prevent DDoS spam to server
		let timer: any = null;
		const separateStringToArrayWithDelay = () => {
			clearTimeout(timer);
			timer = setTimeout(() => {
				//use Set to remove duplications
				const names = search.value.split(/\s+/);
				searchArray.value = [...new Set(names)];
			}, delay)
		}

		onBeforeUnmount(() => {
			clearTimeout(timer);
		})

		watch(search, separateStringToArrayWithDelay)

		return { search, searchArray };
}
