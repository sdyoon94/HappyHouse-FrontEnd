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
        private: false,
      },
    };
  },
  props: {
    type: { type: String },
  },
  created() {
    if (this.type === "modify") {
      // http.get(`/qna/${this.$route.params.QnAIndex}`).then(({ data }) => {
      // this.qna.userId=data.qna.userId
      //   this.qna.QnATitle = data.qna.QnATitle;
      //   this.qna.QnAcontent = data.qna.QnAcontent;
      //   this.qna.private = data.qna.private;
      //   // this.qna = data;
      // });

      this.qna.QnATitle = "test Q&A";
      this.qna.QnAcontent = "test content 입니다.";
      this.qna.private = true;
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
      console.log("regist"),
        http
          .post(`/qna`, {
            userId: this.qna.userId,
            QnATitle: this.qna.QnATitle,
            QnAContent: this.qna.QnAcontent,
            private: this.qna.private,
          })
          .then(({ data }) => {
            let msg = "등록 처리시 문제가 발생했습니다.";
            if (data === "success") {
              msg = "등록이 완료되었습니다.";
            }
            alert(msg);
            this.moveList();
          });
    },
    modifyQna() {
      console.log("modify"),
        http
          .put(`/qna/${this.$route.params.QnAIndex}`, {
            QnAIndex: this.$route.params.QnAIndex,
            userId: this.qna.userId,
            QnATitle: this.qna.QnATitle,
            QnAContent: this.qna.QnAcontent,
            private: this.qna.private,
          })
          .then(({ data }) => {
            let msg = "수정 처리시 문제가 발생했습니다.";
            if (data === "success") {
              msg = "수정이 완료되었습니다.";
            }
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
