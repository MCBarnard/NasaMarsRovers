import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nasa_key: "cgQflXxL70YMY4eaYdE1ZK6udOvikEqDYnkF41kK",
    // nasa_key: "DEMO_KEY",
    nasa_rover: "",
    // https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=cgQflXxL70YMY4eaYdE1ZK6udOvikEqDYnkF41kK
    nasa_endpoint: "https://api.nasa.gov/mars-photos/api/v1/rovers",
    sol: 1,
    pictures: [
      {
        "id":4477,
        "sol":1,
        "camera":{
          "id":22,
          "name":"MAST",
          "rover_id":5,
          "full_name":"Mast Camera"
        },
        "img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mcam/0001ML0000001000I1_DXXX.jpg",
        "earth_date":"2012-08-07",
        "rover":{
          "id":5,
          "name":"Curiosity",
          "landing_date":"2012-08-06",
          "launch_date":"2011-11-26",
          "status":"active"
        }
        },{"id":509233,"sol":1,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mcam/0001MR0000001000C0_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":509234,"sol":1,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mcam/0001ML0000001000C0_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":509235,"sol":1,"camera":{"id":22,"name":"MAST","rover_id":5,"full_name":"Mast Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mcam/0001MR0000001000I1_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":3778,"sol":1,"camera":{"id":24,"name":"MAHLI","rover_id":5,"full_name":"Mars Hand Lens Imager"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mhli/0001MH0000001000I3_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":86520,"sol":1,"camera":{"id":24,"name":"MAHLI","rover_id":5,"full_name":"Mars Hand Lens Imager"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mhli/0001MH0000002000C0_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":86521,"sol":1,"camera":{"id":24,"name":"MAHLI","rover_id":5,"full_name":"Mars Hand Lens Imager"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mhli/0001MH0000001000E1_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":86522,"sol":1,"camera":{"id":24,"name":"MAHLI","rover_id":5,"full_name":"Mars Hand Lens Imager"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mhli/0001MH0000001000E2_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":86523,"sol":1,"camera":{"id":24,"name":"MAHLI","rover_id":5,"full_name":"Mars Hand Lens Imager"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mhli/0001MH0000002000I1_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":86524,"sol":1,"camera":{"id":24,"name":"MAHLI","rover_id":5,"full_name":"Mars Hand Lens Imager"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mhli/0001MH0000002000I2_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":86525,"sol":1,"camera":{"id":24,"name":"MAHLI","rover_id":5,"full_name":"Mars Hand Lens Imager"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mhli/0001MH0000001000I1_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":86526,"sol":1,"camera":{"id":24,"name":"MAHLI","rover_id":5,"full_name":"Mars Hand Lens Imager"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/msss/00001/mhli/0001MH0000001000I2_DXXX.jpg","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":2097,"sol":1,"camera":{"id":26,"name":"NAVCAM","rover_id":5,"full_name":"Navigation Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00001/opgs/edr/ncam/NLA_397586928EDR_F0010008AUT_04096M_.JPG","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":2674,"sol":1,"camera":{"id":26,"name":"NAVCAM","rover_id":5,"full_name":"Navigation Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00001/opgs/edr/ncam/NRA_397586928EDR_F0010008AUT_04096M_.JPG","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":32445,"sol":1,"camera":{"id":26,"name":"NAVCAM","rover_id":5,"full_name":"Navigation Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00001/opgs/edr/ncam/NLA_397586934EDR_F0010008AUT_04096M_.JPG","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":49201,"sol":1,"camera":{"id":26,"name":"NAVCAM","rover_id":5,"full_name":"Navigation Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00001/opgs/edr/ncam/NRA_397586934EDR_F0010008AUT_04096M_.JPG","earth_date":"2012-08-07","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}}
    ],
    error: null,
    loaded: false,
    photoPage: 1,
  },
  getters: {
    getSol: (state) => state.sol,
    getPictures: (state) => state.pictures,
    getError: (state) => state.error,
    getLoaded: (state) => state.loaded,
    getRover: (state) => state.nasa_rover,
    getEndpoint: (state) => state.nasa_endpoint,
    getNasaKey: (state) => state.nasa_key,
    getPhotoPage: (state) => state.photoPage,
  },
  mutations: {
    setSol(state, payload) {
      state.sol = payload;
    },
    setPictures(state, payload) {
      state.pictures = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setLoaded(state, payload) {
      state.loaded = payload;
    },
    setRover(state, payload) {
      state.nasa_rover = payload;
    },
    setPhotoPage(state, payload) {
      state.photoPage = payload;
    },
  },
  actions: {
    triggerSetSol({ commit }, payload) {
      commit("setSol", payload);
    },
    triggerSetPictures({ commit }, payload) {
      commit("setPictures", payload);
    },
    triggerSetError({ commit }, payload) {
      commit("setError", payload);
    },
    triggerSetLoaded({ commit }, payload) {
      commit("setLoaded", payload);
    },
    triggerSetRover({ commit }, payload) {
      commit("setRover", payload);
    },
    triggerSetPhotoPage({ commit }, payload) {
      commit("setPhotoPage", payload);
    },
  },
});
