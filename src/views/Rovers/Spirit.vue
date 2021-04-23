<template>
  <div class="rover-page">
    <h1>Spirit</h1>
    <div class="body">
      <p>
        Launched from Earth on <span class="fact">2003-06-10</span> and arrived on <span class="fact">2004-01-04</span>,
        Spirit has completed <span class="fact">2 208</span> Sol's when it came to an end of it's mission on
        the <span class="fact">2010-03-21</span>. Spirit had 6 Cameras and took a whopping total of <span class="fact">
        124 550</span> photos.
      </p>
    </div>
    <light-box />
  </div>
</template>

<script>
import LightBox from "../../components/LightBox";

export default {
  name: "Spirit",
  components: {
    LightBox,
  },
  beforeMount() {
    this.$emit("changeRover", "spirit");
  },
};
</script>

<style scoped lang="scss">
@import "./src/scss/rover-page";
</style>
