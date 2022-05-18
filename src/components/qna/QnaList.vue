<template>
  <div>
    <h3>Q&A 목록</h3>
    <!-- <button @click="moveWrite()">글쓰기</button> -->
    <b-button variant="outline-primary" v-if="checkLogined" @click="moveWrite()"
      >글쓰기</b-button
    >
    <table v-if="qnaLists.length">
      <td>번호</td>
      <td>제목</td>
      <td>작성자</td>
      <td>작성시각</td>
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
      // qnaLists: [],
      qnaLists: [
        {
          QnAIndex: 1,
          userId: "ssafy_admin",
          QnARegtime: "2022-02-02 13:22:22",
          QnATitle: "test Q&A",
          QnAContent: "test content 입니다.",
          public: true,
        },
      ],
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
