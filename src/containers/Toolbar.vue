<template>
  <div>
    <w-toolbar bg-color="blue-dark2" shadow no-border class="py1 mb2">
      <div class="title3 white">GitHub searcher</div>
      <w-icon
        xl
        color="white"
        class="ml3"
      >
        mdi mdi-github
      </w-icon>
      <div class="spacer"></div>
    </w-toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Toolbar',
});
</script>
