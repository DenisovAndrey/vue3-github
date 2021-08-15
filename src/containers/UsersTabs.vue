<template>
  <div>
    <w-tabs
      ref="tabs"
      :items="profiles"
    >
      <template #item-title="{ item }">
        {{ item.login }}
      </template>

      <template #item-content="{ item }">
        <Profile :profile="item" />
      </template>
    </w-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore} from 'vuex';
import Profile from '@/components/Profile.vue';

export default defineComponent({
  name: 'UsersTabs',
  setup() {
    const store = useStore();
    const profiles = store.getters["gitStore/getProfiles"];
    return { profiles }
  },
  components: {
    Profile
  }

});
</script>
