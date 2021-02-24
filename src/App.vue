<template>
  <div class="container">
    <label for="studyTime">勉強時間: </label>
    <input id="studyTime" v-model="studyTime" type="tel" />時間
    <label for="studyDensity">勉強密度: </label>
    <select id="studyDensity" v-model="studyDensity">
      <option value="薄">薄</option>
      <option value="普">普</option>
      <option value="濃">濃</option>
    </select>
    <label for="studyContent">勉強内容: </label>
    <textarea id="studyContent" v-model="studyContent" placeholder="任意" />
    <button @click="submitStudy">投稿する</button>
    <button @click="getLocation">現在地を取得</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      studyTime: "", // 時間
      studyDensity: "", // 密度
      studyContent: "", // 内容
      latitude: 0,
      longitude: 0
    };
  },
  computed: {
    getNow() {
      const now = new Date();
      const year = now.getFullYear();
      const mon = now.getMonth() + 1;
      const day = now.getDate();
      const hour = now.getHours();
      const min = now.getMinutes();
      return `${year}年${mon}月${day}日${hour}時${min}分`;
    }
  },
  methods: {
    submitStudy() {
      axios
        .post(
          "https://firestore.googleapis.com/v1/projects/studyapp-29cc7/databases/(default)/documents/posts",
          {
            fields: {
              studyTime: {
                stringValue: this.studyTime
              },
              studyDensity: {
                stringValue: this.studyDensity
              },
              studyContent: {
                stringValue: this.studyContent
              },
              nowTime: {
                stringValue: this.getNow
              }
              // latitude: {
              //   stringValue: this.latitude
              // },
              // longitude: {
              //   stringValue: this.longitude
              // }
            }
          }
        )
        .then(() => {
          this.latitude = 0;
          this.longitude = 0;
          this.studyTime = "";
          this.studyDensity = "";
          this.studyContent = "";
        })
        .catch(error => {
          console.log(error.response);
        })
    }
    // getLocation() {
    //   if (!navigator.geolocation) {
    //     alert(
    //       "現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。"
    //     );
    //     return;
    //   }

    //   const options = {
    //     // より精度の高い位置情報を取得する
    //     enableHighAccuracy: false,
    //     // エラーコールバックが呼び出されるまでの時間
    //     timeout: 5000,
    //     // 位置情報の有効期限
    //     maximumAge: 0
    //   };

    //   // 成功CB・エラーCB
    //   navigator.geolocation.getCurrentPosition(
    //     this.success,
    //     this.error,
    //     options
    //   );
    // },
    // success(position) {
    //   console.log(position);
    //   this.latitude = position.coords.latitude;
    //   this.longitude = position.coords.longitude;
    // },
    // error(error) {
    //   switch (error.code) {
    //     case 1: //PERMISSION_DENIED
    //       alert("位置情報の利用が許可されていません");
    //       break;
    //     case 2: //POSITION_UNAVAILABLE
    //       alert("現在位置が取得できませんでした");
    //       break;
    //     case 3: //TIMEOUT
    //       alert("タイムアウトになりました");
    //       break;
    //     default:
    //       alert("現在位置が取得できませんでした");
    //       break;
    //   }
    // }
  }
};
</script>
