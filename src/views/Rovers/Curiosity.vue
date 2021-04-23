<template>
  <div class="rover-page">
    <h1>Curiosity</h1>
    <div class="body">
      <p>
        Launched from Earth on <span class="fact">2011-11-26</span> and arrived on <span class="fact">2012-08-06</span>,
        Curiosity is actively on a mission an has already don <span class="fact">3 096</span> Sols. Curiosity has 7 Cameras and has taken a total
        of <span class="fact">48 8849</span> photos already.
      </p>
    </div>
    <light-box />
  </div>
</template>

<script>
import LightBox from "../../components/LightBox";

export default {
  name: "Curiosity",
  components: {
    LightBox,
  },
  beforeMount() {
    this.$emit("changeRover", "curiosity");
  },
};
</script>

<style scoped lang="scss">
@import "./src/scss/rover-page";
</style>
