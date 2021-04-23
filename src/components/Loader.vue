<template>
  <div class="loader">
    <lottie-animation
      path="assets/lotties/nasa-logo.json"
      :loop="true"
      :autoPlay="true"
      :speed="1"
      :width="256"
      :height="256"
    />
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  name: "Loader",
  components: {
    LottieAnimation,
  },
};
</script>

<style scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
