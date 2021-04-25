<template>
  <div class="feed" :class="[!allImagesLoaded && 'no-overflow']">
    <div v-if="!loading" class="news-feed">
      <div class="hidden-over-images-overlay" v-show="!allImagesLoaded">
        <Loader />
        <span class="loading-text">Data received, images are now loading...</span>
        <span @click="skipWaiting = totalImages" class="loading-abort">Skip Waiting for images</span>
      </div>
      <div class="articles-container">
        <div v-for="(item, index) in articles" :key="index" class="article__item">
          <a class="go-to-ref" target="_blank" :href="item.url">
            Full Article
            <md-icon>launch</md-icon>
          </a>
          <h2>{{ item.name }}</h2>
          <img @load="loadImage" class="article__item--img" :src="'http:' + item.keystone_image_2x" alt="">
          <p>
            {{ item.abstract }}
          </p>
          <div class="footer">
            <div class="content">
              <i>Credits:  <span v-html="item.credits"></span></i>
            </div>
            <div class="published">
              <i>{{ normalDate(item.publication) }}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden-over-images-overlay outer" v-else>
      <Loader />
      <span class="loading-text">Fetching Data...</span>
    </div>
  </div>
</template>

<script>
import Loader from "../../components/Loader";

export default {
  name: "NewsFeed",
  components: {
    Loader,
  },
  data() {
    return {
      loading: true,
      totalImagesLoaded: 0,
      articles: [],
      skipWaiting: false,
    };
  },
  computed: {
    allImagesLoaded() {
      if (this.skipWaiting) {
        return true;
      }
      return this.totalImagesLoaded >= this.totalImages;
    },
    totalImages() {
      return this.articles.length;
    },
  },
  methods: {
    loadImage() {
      this.totalImagesLoaded++;
    },
    normalDate(val) {
      return val.slice(0, 10);
    },
  },
  async mounted() {
    const jsonp = require("jsonp");
    await jsonp(this.$store.getters.getHubbleNewsUrl, null, (err, data) => {
      if (err) {
        console.error(err.message);
        this.$emit("cantLoadData");
      } else {
        data.forEach((article) => {
          jsonp(this.$store.getters.getHubbleArticleUrl + article.news_id, null, (error, response) => {
            if (error) {
              console.error(error.message);
              this.$emit("cantLoadData");
            } else {
              this.articles.push(response);
            }
          });
        });
        console.log(this.articles);
        this.loading = false;
      }
    });
    // console.log(this.articles);
    // this.loading = false;
  },
};
</script>

<style scoped lang="scss">
@import "./src/scss/NewsFeed";
</style>
