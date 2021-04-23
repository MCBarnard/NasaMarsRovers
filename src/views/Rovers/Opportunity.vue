<template>
  <div class="rover-page">
    <h1>Opportunity</h1>
    <div class="body">
      <p>
        Launched from Earth on <span class="fact">2003-07-07</span> and arrived on <span class="fact">2004-01-25</span>,
        Opportunity has completed <span class="fact">5111</span> Sol's when it came to an end of it's mission on
        the <span class="fact">2018-06-11</span>. Opportunity had 6 Cameras and took a total
        of <span class="fact">198 439</span> photos.
      </p>
    </div>
    <light-box />
  </div>
</template>

<script>
import LightBox from "../../components/LightBox";

export default {
  name: "Opportunity",
  components: {
    LightBox,
  },
  beforeMount() {
    this.$emit("changeRover", "opportunity");
  },
};
</script>

<style scoped lang="scss">
@import "./src/scss/rover-page";
</style>
