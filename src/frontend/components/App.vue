<template>
  <div id="app">
    <main class="flex-center">

      <p v-for="k in range" v-bind:key="`a-${k}`">
        <input value="Scroll down a bit to find a button..." type="text" />
      </p>

      <button v-on:click="openModal">click moi to open le modal</button>

      <p v-for="k in range" v-bind:key="`b-${k}`">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, voluptates, possimus perspiciatis optio eaque itaque aut ad, vitae quisquam aspernatur voluptatem minima quibusdam explicabo dolores nihil. Quos porro esse accusantium.
      </p>

      <div id="modal-content" hidden>
        <ClockComponent />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import ClockComponent from './Clock/Clock.vue';
import { Modal } from '../modal/modal';

export default {
  components: {
    ClockComponent,
  },
  data: () => ({
      range: [...Array(10).keys()],
      modal: new Modal()
    }),
  methods: {
    openModal: function () {
      this.modal.show(
        document.getElementById('modal-content')
      );
    }
  }
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

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
