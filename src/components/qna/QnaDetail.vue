<template>
  <div>
    <div>
      <h1>제목 : {{ qnaLists[0].QnATitle }}</h1>
      <button @click="qnaList">목록</button>
      <button @click="qnaModify" v-if="checkLogined()">수정하기</button>
      <button @click="qnaDelete" v-if="checkLogined()">삭제하기</button>
      <h2>작성 시각 : {{ qnaLists[0].QnARegtime }}</h2>
      <h2>작성자 : {{ qnaLists[0].userId }}</h2>
      {{ qnaLists[0].QnAContent }}
    </div>
    <div v-show="qnaCommentList()">
      <tr>
        <th>내용</th>
        <th>작성 시간</th>
      </tr>
      <qna-comment-item
        v-for="comment in qnaCommentLists"
        :key="comment.commentIndex"
        v-bind="comment"
      ></qna-comment-item>
    </div>
    <div v-if="checkLogined()">
      <form action="" @submit="onSubmit">
        <input type="text" v-model="comment" required /><button>
          댓글 작성
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
import QnaCommentItem from "@/components/qna/item/QnaCommentItem";
export default {
  name: "QnaList",
  components: { QnaCommentItem },
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
          private: true,
        },
      ],
      qnaCommentLists: [
        {
          commentIndex: 1,
          commentContent: "commentContent",
          commentRegtime: "2022-02-02 13:22:22",
          QnAIndex: 1,
        },
      ],
      // qnaCommentLists: [{}],
      comment: "",
      loginedUser: "admin",
    };
  },
  created() {
    // console.log(this.$route.params.QnAIndex),
    http.get(`/qna/${this.$route.params.QnAIndex}`).then(({ data }) => {
      this.qnaLists = data;
    });
    http.get(`/qna/comment/${this.$route.params.QnAIndex}`).then(({ data }) => {
      this.qnaCommentLists = data;
    });
  },
  methods: {
    checkLogined() {
      if (this.loginedUser === "admin") {
        return true;
      } else {
        return false;
      }
    },
    qnaList() {
      this.$router.push({ name: "qnaList" });
    },
    qnaModify() {
      this.$router.push({
        name: "qnaModify",
        params: { QnAIndex: this.$route.params.QnAIndex },
      });
    },
    qnaDelete() {
      if (confirm("정말 삭제하시겠습니까??")) {
        http.delete(`/qna/${this.$route.params.QnAIndex}`).then(({ data }) => {
          console.log(data);
          alert("삭제하였습니다.");
        });
        this.$router.push({ name: "qnaList" });
      }
    },
    qnaCommentList() {
      if (this.qnaCommentLists) {
        return true;
      } else {
        return false;
      }
    },
    onSubmit(event) {
      event.preventDefault();
      this.commentRegist();
    },
    commentRegist() {
      http
        .post(`/qna/comment/${this.$route.params.QnAIndex}`, {
          commentContent: this.comment,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
            this.comment = "";
            http
              .get(`/qna/comment/${this.$route.params.QnAIndex}`)
              .then(({ data }) => {
                this.qnaCommentLists = data;
              });
          }
          alert(msg);
          // this.$router.push({
          //   name: "qnaDetail",
          //   params: { QnAIndex: this.$route.params.QnAIndex },
          // });
        });
    },
  },
};
</script>

<style></style>
