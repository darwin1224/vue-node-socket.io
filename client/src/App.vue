<template>
  <socket></socket>
</template>

<script lang="ts">
import Vue from 'vue'
import Socket from '@/views/Socket.vue'

export default Vue.extend({
  name: 'App',
  components: { Socket },
})
</script>
