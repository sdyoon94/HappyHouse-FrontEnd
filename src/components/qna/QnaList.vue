<template>
  <div>
    <h3>Q&A 목록</h3>
    <!-- <button @click="moveWrite()">글쓰기</button> -->
    <b-button
      variant="outline-primary"
      v-if="checkLogined"
      @click="moveWrite()"
      class="float-end btn"
      >글쓰기</b-button
    >
    <table v-if="qnaLists.length" class="table">
      <colgroup>
        <col class="col-1" />
        <col class="col-6" />
        <col class="col-2" />
        <col class="col-2" />
      </colgroup>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성시각</th>
        </tr>
      </thead>
      <tbody>
        <qna-list-item
          v-for="qna in qnaLists"
          :key="qna.QnAIndex"
          v-bind="qna"
        ></qna-list-item>
      </tbody>
    </table>
    <h2 v-else>등록된 글이 없습니다.</h2>
  </div>
</template>

<script>
import http from "@/api/http";
import QnaListItem from "@/components/qna/item/QnaListItem";
export default {
  name: "QnaList",
  components: {
    QnaListItem,
  },
  data() {
    return {
      qnaLists: [],
      loginedUser: "admin",
    };
  },
  created() {
    http.get(`/qna`).then(({ data }) => {
      this.qnaLists = data;
    });
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "qnaRegist" });
    },
    checkLogined() {
      if (this.loginedUser === "admin") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
