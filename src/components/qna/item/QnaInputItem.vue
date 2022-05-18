<template>
  <b-row class="mb-1">
    <b-col style="text-align: left">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="subject-group"
          label="제목:"
          label-for="subject"
          description="제목을 입력하세요."
        >
          <b-form-input
            id="title"
            v-model="qna.QnATitle"
            type="text"
            required
            placeholder="제목 입력..."
          ></b-form-input>
        </b-form-group>

        <b-form-group id="content-group" label="내용:" label-for="content">
          <b-form-textarea
            id="content"
            v-model="qna.QnAcontent"
            placeholder="내용 입력..."
            rows="10"
            max-rows="15"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary" class="m-1">글작성</b-button>
        <b-button type="reset" variant="danger" class="m-1">초기화</b-button>
        <input
          type="checkbox"
          name="public"
          id="public"
          v-model="qna.private"
        />
        비공개글
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import http from "@/api/http";

export default {
  name: "BoardInputItem",
  data() {
    return {
      qna: {
        userId: "admin",
        QnATitle: "",
        QnAcontent: "",
        Private: false,
      },
    };
  },
  props: {
    type: { type: String },
  },
  created() {
    if (this.type === "modify") {
      http.get(`/qna/${this.$route.params.QnAIndex}`).then(({ data }) => {
        this.qna.userId = data.userId;
        this.qna.QnATitle = data.qnATitle;
        this.qna.QnAcontent = data.qnAContent;
        this.qna.Private = data.private;
      });
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      let err = true;
      let msg = "";

      !this.qna.QnATitle &&
        ((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.qna.QnAcontent &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      this.type === "register" ? this.registQna() : this.modifyQna();
    },
    onReset(event) {
      event.preventDefault();
      this.qna.QnATitle = "";
      this.qna.QnAcontent = "";
    },
    registQna() {
      console.log(this.qna),
        http
          .post(`/qna`, {
            userId: this.qna.userId,
            qnATitle: this.qna.QnATitle,
            qnAContent: this.qna.QnAcontent,
            private1: this.qna.private,
          })
          .then(({ data }) => {
            console.log("결과 : ", data);
            let msg = "등록이 완료되었습니다.";
            alert(msg);
            this.moveList();
          })
          .catch(() => {
            let msg = "등록 중 오류가 발생하였습니다.";
            alert(msg);
            this.moveList();
          });
    },
    modifyQna() {
      console.log("modify"),
        http
          .put(`/qna`, {
            qnAIndex: this.$route.params.QnAIndex,
            userId: this.qna.userId,
            qnATitle: this.qna.QnATitle,
            qnAContent: this.qna.QnAcontent,
            private1: this.qna.private,
          })
          .then(({ data }) => {
            console.log("결과 : ", data);
            let msg = "등록이 완료되었습니다.";
            alert(msg);
            this.moveList();
          })
          .catch(() => {
            let msg = "등록 중 오류가 발생하였습니다.";
            alert(msg);
            this.moveList();
          });
    },
    moveList() {
      this.$router.push({ name: "qnaList" });
    },
  },
};
</script>

<style></style>
