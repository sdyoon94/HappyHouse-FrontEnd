<template>
  <section id="index_section">
    <div class="card col-sm-12 mt-1" style="min-height: 850px">
      <div class="card-body">
        <div class="form-group form-inline justify-content-center">
          <button @click="APITest">주소 api</button>
        </div>
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
        <kakaomap :dealList="dealList"></kakaomap>
      </div>
    </div>
  </section>
</template>

<script src="//t1.daum.cdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script>
import http from "@/api/http";
import kakaomap from "@/components/home/kakaomap/KakaoMap.vue";
export default {
  data() {
    return {
      dongCode: 0,
      dealList: null,
    };
  },
  components: { kakaomap },
  methods: {
    search() {
      http.get(`/map/apt/${this.dongCode}`).then(({ data }) => {
        this.dealList = data;
      });
    },
    APITest() {
      new daum.Postcode({
        oncomplete: function (data) {
          console.log(data);
        },
        width: "100%",
        height: "100%",
      }).open();
    },
  },
};
</script>

<style></style>
