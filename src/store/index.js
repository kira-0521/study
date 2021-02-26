import { createStore } from "vuex";

export default createStore({
  state: {
    studyTime: "", // 時間
    studyDensity: "", // 密度
    studyContent: "", // 内容
    latitude: 0,
    longitude: 0,
    posts: []
  },
  mutations: {},
  actions: {},
  modules: {}
});
