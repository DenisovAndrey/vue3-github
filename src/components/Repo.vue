<template>
  <div>
    <w-card :title="repo.name" title-class="blue-light5--bg">
      <w-flex wrap class="">
        <div class="xs3 pa1">
          Name:
        </div>
        <div class="xs9 pa1">
          {{repo.name}}
        </div>

        <div class="xs3 pa1">
          Created at:
        </div>
        <div class="xs9 pa1">
          {{repo.created_at.substring(0, 10)}}
        </div>

        <div class="xs3 pa1">
          Description:
        </div>
        <div class="xs9 pa1">
          {{repo.description ?? '-'}}
        </div>

        <div class="xs12 text-center pa1">
          <a :href="repo.html_url">Link</a>
        </div>
      </w-flex>
    </w-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    repo: {
      type: Object,
      required: true,
    }
  },
  name: 'Repo',
});
</script>
