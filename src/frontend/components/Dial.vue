<template>
  <ul>
    <li
      v-for="{minute, hour, style, classnames} in markers"
      v-bind:key="minute"
      v-bind:style="style"
      v-bind:class="classnames"
    >
      <span>
        <em>{{ hour }}</em>
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    markers: [...Array(60).keys()].map(minute => {
      const hour = minute ? Math.floor((minute * 12) / 60) : 12;
      return {
        minute,
        hour,
        style: {
          transform: `rotate(${minute * 6}deg)`,
        },
        classnames: `marker marker${minute}`,
      };
    }),
  }),
});
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: calc(var(--clock-size) / 60);
  color: #333;
}
li.marker {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.marker > span {
  background-color: #ccc;
  height: 5%;
  width: 1%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.marker em {
  font-style: normal;
  font-weight: 600;
  visibility: hidden;
}

.marker0 > span,
.marker5 > span,
.marker10 > span,
.marker15 > span,
.marker20 > span,
.marker25 > span,
.marker30 > span,
.marker35 > span,
.marker40 > span,
.marker45 > span,
.marker50 > span,
.marker55 > span {
  font-size: 444%;
  width: 2%;
  height: 10%;
}

.marker0 > span {
  background-color: goldenrod;
  height: 13%;
  width: 10%;
  border-bottom-right-radius: 33%;
  border-bottom-left-radius: 33%;
}

.marker0 em {
  visibility: visible;
}
.marker5 em {
  visibility: visible;
  transform: rotate(-30deg);
}
.marker10 em {
  visibility: visible;
  transform: rotate(-60deg);
}
.marker15 em {
  visibility: visible;
  transform: rotate(-90deg);
}
.marker20 em {
  visibility: visible;
  transform: rotate(-120deg);
}
.marker25 em {
  visibility: visible;
  transform: rotate(-150deg);
}
.marker30 em {
  visibility: visible;
  transform: rotate(180deg);
}
.marker35 em {
  visibility: visible;
  transform: rotate(150deg);
}
.marker40 em {
  visibility: visible;
  transform: rotate(120deg);
}
.marker45 em {
  visibility: visible;
  transform: rotate(90deg);
}
.marker50 em {
  visibility: visible;
  transform: rotate(60deg);
}
.marker55 em {
  visibility: visible;
  transform: rotate(30deg);
}
</style>