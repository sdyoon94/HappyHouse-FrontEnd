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
            v-model="announcement.announcementTitle"
            type="text"
            required
            placeholder="제목 입력..."
          ></b-form-input>
        </b-form-group>

        <b-form-group id="content-group" label="내용:" label-for="content">
          <b-form-textarea
            id="content"
            v-model="announcement.announcementContent"
            placeholder="내용 입력..."
            rows="10"
            max-rows="15"
            required
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary" class="m-1">글작성</b-button>
        <b-button type="reset" variant="danger" class="m-1">초기화</b-button>
        <input type="checkbox" name="public" id="public" />
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
      announcement: {
        userId: "admin",
        announcementTitle: "",
        announcementContent: "",
      },
    };
  },
  props: {
    type: { type: String },
  },
  created() {
    if (this.type === "modify") {
      http
        .get(`/announcement/${this.$route.params.announcementIndex}`)
        .then(({ data }) => {
          this.announcement.userId = data.userId;
          this.announcement.announcementTitle = data.announcementTitle;
          this.announcement.announcementContent = data.announcementContent;
        });
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      let err = true;
      let msg = "";

      !this.announcement.announcementTitle &&
        ((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.announcement.announcementContent &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      this.type === "register" ? this.registQna() : this.modifyQna();
    },
    onReset(event) {
      event.preventDefault();
      this.announcement.announcementTitle = "";
      this.announcement.announcementContent = "";
    },
    registQna() {
      console.log(this.announcement),
        http
          .post(`/announcement`, {
            userId: this.announcement.userId,
            announcementTitle: this.announcement.announcementTitle,
            announcementContent: this.announcement.announcementContent,
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
          .put(`/announcement`, {
            announcementIndex: this.$route.params.announcementIndex,
            userId: this.announcement.userId,
            announcementTitle: this.announcement.announcementTitle,
            announcementContent: this.announcement.announcementContent,
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
      this.$router.push({ name: "announcementList" });
    },
  },
};
</script>

<style></style>
