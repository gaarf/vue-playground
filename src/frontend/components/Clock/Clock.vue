<template>
  <div class="flex-center">
    <div id="clock">
      <DialComponent />
      <HandComponent v-bind:value="date" type="hours" />
      <HandComponent v-bind:value="date" type="minutes" />
      <HandComponent v-bind:value="date" type="seconds" />
    </div>
    <p>
      <code>{{ date }}</code>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DialComponent from './Dial.vue';
import HandComponent from './Hand.vue';

export default Vue.extend({
  components: { HandComponent, DialComponent },
  data: () => ({
    interval: null,
    date: null,
  }),
  beforeMount() {
    this.tick();
    this.interval = setInterval(this.tick.bind(this), 1000 / 8);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    tick() {
      this.date = new Date();
    },
  },
});
</script>

<style scoped>
#clock {
  --clock-size: 400px;
  width: var(--clock-size);
  height: var(--clock-size);
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color:cornsilk;
  position: relative;
  overflow: hidden;
}

#clock:after {
  content: '';
  position: absolute;
  background-color: lightsteelblue;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
}

#clock > .hand {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: center;
}
</style>
