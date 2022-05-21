<template>
  <div>
    <qna-input-item type="modify"></qna-input-item>
  </div>
</template>

<script>
import http from "@/api/http";
import QnaInputItem from "@/components/qna/item/QnaInputItem.vue";
export default {
  name: "QnaList",
  components: { QnaInputItem },
  data() {
    return {
      qnaLists: [],
      // qnaLists: [
      //   {
      //     QnAIndex: 1,
      //     userId: "ssafy_admin",
      //     QnARegtime: "2022-02-02 13:22:22",
      //     QnATitle: "test Q&A",
      //     QnAContent: "test content 입니다.",
      //     public: true,
      //   },
      // ],
      // qnaCommentLists: [
      //   {
      //     commentIndex: 1,
      //     commentContent: "commentContent",
      //     commentRegtime: "2022-02-02 13:22:22",
      //     QnAIndex: 1,
      //   },
      // ],
      qnaCommentLists: [],
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
    qnaCommentList() {
      if (this.qnaCommentLists) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
