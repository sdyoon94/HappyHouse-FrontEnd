<template>
  <div style="font-size: large">
    <div class="float-end" style="padding: 10px">
      <b-button @click="qnaList" variant="outline-primary">목록</b-button>
      <b-button @click="qnaModify" v-if="ifadmin()" variant="outline-warning">
        수정하기
      </b-button>
      <b-button @click="qnaDelete" v-if="ifadmin()" variant="outline-danger">
        삭제하기
      </b-button>
    </div>
    <table class="table">
      <thead>
        <th class="col-9">제목</th>
        <th class="col-1">작성자</th>
        <th class="col-2">작성 시각</th>
      </thead>
      <tbody>
        <tr>
          <td>{{ qnaLists.qnATitle }}</td>
          <td>{{ qnaLists.userId }}</td>
          <td>{{ qnaLists.qnARegtime }}</td>
        </tr>
        <tr>
          <th colspan="3">내 용</th>
        </tr>
        <tr style="height: 30vh">
          <th colspan="3" class="text-left" style="padding: 30px">
            {{ qnaLists.qnAContent }}
          </th>
        </tr>
      </tbody>
    </table>
    <div v-show="qnaCommentList()" class="flex">
      <colgroup>
        <col class="col-10" />
        <col class="col-4" />
      </colgroup>
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
    <div v-if="ifadmin()">
      <form action="" @submit="onSubmit">
        <input type="text" v-model="comment" required /><b-button
          type="submit"
          variant="outline-success"
        >
          댓글 작성
        </b-button>
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
      qnaLists: [],
      qnaCommentLists: [],
      comment: "",
    };
  },
  created() {
    // console.log(this.$route.params.QnAIndex),
    http.get(`/qna/${this.$route.params.QnAIndex}`).then(({ data }) => {
      this.qnaLists = data;
      // console.log(data);
    });
    http.get(`/qna/comment/${this.$route.params.QnAIndex}`).then(({ data }) => {
      this.qnaCommentLists = data;
      console.log(this.qnaCommentLists);
    });
  },
  methods: {
    ifadmin() {
      if (this.$store.state.logined.userId.length < 6) {
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
        this.$router.go();
      }
    },
    qnaCommentList() {
      if (this.qnaCommentLists.length != 0) {
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
          qnAIndex: this.$route.params.QnAIndex,
        })
        .then(({ data }) => {
          console.log(data);
          this.comment = "";
          let msg = "등록이 완료되었습니다.";
          alert(msg);
          http
            .get(`/qna/comment/${this.$route.params.QnAIndex}`)
            .then(({ data }) => {
              this.qnaCommentLists = data;
            })
            .catch(() => {
              let msg = "등록 중 오류가 발생하였습니다.";
              alert(msg);
            });
        });
    },
  },
};
</script>

<style></style>
