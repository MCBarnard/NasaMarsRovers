<template>
  <div id="nav">
    <router-link to="/">
      {{ this.$store.getters.getProtocol === "http:" ? 'Hubble News' : "Home" }}
    </router-link>
    <router-link to="/curiosity">Curiosity</router-link>
    <router-link to="/opportunity">Opportunity</router-link>
    <router-link to="/spirit">Spirit</router-link>
    <div v-if="onRoverPage" class="search-container">
      <input
        placeholder="Set a custom Sol"
        type="number"
        v-model="custom_sol"
        id="custom_sol"
      />
      <button @click="customSol">Go</button>
    </div>
    <div
      v-if="onRoverPage"
      class="sol-container"
      :class="[!infoOpen && 'closed']"
    >
      <div class="sol-buttons" :class="[!infoOpen && 'closed']">
        <button class="sol-next-btn" @click="nextSol">Next Sol</button>
        <div @click="toggleInfo" class="icon">
          <md-icon>expand_less</md-icon>
        </div>
      </div>
      <div class="extra-info" :class="[!infoOpen && 'closed']">
        <h3>What is Sol?</h3>
        Sol is a NASA term for Solar day and is essentially used by the
        planetary scientists.
        <h4>You are viewing sol {{ sol }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { generalMixin } from "../mixins/generalMixin";

export default {
  name: "Navbar",
  mixins: [generalMixin],
  data() {
    return {
      infoOpen: true,
    };
  },
  computed: {
    onRoverPage() {
      const onCuriosity = this.$route.name === "Curiosity";
      const onSpirit = this.$route.name === "Spirit";
      const onOpportunity = this.$route.name === "Opportunity";
      return onCuriosity || onSpirit || onOpportunity;
    },
  },
  methods: {
    toggleInfo() {
      this.infoOpen = !this.infoOpen;
    },
  },
};
</script>

<style scoped>
.sol-next-btn {
  display: inline-block;
  padding: 0.7em 1.4em;
  outline: none !important;
  border-radius: 0.15em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  background-color: #0b3d91;
  box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
  text-align: center;
  position: relative;
  border: none;
  cursor: pointer;
}
.sol-next-btn:active {
  background-color: #0c48ad;
}
.icon {
  cursor: pointer;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 13px;
}
.extra-info {
  height: 100%;
  max-height: 130px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.extra-info.closed {
  max-height: 0;
}
.sol-container {
  position: absolute;
  right: 15px;
  top: 63px;
  background: #f1f1f1;
  padding: 10px;
  max-width: 250px;
  transition: max-width 0.3s ease-in-out;
  z-index: 1;
}
.sol-container.closed {
  max-width: 155px;
}
.sol-container h3 {
  margin: 10px 0;
}
.sol-container h4 {
  margin: 8px 0 0;
}

@media (max-width: 800px) {
  .sol-container {
    display: none;
  }
}
.sol-buttons {
  display: flex;
  justify-content: space-between;
}
.sol-buttons.closed .icon {
  transform: rotate(180deg);
}
#nav {
  overflow: hidden;
  background: linear-gradient(to bottom, #efefef, #e6e6e6);
}

#nav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

#nav .router-link-exact-active {
  color: #0b3d91;
}

#nav a:hover {
  background-color: #ddd;
  color: black;
}

#nav a.active {
  background-color: #2196f3;
  color: white;
}

#nav .search-container {
  float: right;
}

#nav input[type="number"] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

#nav .search-container button {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

#nav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  #nav .search-container {
    float: none;
  }
  #nav a,
  #nav input[type="number"],
  #nav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  #nav input[type="number"] {
    border: 1px solid #ccc;
  }
}
</style>
