<template>
  <div>
    <div v-if="cantLoadHome" class="home">
      <h1>Mars Rover Photos</h1>
      <img  :src="this.roverImage" alt="mars Rover Curiosity">
      <p>
        This site makes use of <a href="https://api.nasa.gov/">https://api.nasa.gov/mars-photos/</a> which was built and maintained
        by <a href="https://github.com/chrisccerami/mars-photo-api">Chris Cerami</a>.
        Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible
        queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken,
        counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example,
        will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can
        do that too.
      </p>
    </div>
    <div v-else class="content-home">
      <NewsFeed @cantLoadData="cantLoadHome = true" />
    </div>
  </div>
</template>

<script>
import NewsFeed from "./Hubble/NewsFeed";

export default {
  name: "Home",
  components: {
    NewsFeed,
  },
  data() {
    return {
      roverImage: "",
      roverImageArray: [
        "/assets/curiosity-banner.jpeg",
        "/assets/mars-rover-elderfox-docu-tour-banner.jpeg",
        "/assets/PIA22460_banner.jpg",
      ],
      cantLoadHome: false,
    };
  },
  beforeMount() {
    if (this.$store.getters.getProtocol !== "http://") {
      this.cantLoadHome = true;
    }
    const randomInt = Math.floor(Math.random() * this.roverImageArray.length);
    this.roverImage = this.roverImageArray[randomInt];
  },
};
</script>

<style scoped lang="scss">
@import "./src/scss/home";
</style>
