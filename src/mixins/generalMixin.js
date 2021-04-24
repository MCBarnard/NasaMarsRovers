"use strict";

import axios from "axios";

export const generalMixin = {
  data() {
    return {
      custom_sol: 1,
    };
  },
  computed: {
    sol() {
      return this.$store.getters.getSol;
    },
    endpoint() {
      return this.$store.getters.getEndpoint;
    },
    rover() {
      return this.$store.getters.getRover;
    },
    apiKey() {
      return this.$store.getters.getNasaKey;
    },
  },
  methods: {
    setNewRover(val) {
      this.$store.dispatch("triggerSetRover", val);
      this.getImages();
    },
    nextSol() {
      this.custom_sol = parseInt(this.sol) + 1;
      this.$store.dispatch("triggerSetSol", parseInt(this.sol) + 1);
      this.getImages();
    },
    customSol() {
      const val = typeof this.custom_sol !== "undefined" ? parseInt(this.custom_sol) : 0;
      this.$store.dispatch("triggerSetSol", val);
      this.custom_sol = val;
      this.getImages();
    },
    getImages() {
      this.$store.dispatch("triggerSetLoaded", false);
      axios
        .get(`${this.endpoint}/${this.rover}/photos?sol=${this.sol}&api_key=${this.apiKey}`)
        .then((response) => {
          this.$store.dispatch("triggerSetPictures", response.data.photos);
          this.$store.dispatch("triggerSetLoaded", true);
        });
    },
  },
};
