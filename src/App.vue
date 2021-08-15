<template>
  <w-app>
    <Toolbar />
    <SearchUsers />
  </w-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toolbar from '@/containers/Toolbar.vue';
import SearchUsers from '@/containers/SearchUsers.vue';

export default defineComponent({
  name: 'App',
  components: {
    Toolbar,
    SearchUsers,
  }
});
</script>

<style lang="scss">
#app {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>
