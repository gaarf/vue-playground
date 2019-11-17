<template>
  <div id="app">
    <main class="flex-center">
      <p v-for="k in range" v-bind:key="`a-${k}`">
        <input value="Scroll down a bit to find a button..." type="text" />
      </p>

      <button v-on:click="openModal">click me to open a modal</button>

      <p
        v-for="k in range"
        v-bind:key="`b-${k}`"
      >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, voluptates, possimus perspiciatis optio eaque itaque aut ad, vitae quisquam aspernatur voluptatem minima quibusdam explicabo dolores nihil. Quos porro esse accusantium.</p>

      <div ref="modal-content" hidden>
        <div>
          <ClockComponent />
          <p
            v-for="k in range"
            v-bind:key="`c-${k}`"
          >Lorem ipsum dolor sit amet consectetur...</p>
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
    // @ts-ignore
    modal: new gaarfLib.Modal('Modal title here'),
  }),
  methods: {
    openModal() {
      // @ts-ignore
      const content = this.$refs['modal-content'].firstElementChild;
      this.modal.show(content, { width: '80vw', height: '50vh' });
    },
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
