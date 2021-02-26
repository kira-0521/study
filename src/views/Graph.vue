<template>
  <div class="content">
    <router-link to="/input" active-class="link">入力画面へ</router-link>
    <div class="list-area">
      <ul>
        <div v-for="post in posts" :key="post">
          <li>{{ post.studyTime.stringValue }}</li>
          <li>{{ post.studyArea.stringValue }}</li>
          <li>{{ post.studyDensity.stringValue }}</li>
          <li>{{ post.studyContent.stringValue }}</li>
          <li>{{ post.nowTime.stringValue }}</li>
        </div>
      </ul>
    </div>
    <div class="areas">
      <ul>
        <li v-for="area in areas" :key="area">{{ area }}</li>
      </ul>
    </div>
    <button @click="positionGet">場所の表示</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      areas: []
    };
  },
  created() {
    axios
      .get("/posts")
      .then(response => {
        console.log(response);
        let array = response.data.documents;
        for (let i = 0; i < array.length; i++) {
          this.posts.push(array[i].fields);
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    positionGet() {
      axios.get("/posts").then(response => {
        let locations = [];
        let area = response.data.documents;
        area.forEach(value => {
          locations.push(value.fields.studyArea.stringValue);
        });
        // locationsの被りを削除して新た配列
        const locations2 = [...new Set(locations)];
        this.areas = locations2;
        console.log(locations2);
        console.log(this.areas);
      });
    }
  }
};
</script>