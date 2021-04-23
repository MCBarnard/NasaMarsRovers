<template>
  <div id="app">
    <Navbar />
    <router-view @changeRover="setNewRover" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { generalMixin } from "./mixins/generalMixin";

export default {
  components: {
    Navbar,
  },
  mixins: [ generalMixin ],
};
</script>

<style lang="scss">
#app {
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
}
</style>
