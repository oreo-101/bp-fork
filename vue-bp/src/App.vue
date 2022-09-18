<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <router-view /> -->
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  // text-align: center;
  // color: #2c3e50;
}
p {
  line-height: 1.5rem;
}
h1 {
  font-size: 4rem;
}
h2 {
  font-size: 2.5rem;
}
h3 {
  font-size: 1.8rem;
}

html,
body {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
</style>
