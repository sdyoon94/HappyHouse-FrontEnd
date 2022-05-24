<template>
  <div>
    <h3>Q&A 목록</h3>
    <!-- <button @click="moveWrite()">글쓰기</button> -->
    <b-button
      variant="outline-primary"
      v-if="checkLogined()"
      @click="moveWrite()"
      class="float-end btn"
      >글쓰기</b-button
    >
    <table v-if="qnaCurrList.length" class="table">
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
          v-for="qna in qnaCurrList"
          :key="qna.QnAIndex"
          v-bind="qna"
        ></qna-list-item>
      </tbody>
    </table>
    <h2 v-else>등록된 글이 없습니다.</h2>

    <qna-pagination
      v-if="qnaCurrList.length"
      :currPageNum="currPageNum"
      :totalPageNum="totalPageNum"
      @setPageNum="setPageNum"
    ></qna-pagination>
    <input type="text" v-model="searchTitle" />&nbsp;<input
      type="button"
      @click="searchQnaList"
      value="제목 검색"
    />
  </div>
</template>

<script>
import http from "@/api/http";
import QnaListItem from "@/components/qna/item/QnaListItem";
import QnaPagination from "@/components/qna/item/QnaPagination.vue";

export default {
  name: "QnaList",
  components: {
    QnaListItem,
    QnaPagination,
  },
  data() {
    return {
      qnaLists: [],
      qnaCurrList: [],
      currPageNum: 1,
      totalPageNum: 0,
      searchTitle: "",
    };
  },
  created() {
    http
      .get(`/qna`)
      .then(({ data }) => {
        this.totalPageNum = Math.ceil(data.length / 10);
        this.qnaLists = data;
        this.qnaCurrList = this.qnaLists.slice(
          this.currPageNum * 10 - 10,
          this.currPageNum * 10
        );
      })
      .catch(() => {
        console.log("오류 발생");
      });
  },
  watch: {
    currPageNum() {
      this.qnaCurrList = this.qnaLists.slice(
        this.currPageNum * 10 - 10,
        this.currPageNum * 10
      );
    },
  },
  methods: {
    setPageNum(pageNum) {
      this.currPageNum = pageNum;
    },
    setCurrPage(pageNum) {
      this.currPageNum = pageNum;
    },
    ifadmin() {
      if (this.$store.state.logined.userId.length < 6) {
        return true;
      } else {
        return false;
      }
    },
    moveWrite() {
      this.$router.push({ name: "qnaRegist" });
    },
    checkLogined() {
      if (this.$store.state.logined.userId.length != 0) {
        return true;
      } else {
        return false;
      }
    },
    searchQnaList() {
      if (this.searchTitle === "") {
        alert("검색칸이 비었습니다.");
      } else {
        this.currPageNum = 1;
        http
          .post(`/qna/search`, {
            searchtitle: this.searchTitle,
          })
          .then(({ data }) => {
            this.totalPageNum = Math.ceil(data.length / 10);
            this.qnaLists = data;
            this.qnaCurrList = this.qnaLists.slice(
              this.currPageNum * 10 - 10,
              this.currPageNum * 10
            );
          })
          .catch(() => {
            console.log("오류 발생");
          });
      }
    },
  },
};
</script>

<style></style>
