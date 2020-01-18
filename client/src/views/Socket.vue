<template>
  <button @click.prevent="handleClick">Click Me!</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Socket',
  sockets: {
    connect(): void {
      console.log('socket connected')
    },
    customEmit(): void {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    },
  },
  methods: {
    handleClick(): void {
      this.$socket.emit('save', JSON.stringify('Hello World'))
    },
  },
})
</script>
