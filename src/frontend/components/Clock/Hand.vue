<template>
  <div v-bind:class="classObject" v-bind:style="styleObject">
    <span />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['type', 'value'],
  computed: {
    classObject() {
      return {
        hand: true,
        [this.$props.type]: true,
      };
    },
    styleObject() {
      const v = this.value as Date;
      const n = v.getTime() - (v.getTimezoneOffset() * 60000);
      const t = (n / 1000) % 43200; // remainder of seconds per day
      let d;
      switch(this.type) {
        case 'hours':
          d = (t * 360) / 43200;
          break;
        case 'minutes':
          d = ((t % 3600) * 360) / 3600;
          break;
        default:
        case 'seconds':
          d = ((t % 60) * 360) / 60;
      }
      return {
        transform: `rotate(${d}deg)`,
      };
    },
  },
});
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}

div:after {
  content: '';
  position: absolute;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  left: 49%;
  width: 2%;
}

.hours:after {
  background-color: darkslategray;
  top: 25%;
  height: 25%;
}

.minutes:after {
  background-color: slategray;
  top: 8%;
  height: 42%;
}

.seconds:after {
  top: 2%;
  height: 56%;
  left: 49.5%;
  width: 1%;
  background-color: darkgoldenrod;
}

</style>
