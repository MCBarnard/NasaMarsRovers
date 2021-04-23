<template>
  <div>
    <div v-if="loaded && totalImages !== 0">
      <div class="wrapper" :class="[!allImagesLoaded && 'show-above-images']">
        <div class="gallery">
          <div class="show-above-images" v-if="!allImagesLoaded">
            <Loader />
          </div>
          <div v-for="(item, index) in images" :id="index + '_image_id'"  :key="index" class="image">
            <div class="image-container">
              <img @load="imageLoaded" @click="toggleLightbox(index)" v-if="typeof item !== 'undefined'" :src="item.img_src" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="preview-box__wrapper" v-if="typeof images[0] !== 'undefined'" :class="[showLightbox && 'show']">
        <div class="preview-box">
          <div class="details">
            <div class="title">
              <div>
                Image <span class="current-img">{{ current + 1 }}</span> of
                <span class="total-img">{{ totalImages }}</span>
              </div>
              <div @click="toggleLightbox(current)" class="close-click">
                <md-icon class="close-btn">close</md-icon>
              </div>
            </div>
            <div class="img-box">
              <div
                v-if="current !== 0"
                @click="togglePreviewLeft"
                class="slide prev"
              >
                <md-icon>arrow_back_ios</md-icon>
              </div>
              <div
                v-if="current !== totalImages - 1"
                @click="togglePreviewRight"
                class="slide next"
              >
                <md-icon>arrow_forward_ios</md-icon>
              </div>
              <img :class="[showLightBoxImageData && 'hide']" :src="images[current].img_src" alt="" />
              <div :class="[showLightBoxImageData && 'hide']" @click="toggleData" class="info-button">
                <md-icon>data_exploration</md-icon>
              </div>
              <div class="img-data" :class="[!showLightBoxImageData && 'hide']" @click="toggleData">
                <pre>{{ images[current] }}</pre>
                <div class="cancel-button">
                  <md-icon>image</md-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import Loader from "./Loader";
export default {
  name: "LightBox",
  components: {
    Loader,
  },
  data() {
    return {
      current: 0,
      showLightbox: false,
      totalLoaded: 0,
      showLightBoxImageData: false,
    };
  },
  computed: {
    allImagesLoaded() {
      return this.totalLoaded === this.totalImages;
    },
    totalImages() {
      return this.images.length;
    },
    loaded() {
      return this.$store.getters.getLoaded;
    },
    images() {
      return this.$store.getters.getPictures;
    },
  },
  methods: {
    toggleData(){
      this.showLightBoxImageData = !this.showLightBoxImageData;
    },
    imageLoaded() {
      this.totalLoaded++;
    },
    toggleLightbox(index) {
      this.current = index;
      this.showLightbox = !this.showLightbox;
    },
    togglePreviewRight() {
      if (this.totalImages !== this.current - 1) {
        this.current++;
      }
    },
    togglePreviewLeft() {
      if (this.totalImages !== 0) {
        this.current--;
      }
    },
  },
  watch: {
    // Watch loaded for a change because loaded will signal a network call being made
    loaded: function () {
      if (this.totalImages === this.totalLoaded) {
        this.totalLoaded = 0;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.img-data {
  width: 80%;
  margin: auto;

  pre {
    max-width: 100%;
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
  }
  .cancel-button {
    position: absolute;
    right: 55px;
    top: 12px;
    cursor: pointer;

    i {
      color: #229c04!important;
    }
  }
}
.img-data.hide {
  display: none;
}

.info-button {
  position: absolute;
  right: 55px;
  top: 12px;
  cursor: pointer;
}
.info-button.hide {
  display: none;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: red;
  z-index: -1;
}
.wrapper {
  max-width: 1100px;
  margin: auto;
  max-height: 620px;
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
}

.wrapper.show-above-images {
  overflow: hidden;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  .image {
    width: calc(100% / 3);
    padding: 7px;
    cursor: pointer;

    img {
      width: 100%;
      vertical-align: middle;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }

    .image-container {
      display: flex;
      width: 100%;
    }
  }
}

.preview-box {
  z-index: 10;
  position: fixed;
  width: 100%;
  max-height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 0 5px 5px 5px;
  opacity: 0;
  pointer-events: none;
  border-radius: 3px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  max-width: 800px;

  .details {
    display: flex;
    justify-content: space-between;
    padding: 12px 15px 12px 10px;
    flex-direction: column;
    max-height: 800px;

    i {
      color: #007bff;
    }

    .title {
      display: flex;
      font-size: 18px;
      font-weight: 400;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      .close-btn {
        margin: 0;
        font-weight: 700;
        cursor: pointer;
      }

      span {
        margin: 0 5px;
      }

      span.current-img {
        font-weight: 500;
      }
    }
  }

  .img-box {
    display: flex;
    width: 100%;
    max-height: 850px;
    overflow-y: scroll;

    img {
      object-fit: contain;
      border-radius: 0 0 3px 3px;
      width: 100%;
      margin: auto;
    }

    img.hide {
      display: none;
    }

    .slide {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 30px;
      cursor: pointer;
      width: 60px;
      height: 50px;
      line-height: 50px;
      text-align: center;

      i {
        font-size: 30px;
        color: #ffffff;
        line-height: 50px;
        font-weight: 700;
        text-shadow: 0 0 5px black;
      }
    }

    .slide.prev {
      left: 10px;
    }

    .slide.next {
      right: 10px;
    }
  }
}

.preview-box__wrapper {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: aliceblue;
  top: 0;
  left: 0;
  z-index: 1;
}
.preview-box__wrapper{
  opacity: 0;
  pointer-events: none;
  background: rgba(23, 31, 33, 0.74);
}
.preview-box__wrapper.show,
.preview-box__wrapper.show .preview-box,{
  opacity: 1;
  pointer-events: all;
}

.show-above-images {
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  background: #fafafa;
  height: 700px;
}

@media (max-width: 1000px) {
  .gallery {
    .image {
      width: calc(100% / 2);
    }
  }
}

@media (max-width: 600px) {
  .gallery {
    .image {
      padding: 4px;
      width: 100%;
    }
  }
}
</style>
