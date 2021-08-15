<template>
  <div>
    <w-card :title="profile.login" title-class="blue-light5--bg">
      <w-flex wrap>
        <div class="xs1 pa1">
          <w-image lazy width="100" height="100" :src="profile.avatar_url"></w-image>
        </div>
        <div class="xs11 pa1">
          <w-flex wrap class="">
            <div class="xs3 pa1">
              Login:
            </div>
            <div class="xs9 pa1">
              {{profile.login}}
            </div>

            <div class="xs3 pa1">
              Followers:
            </div>
            <div class="xs9 pa1">
              {{profile.followers}}
            </div>

            <div class="xs3 pa1">
              Following:
            </div>
            <div class="xs9 pa1">
              {{profile.following}}
            </div>

            <div class="xs3 pa1">
              Twitter username:
            </div>

            <div class="xs9 pa1">
              {{profile.twitter_username ?? '-'}}
            </div>
            <div class="xs12 pa1">
              <a :href="profile.html_url">{{profile.html_url}}</a>
            </div>
          </w-flex>
        </div>
      </w-flex>
      <h3 class="text-center mt5 mb5 blue-dark1">Repositories</h3>
      <w-flex wrap v-if="profile.repos.length > 0">
        <div v-for="repo in profile.repos" class="mb3 xs12 lg6 xl4 pa1" :key="repo.id">
          <Repo :repo="repo" />
        </div>
      </w-flex>
      <div class="text-center mt2" v-else>Empty</div>

    </w-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Repo from '@/components/Repo.vue';

export default defineComponent({
  props: {
    profile: {
      type: Object,
      required: true,
    }
  },
  name: 'UsersTabs',
  components: {
    Repo
  }
});
</script>
