<template>
  <div>
    <h1>{{ dongName }} 거래정보</h1>
    <div class="form-group form-inline justify-content-center">
      <button @click="APITest()">주소 검색하기</button>
      <button @click="curLoc">현재위치 주변</button>
    </div>
    <kakaomap :dealList="dealList"></kakaomap>
    <table class="table mt-2">
      <colgroup>
        <col width="10%" />
        <col width="20%" />
        <col width="30%" />
        <col width="10%" />
        <col width="10%" />
        <col width="20%" />
      </colgroup>
      <thead>
        <tr>
          <th class="text-center">번호</th>
          <th class="text-center">아파트이름</th>
          <th class="text-center">주소</th>
          <th class="text-center">건축연도</th>
          <th class="text-center">거래금액</th>
          <th class="text-center">인근 지하철역</th>
        </tr>
      </thead>
      <tbody id="searchResult">
        <tr v-for="(item, i) in dealList" :key="i">
          <td class="text-center">{{ item.aptCode }}</td>
          <td class="text-center">{{ item.aptName }}</td>
          <td class="text-center">
            {{ item.sidoName }} {{ item.gugunName }} {{ item.dongName }}
            {{ item.jibun }}
          </td>
          <td class="text-center">{{ item.buildYear }}</td>
          <td class="text-center">{{ item.recentPrice }}</td>
          <td class="text-center">
            {{ item.subwayLine }} {{ item.subwayName }}역
            {{ Math.round(item.subwayDistance * 1000) / 1000 }}km
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "@/api/http";
import kakaomap from "@/components/home/kakaomap/KakaoMap.vue";
import axios from "axios";

export default {
  data() {
    return {
      dongName: "",
      dongCode: "",
      dealList: null,
      cur: { x: null, y: null },
    };
  },
  created() {
    this.curLoc();
  },
  components: { kakaomap },
  methods: {
    search() {
      http.get(`/map/apt/${this.dongCode}`).then(({ data }) => {
        this.dealList = data;
      });
    },
    APITest() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          this.dongCode = data.bcode;
          this.dongName = data.bname;
          this.search();
        },
      }).open();
    },
    curLoc() {
      navigator.geolocation.getCurrentPosition((pos) => {
        axios({
          method: "GET",
          url: "https://dapi.kakao.com/v2/local/geo/coord2regioncode",
          params: { x: pos.coords.longitude, y: pos.coords.latitude },
          headers: {
            // Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_REST_KEY}`,
            Authorization: "KakaoAK e6e830a1b3324a21b017d03c50161fbd",
          },
        }).then(({ data }) => {
          console.log(data);
          // this.dongCode = data.documents[0].code;
          // this.dongName = data.documents[0].region_3depth_name;
          // this.dongCode = 1144012300;
          // this.dongName = "망원동";

          this.dongCode = 1111017100;
          this.dongName = "명륜2가";
          this.search();
        });
      });
    },
  },
};
</script>

<style></style>
