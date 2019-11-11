<template>
  <div id="app">
    <main class="flex-center">
      <ClockComponent />
    </main>
  </div>
</template>

<script lang="ts">
import ClockComponent from './Clock.vue';

export default {
  components: {
    ClockComponent,
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
  color: #292929;
  font-family: 'Franklin Gothic Medium', Helvetica, sans-serif;
  margin: 0;
}

#app {
  max-width: 1000px;
  margin: auto;
}

main {
  height: 100vh;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
