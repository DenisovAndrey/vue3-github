<template>
  <div>
    <h3 class="mb2 mt4 ml5 blue">Search users from GitHub by names</h3>
    <SearchField />
    <UsersTabs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchField from '@/components/SearchField.vue';
import UsersTabs from '@/containers/UsersTabs.vue';

export default defineComponent({
  name: 'SearchUsers',
  components: {
    SearchField,
    UsersTabs
  }
});
</script>
