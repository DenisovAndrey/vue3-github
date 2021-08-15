<template>
  <div>
    <w-form
        class="pa5"
        allow-submit>
      <w-input
        label="Name1 Name2 Name3"
        static-label
        v-model.trim="search">
      </w-input>
    </w-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useSearch } from '@/components/hooks/useSearch';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SearchField',
  setup() {
    const store = useStore();

    const {search, searchArray: usernames} = useSearch(500);

    watch(usernames, (value) => {
      store.dispatch('gitStore/SET_PROFILES', value)
    })

    return { search, usernames };
  }
});
</script>
