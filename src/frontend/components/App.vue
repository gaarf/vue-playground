<template>
  <div id="app">
    <main class="flex-center">
      <h1>Modal demo and test page</h1>

      <p v-for="k in range" v-bind:key="`a-${k}`">
        <input value="Scroll down a bit..." type="text" />
      </p>

      <p>
        <button v-on:click="openModal">click me to open a modal</button>
      </p>

      <div v-for="k in range" v-bind:key="`b-${k}`">
        <h6>how to use?</h6>
        include <a href="./modal.js">modal.js</a> and then...
        <pre>
const modal = new gaarfLib.Modal('some title');
modal.show(someElement, { width: '80vw' });
</pre>
      </div>

      <div ref="modal-content" hidden aria-hidden>
        <div>
          <ClockComponent />
          <p v-for="k in range" v-bind:key="`c-${k}`">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veniam saepe esse placeat in autem, ratione optio nihil inventore iusto, neque nisi eius quis odio voluptatem et aspernatur id rerum.
            <input
              value="test"
              type="text"
            />
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ClockComponent from './Clock/Clock.vue';

export default Vue.extend({
  components: { ClockComponent },
  data: () => ({
    range: [...Array(10).keys()],
    modal: new globalThis.gaarfLib.Modal('Hello World'),
  }),
  methods: {
    openModal() {
      // @ts-ignore
      const content = this.$refs['modal-content'].firstElementChild;

      this.modal.show(content, { width: '500px' });
    },
  },
  beforeDestroy() {
    this.modal.destroy();
  },
});
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

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<style scoped>
button {
  font-size: x-large;
}
</style>